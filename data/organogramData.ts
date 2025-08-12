import { OrganogramData } from '@/types/organogram';

export const organogramData: OrganogramData = {
  company: {
    name: 'SimpleWay Atacado S.A.',
    description: 'Organograma Corporativo Otimizado'
  },
  levels: [
    {
      id: 'presidencia',
      title: 'Presidência',
      positions: [
        { id: 'ceo', title: 'CEO', subtitle: 'Chief Executive Officer', level: 'ceo', department: 'presidencia' }
      ]
    },
    {
      id: 'c-level',
      title: 'Executivos C-Level',
      positions: [
        { id: 'cfo', title: 'CFO', subtitle: 'Chief Financial Officer', level: 'c-level', department: 'financeiro' },
        { id: 'coo', title: 'COO', subtitle: 'Chief Operating Officer', level: 'c-level', department: 'operacoes' },
        { id: 'cto', title: 'CTO', subtitle: 'Chief Technology Officer', level: 'c-level', department: 'ti' },
        { id: 'cmo', title: 'CMO', subtitle: 'Chief Marketing Officer', level: 'c-level', department: 'marketing' },
        { id: 'chro', title:'CHRO', subtitle: 'Chief Human Resources Officer', level: 'c-level', department: 'rh' },
        { id: 'cso', title: 'CSO', subtitle: 'Chief Strategy Officer', level: 'c-level', department: 'estrategia' },
        { id: 'cpo', title: 'CPO', subtitle: 'Chief Product Officer', level: 'c-level', department: 'produto' }
      ]
    },
    {
      id: 'diretores',
      title: 'Diretores',
      positions: [
        { id: 'dir-fin', title: '2 Diretores', subtitle: 'Financeiro', level: 'director', department: 'financeiro' },
        { id: 'dir-ops', title: '3 Diretores', subtitle: 'Operações', level: 'director', department: 'operacoes' },
        { id: 'dir-ti',  title: '2 Diretores', subtitle: 'Tecnologia', level: 'director', department: 'ti' },
        { id: 'dir-mkt', title: '2 Diretores', subtitle: 'Marketing', level: 'director', department: 'marketing' },
        { id: 'dir-rh',  title: '2 Diretores', subtitle: 'RH', level: 'director', department: 'rh' },
        { id: 'dir-estr',title: '2 Diretores', subtitle: 'Estratégia', level: 'director', department: 'estrategia' },
        { id: 'dir-prod',title: '2 Diretores', subtitle: 'Produto', level: 'director', department: 'produto' }
      ]
    },
    {
      id: 'gerentes',
      title: 'Gerentes',
      positions: [
        { id: 'ger-fin', title: '3 Gerentes', subtitle: 'Controladoria/Contabilidade', level: 'manager', department: 'financeiro' },
        { id: 'ger-ops', title: '10 Gerentes', subtitle: 'Operações', level: 'manager', department: 'operacoes' },
        { id: 'ger-ti',  title: '4 Gerentes', subtitle: 'Sistemas', level: 'manager', department: 'ti' },
        { id: 'ger-mkt', title: '3 Gerentes', subtitle: 'Growth', level: 'manager', department: 'marketing' },
        { id: 'ger-rh',  title: '3 Gerentes', subtitle: 'Pessoas', level: 'manager', department: 'rh' },
        { id: 'ger-estr',title: '3 Gerentes', subtitle: 'PMO', level: 'manager', department: 'estrategia' },
        { id: 'ger-prod',title: '3 Gerentes', subtitle: 'Produto', level: 'manager', department: 'produto' }
      ]
    },
    {
      id: 'supervisores',
      title: 'Supervisores',
      positions: [
        { id: 'sup-fin', title: '17 Supervisores', subtitle: 'Financeiro', level: 'supervisor', department: 'financeiro' },
        { id: 'sup-ops', title: '102 Supervisores', subtitle: 'Operações', level: 'supervisor', department: 'operacoes' },
        { id: 'sup-ti',  title: '16 Supervisores', subtitle: 'Desenvolvimento/TI', level: 'supervisor', department: 'ti' },
        { id: 'sup-mkt', title: '16 Supervisores', subtitle: 'Mídia', level: 'supervisor', department: 'marketing' },
        { id: 'sup-rh',  title: '16 Supervisores', subtitle: 'RH', level: 'supervisor', department: 'rh' },
        { id: 'sup-estr',title: '12 Supervisores', subtitle: 'Planejamento', level: 'supervisor', department: 'estrategia' },
        { id: 'sup-prod',title: '12 Supervisores', subtitle: 'Roadmap', level: 'supervisor', department: 'produto' }
      ]
    },
    {
      id: 'analistas',
      title: 'Analistas',
      positions: [
        { id: 'ana-fin',  title: '385 Analistas', subtitle: 'Financeiro',          level: 'analyst', department: 'financeiro' },
        { id: 'ana-ops',  title: '1072 Analistas', subtitle: 'Operações',           level: 'analyst', department: 'operacoes' },
        { id: 'ana-ti',   title: '243 Analistas', subtitle: 'Desenvolvimento/TI',  level: 'analyst', department: 'ti' },
        { id: 'ana-mkt',  title: '211 Analistas', subtitle: 'Marketing/Performance',         level: 'analyst', department: 'marketing' },
        { id: 'ana-rh',   title: '51 Analistas', subtitle: 'RH',                  level: 'analyst', department: 'rh' },
        { id: 'ana-estr', title: '46 Analistas', subtitle: 'Inteligência',        level: 'analyst', department: 'estrategia' },
        { id: 'ana-prod', title: '83 Analistas', subtitle: 'Produto',             level: 'analyst', department: 'produto' }
      ]
    },
    {
      id: 'assistentes',
      title: 'Assistentes',
      positions: [
        { id: 'ass-fin',  title: '109 Assistentes', subtitle: 'Financeiro',      level: 'assistant', department: 'financeiro' },
        { id: 'ass-ops',  title: '2093 Assistentes', subtitle: 'Operações',       level: 'assistant', department: 'operacoes' },
        { id: 'ass-ti',   title: '489 Assistentes', subtitle: 'Suporte',         level: 'assistant', department: 'ti' },
        { id: 'ass-mkt',  title: '494 Assistentes', subtitle: 'Marketing',       level: 'assistant', department: 'marketing' },
        { id: 'ass-rh',   title: '162 Assistentes', subtitle: 'RH',              level: 'assistant', department: 'rh' },
        { id: 'ass-estr', title: '28 Assistentes', subtitle: 'Planejamento',    level: 'assistant', department: 'estrategia' },
        { id: 'ass-prod', title: '137 Assistentes', subtitle: 'Produto',         level: 'assistant', department: 'produto' }
      ]
    },
    {
      id: 'estagiarios',
      title: 'Estagiários',
      positions: [
        { id: 'est-fin',  title: '59 Estagiários', subtitle: 'Financeiro',   level: 'intern', department: 'financeiro' },
        { id: 'est-ops',  title: '193 Estagiários', subtitle: 'Operações',    level: 'intern', department: 'operacoes' },
        { id: 'est-ti',   title: '48 Estagiários', subtitle: 'Suporte',      level: 'intern', department: 'ti' },
        { id: 'est-mkt',  title: '31 Estagiários', subtitle: 'Marketing',    level: 'intern', department: 'marketing' },
        { id: 'est-rh',   title: '12 Estagiários', subtitle: 'RH',           level: 'intern', department: 'rh' },
        { id: 'est-estr', title: '5 Estagiários', subtitle: 'Planejamento', level: 'intern', department: 'estrategia' },
        { id: 'est-prod', title: '8 Estagiários', subtitle: 'Produto',      level: 'intern', department: 'produto' }
      ]
    }
  ]
}; 
