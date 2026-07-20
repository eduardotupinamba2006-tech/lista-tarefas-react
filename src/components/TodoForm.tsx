import { useState } from 'react';
import type { FormEvent } from 'react';

interface TodoFormProps {
  onAdd: (text: string) => void;
}

export function TodoForm({ onAdd }: TodoFormProps) {
  const [text, setText] = useState('');

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const trimmed = text.trim();
    if (!trimmed) return;
    onAdd(trimmed);
    setText('');
  }

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="O que você precisa fazer?"
        value={text}
        onChange={e => setText(e.target.value)}
        maxLength={120}
      />
      <button type="submit">Adicionar</button>
    </form>
  );
}
