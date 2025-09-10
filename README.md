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



