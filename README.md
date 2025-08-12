# 🏢 Organograma Corporativo SimpleWay Atacado S.A.

Um organograma hierárquico moderno e interativo desenvolvido com **React.js**, **Next.js** e **Tailwind CSS**, apresentando a estrutura organizacional completa da empresa.

## ✨ Características Principais

### 🎯 **Estrutura Hierárquica Expandida**
- **12 níveis hierárquicos** organizados de forma clara e lógica
- **Presidência** → **C-Level** → **Vice-Presidências** → **Diretores** → **Gerentes Sênior** → **Gerentes** → **Supervisores** → **Analistas Sênior** → **Analistas Pleno** → **Analistas Júnior** → **Assistentes** → **Estagiários**

### 🏢 **Setores Organizacionais**
- **9 departamentos** com cores distintas e identificação visual
- **Presidência** (Vermelho), **Financeiro** (Verde), **Operações** (Roxo), **TI** (Azul), **Marketing** (Laranja), **RH** (Rosa), **Vendas** (Ciano), **Estratégia** (Índigo), **Produto** (Verde)

### 🎨 **Design Corporativo Moderno**
- **Cards otimizados** com tamanhos reduzidos para melhor aproveitamento do espaço
- **Gradientes corporativos** para cada nível hierárquico
- **Sombras e efeitos** para profundidade visual
- **Tipografia legível** com hierarquia clara

### 🖱️ **Interatividade Avançada**
- **Hover por setor**: Ao passar o mouse sobre um cargo, todos os cargos do mesmo departamento são destacados
- **Tooltip informativo** mostrando o setor ativo
- **Animações suaves** para transições e interações
- **Indicadores visuais** de departamento em cada card

### 📱 **Layout Responsivo**
- **Design adaptativo** para diferentes tamanhos de tela
- **Scroll horizontal** para visualização completa em dispositivos menores
- **Cards flexíveis** que se ajustam ao espaço disponível

## 🚀 Tecnologias Utilizadas

- **Frontend**: React.js 18, Next.js 14
- **Estilização**: Tailwind CSS, CSS Modules
- **Linguagem**: TypeScript
- **Build Tool**: Next.js App Router
- **Deploy**: Vercel (recomendado)

## 📁 Estrutura do Projeto

```
organograma/
├── app/                    # Next.js App Router
│   ├── globals.css        # Estilos globais e componentes
│   ├── layout.tsx         # Layout principal
│   └── page.tsx           # Página inicial
├── components/             # Componentes React
│   ├── OrganogramChart.tsx # Componente principal do organograma
│   └── Legend.tsx         # Legenda hierárquica
├── data/                  # Dados do organograma
│   └── organogramData.ts  # Estrutura hierárquica completa
├── types/                 # Definições TypeScript
│   └── organogram.ts      # Interfaces e tipos
└── package.json           # Dependências e scripts
```

## 🎯 Funcionalidades Implementadas

### ✅ **Estrutura de Dados**
- [x] 12 níveis hierárquicos bem definidos
- [x] 9 departamentos organizacionais
- [x] 100+ posições distribuídas estrategicamente
- [x] Sistema de cores por departamento

### ✅ **Visualização**
- [x] Cards com gradientes corporativos
- [x] Indicadores visuais de departamento
- [x] Conexões hierárquicas com SVG
- [x] Layout responsivo e adaptativo

### ✅ **Interatividade**
- [x] Hover por setor/departamento
- [x] Tooltips informativos
- [x] Animações e transições suaves
- [x] Destaque visual de hierarquias

### ✅ **Design System**
- [x] Paleta de cores corporativa
- [x] Tipografia hierárquica
- [x] Espaçamentos consistentes
- [x] Sombras e profundidade

## 🚀 Como Executar

### Pré-requisitos
- Node.js 18+ 
- npm ou yarn

### Instalação
```bash
# Clone o repositório
git clone [url-do-repositorio]
cd organograma

# Instale as dependências
npm install

# Execute em modo de desenvolvimento
npm run dev
```

### Build para Produção
```bash
# Build otimizado
npm run build

# Preview da build
npm run start
```

## 🎨 Personalização

### Cores dos Departamentos
Edite o arquivo `components/OrganogramChart.tsx` para modificar as cores:

```typescript
const departmentColors: Record<string, string> = {
  'presidencia': '#dc2626',
  'financeiro': '#059669',
  'operacoes': '#7c3aed',
  // ... outras cores
};
```

### Novos Níveis Hierárquicos
Adicione novos níveis em `types/organogram.ts`:

```typescript
export interface Position {
  level: 'ceo' | 'c-level' | 'vice-presidente' | 'director' | 'manager-senior' | 'manager' | 'supervisor' | 'analyst-senior' | 'analyst-pleno' | 'analyst' | 'assistant' | 'intern' | 'novo-nivel';
  // ... outros campos
}
```

### Estrutura de Dados
Modifique `data/organogramData.ts` para adicionar novas posições ou reorganizar a estrutura.

## 📊 Estrutura Hierárquica Atual

```
CEO (Presidência)
├── C-Level (7 executivos)
│   ├── CFO (Financeiro)
│   ├── COO (Operações)
│   ├── CTO (TI)
│   ├── CMO (Marketing)
│   ├── CHRO (RH)
│   ├── CSO (Estratégia)
│   └── CPO (Produto)
├── Vice-Presidências (5 VPs)
├── Diretores (8 diretores)
├── Gerentes Sênior (8 gerentes)
├── Gerentes (12 gerentes)
├── Supervisores (12 supervisores)
├── Analistas Sênior (12 analistas)
├── Analistas Pleno (14 analistas)
├── Analistas Júnior (14 analistas)
├── Assistentes (10 assistentes)
└── Estagiários (11 estagiários)
```

## 🔧 Manutenção e Atualizações

### Adicionar Novas Posições
1. Edite `data/organogramData.ts`
2. Adicione a nova posição no nível apropriado
3. Defina o departamento e nível hierárquico
4. Atualize os tipos se necessário

### Modificar Conexões
1. Edite `components/OrganogramChart.tsx`
2. Modifique a lógica de `createConnections()`
3. Ajuste as regras de conexão entre níveis

### Atualizar Estilos
1. Modifique `app/globals.css`
2. Ajuste cores, tamanhos e espaçamentos
3. Teste a responsividade em diferentes dispositivos

## 📈 Próximas Melhorias

- [ ] **Filtros por departamento** com botões interativos
- [ ] **Busca e pesquisa** de posições específicas
- [ ] **Exportação** para PDF/PNG
- [ ] **Modo escuro** para melhor acessibilidade
- [ ] **Animações de entrada** para carregamento
- [ ] **Zoom e navegação** para organogramas grandes
- [ ] **Integração com APIs** para dados em tempo real

## 🤝 Contribuição

1. Fork o projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo `LICENSE` para mais detalhes.

## 📞 Suporte

Para dúvidas ou sugestões, entre em contato através de:
- **Email**: [seu-email@exemplo.com]
- **Issues**: [GitHub Issues]
- **Documentação**: [Wiki do Projeto]

---

**Desenvolvido com ❤️ para SimpleWay Atacado S.A.** 