export interface Position {
  id: string;
  title: string;
  subtitle?: string;
  level: 'ceo' | 'c-level' | 'vice-presidente' | 'director' | 'manager-senior' | 'manager' | 'supervisor' | 'analyst-senior' | 'analyst-pleno' | 'analyst' | 'assistant' | 'intern';
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