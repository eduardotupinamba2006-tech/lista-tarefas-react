import type { Todo } from '../types';

interface TodoItemProps {
  todo: Todo;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
}

export function TodoItem({ todo, onToggle, onDelete }: TodoItemProps) {
  return (
    <li className={`todo-item ${todo.done ? 'is-done' : ''}`}>
      <label>
        <input type="checkbox" checked={todo.done} onChange={() => onToggle(todo.id)} />
        <span>{todo.text}</span>
      </label>
      <button className="delete-btn" onClick={() => onDelete(todo.id)} aria-label="Remover">✕</button>
    </li>
  );
}
