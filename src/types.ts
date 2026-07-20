export interface Todo {
  id: string;
  text: string;
  done: boolean;
}

export type Filter = 'todas' | 'ativas' | 'concluidas';
