import type { Filter } from '../types';

interface FilterBarProps {
  current: Filter;
  onChange: (filter: Filter) => void;
  remaining: number;
}

const FILTERS: Filter[] = ['todas', 'ativas', 'concluidas'];

export function FilterBar({ current, onChange, remaining }: FilterBarProps) {
  return (
    <div className="filter-bar">
      <span className="remaining">{remaining} pendente{remaining !== 1 ? 's' : ''}</span>
      <div className="filter-buttons">
        {FILTERS.map(filter => (
          <button
            key={filter}
            className={filter === current ? 'active' : ''}
            onClick={() => onChange(filter)}
          >
            {filter}
          </button>
        ))}
      </div>
    </div>
  );
}
