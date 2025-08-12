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
        { id: 'chro', title: 'CHRO', subtitle: 'Chief Human Resources Officer', level: 'c-level', department: 'rh' },
        { id: 'cso', title: 'CSO', subtitle: 'Chief Strategy Officer', level: 'c-level', department: 'estrategia' },
        { id: 'cpo', title: 'CPO', subtitle: 'Chief Product Officer', level: 'c-level', department: 'produto' }
      ]
    },
    {
      id: 'vice-presidencias',
      title: 'Vice-Presidências',
      positions: [
        { id: 'vp-financeiro', title: 'VP', subtitle: 'Financeiro', level: 'vice-presidente', department: 'financeiro' },
        { id: 'vp-operacoes', title: 'VP', subtitle: 'Operações', level: 'vice-presidente', department: 'operacoes' },
        { id: 'vp-tecnologia', title: 'VP', subtitle: 'Tecnologia', level: 'vice-presidente', department: 'ti' },
        { id: 'vp-marketing', title: 'VP', subtitle: 'Marketing', level: 'vice-presidente', department: 'marketing' },
        { id: 'vp-rh', title: 'VP', subtitle: 'Recursos Humanos', level: 'vice-presidente', department: 'rh' },
        { id: 'vp-estrategia', title: 'VP', subtitle: 'Estratégia', level: 'vice-presidente', department: 'estrategia' },
        { id: 'vp-produto', title: 'VP', subtitle: 'Produto', level: 'vice-presidente', department: 'produto' }
      ]
    },
    {
      id: 'diretores',
      title: 'Diretores',
      positions: [
        { id: 'dir-fin', title: 'Diretor', subtitle: 'Financeiro', level: 'director', department: 'financeiro' },
        { id: 'dir-ops', title: 'Diretor', subtitle: 'Operações', level: 'director', department: 'operacoes' },
        { id: 'dir-ti',  title: 'Diretor', subtitle: 'Tecnologia', level: 'director', department: 'ti' },
        { id: 'dir-mkt', title: 'Diretor', subtitle: 'Marketing', level: 'director', department: 'marketing' },
        { id: 'dir-rh',  title: 'Diretor', subtitle: 'RH', level: 'director', department: 'rh' },
        { id: 'dir-estr',title: 'Diretor', subtitle: 'Estratégia', level: 'director', department: 'estrategia' },
        { id: 'dir-prod',title: 'Diretor', subtitle: 'Produto', level: 'director', department: 'produto' }
      ]
    },
    {
      id: 'gerentes',
      title: 'Gerentes',
      positions: [
        { id: 'ger-fin', title: 'Gerente', subtitle: 'Controladoria', level: 'manager', department: 'financeiro' },
        { id: 'ger-ops', title: 'Gerente', subtitle: 'Operações', level: 'manager', department: 'operacoes' },
        { id: 'ger-ti',  title: 'Gerente', subtitle: 'Sistemas', level: 'manager', department: 'ti' },
        { id: 'ger-mkt', title: 'Gerente', subtitle: 'Growth', level: 'manager', department: 'marketing' },
        { id: 'ger-rh',  title: 'Gerente', subtitle: 'Pessoas', level: 'manager', department: 'rh' },
        { id: 'ger-estr',title: 'Gerente', subtitle: 'PMO', level: 'manager', department: 'estrategia' },
        { id: 'ger-prod',title: 'Gerente', subtitle: 'Produto', level: 'manager', department: 'produto' }
      ]
    },
    {
      id: 'supervisores',
      title: 'Supervisores',
      positions: [
        { id: 'sup-fin', title: '3 Supervisores', subtitle: 'Financeiro', level: 'supervisor', department: 'financeiro' },
        { id: 'sup-ops', title: '5 Supervisores', subtitle: 'Operações', level: 'supervisor', department: 'operacoes' },
        { id: 'sup-ti',  title: '10 Supervisores', subtitle: 'Suporte', level: 'supervisor', department: 'ti' },
        { id: 'sup-mkt', title: '10 Supervisores', subtitle: 'Mídia', level: 'supervisor', department: 'marketing' },
        { id: 'sup-rh',  title: '10 Supervisores', subtitle: 'RH', level: 'supervisor', department: 'rh' },
        { id: 'sup-estr',title: '2 Supervisores', subtitle: 'Planejamento', level: 'supervisor', department: 'estrategia' },
        { id: 'sup-prod',title: '2 Supervisores', subtitle: 'Roadmap', level: 'supervisor', department: 'produto' }
      ]
    },
    {
      id: 'analistas',
      title: 'Analistas',
      positions: [
        { id: 'ana-fin',  title: '85 Analistas', subtitle: 'Financeiro',          level: 'analyst-pleno', department: 'financeiro' },
        { id: 'ana-ops',  title: '72 Analistas', subtitle: 'Operações',           level: 'analyst-pleno', department: 'operacoes' },
        { id: 'ana-ti',   title: '43 Analistas', subtitle: 'Desenvolvimento/TI',  level: 'analyst-pleno', department: 'ti' },
        { id: 'ana-mkt',  title: '11 Analistas', subtitle: 'Performance',         level: 'analyst-pleno', department: 'marketing' },
        { id: 'ana-rh',   title: '21 Analistas', subtitle: 'RH',                  level: 'analyst-pleno', department: 'rh' },
        { id: 'ana-estr', title: '26 Analistas', subtitle: 'Inteligência',        level: 'analyst-pleno', department: 'estrategia' },
        { id: 'ana-prod', title: '15 Analistas', subtitle: 'Produto',             level: 'analyst-pleno', department: 'produto' }
      ]
    },
    {
      id: 'assistentes',
      title: 'Assistentes',
      positions: [
        { id: 'ass-fin',  title: '109 Assistentes', subtitle: 'Financeiro',      level: 'assistant', department: 'financeiro' },
        { id: 'ass-ops',  title: '267 Assistentes', subtitle: 'Operações',       level: 'assistant', department: 'operacoes' },
        { id: 'ass-ti',   title: '189 Assistentes', subtitle: 'Suporte',         level: 'assistant', department: 'ti' },
        { id: 'ass-mkt',  title: '94 Assistentes', subtitle: 'Marketing',       level: 'assistant', department: 'marketing' },
        { id: 'ass-rh',   title: '46 Assistentes', subtitle: 'RH',              level: 'assistant', department: 'rh' },
        { id: 'ass-estr', title: '38 Assistentes', subtitle: 'Planejamento',    level: 'assistant', department: 'estrategia' },
        { id: 'ass-prod', title: '37 Assistentes', subtitle: 'Produto',         level: 'assistant', department: 'produto' }
      ]
    },
    {
      id: 'estagiarios',
      title: 'Estagiários',
      positions: [
        { id: 'est-fin',  title: '5 Estagiários', subtitle: 'Financeiro',   level: 'intern', department: 'financeiro' },
        { id: 'est-ops',  title: '7 Estagiários', subtitle: 'Operações',    level: 'intern', department: 'operacoes' },
        { id: 'est-ti',   title: '7 Estagiários', subtitle: 'Suporte',      level: 'intern', department: 'ti' },
        { id: 'est-mkt',  title: '5 Estagiários', subtitle: 'Marketing',    level: 'intern', department: 'marketing' },
        { id: 'est-rh',   title: '5 Estagiários', subtitle: 'RH',           level: 'intern', department: 'rh' },
        { id: 'est-estr', title: '2 Estagiários', subtitle: 'Planejamento', level: 'intern', department: 'estrategia' },
        { id: 'est-prod', title: '5 Estagiários', subtitle: 'Produto',      level: 'intern', department: 'produto' }
      ]
    }
  ]
}; 