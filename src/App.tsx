import { useMemo, useState } from 'react';
import { TodoForm } from './components/TodoForm';
import { TodoItem } from './components/TodoItem';
import { FilterBar } from './components/FilterBar';
import { useLocalStorage } from './useLocalStorage';
import type { Filter, Todo } from './types';
import './App.css';

function App() {
  const [todos, setTodos] = useLocalStorage<Todo[]>('react-todos', []);
  const [filter, setFilter] = useState<Filter>('todas');

  function addTodo(text: string) {
    setTodos([...todos, { id: crypto.randomUUID(), text, done: false }]);
  }

  function toggleTodo(id: string) {
    setTodos(todos.map(t => (t.id === id ? { ...t, done: !t.done } : t)));
  }

  function deleteTodo(id: string) {
    setTodos(todos.filter(t => t.id !== id));
  }

  const filtered = useMemo(() => {
    if (filter === 'ativas') return todos.filter(t => !t.done);
    if (filter === 'concluidas') return todos.filter(t => t.done);
    return todos;
  }, [todos, filter]);

  const remaining = todos.filter(t => !t.done).length;

  return (
    <div className="page">
      <header>
        <h1>✅ Lista de Tarefas</h1>
        <p>To-do list construída com <strong>React</strong> + TypeScript — hooks, componentização e props tipadas.</p>
      </header>

      <TodoForm onAdd={addTodo} />
      <FilterBar current={filter} onChange={setFilter} remaining={remaining} />

      {filtered.length === 0 ? (
        <p className="empty-msg">Nenhuma tarefa por aqui.</p>
      ) : (
        <ul className="todo-list">
          {filtered.map(todo => (
            <TodoItem key={todo.id} todo={todo} onToggle={toggleTodo} onDelete={deleteTodo} />
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;
