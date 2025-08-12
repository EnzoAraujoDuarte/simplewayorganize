export interface Position {
  id: string;
  title: string;
  subtitle?: string;
  level: 'ceo' | 'c-level' | 'director' | 'manager-senior' | 'manager' | 'supervisor' | 'analyst' | 'assistant' | 'intern';
  department?: string;
}

export interface Level {
  id: string;
  title: string;
  positions: Position[];
}

export interface OrganogramData {
  company: {
    name: string;
    description: string;
  };
  levels: Level[];
} 