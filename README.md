# Lista de Tarefas — React

To-do list construída com **React + TypeScript**, usando um projeto Vite (`react-ts`). Demonstra componentização, hooks (`useState`, `useMemo`) e um hook customizado (`useLocalStorage`) para persistência.

## Funcionalidades
- Adicionar, concluir e remover tarefas
- Filtro por: todas / ativas / concluídas
- Contador de tarefas pendentes
- Persistência automática em `localStorage`

## Conceitos de React aplicados
- Componentização (`TodoForm`, `TodoItem`, `FilterBar`)
- Props tipadas com `interface`
- Hook customizado `useLocalStorage<T>`
- `useMemo` para lista filtrada derivada do estado

## Como rodar
```bash
npm install
npm run dev
```
