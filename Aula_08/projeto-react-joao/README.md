# ⚛️ React Mastery Lab — SENAI Frameworks Front-end (Aula 08)

> **Aplicação Didática e Interativa para Aprendizado Prático dos Fundamentos e Recursos Avançados do React**  
> **Instituição:** SENAI — Serviço Nacional de Aprendizagem Industrial  
> **Disciplina:** Frameworks Front-end  
> **Docente:** Prof. Me. Deivison S. Takatu (`deivison.takatu@edu.senai.br`)  
> **Desenvolvedor:** João Vitor  

---

## 📖 1. Visão Geral do Projeto

O **React Mastery Lab** é uma Single Page Application (SPA) educacional completa, desenvolvida com o objetivo de consolidar e demonstrar, de forma prática e interativa, todos os conceitos teóricos apresentados na **Aula 08 — Projeto React**.

A aplicação vai além de exemplos estáticos: ela oferece laboratórios interativos em tempo real (*hands-on playgrounds*), onde o estudante ou avaliador pode modificar propriedades, simular árvores de componentes, visualizar o algoritmo de reconciliação do **Virtual DOM**, testar o impacto de chaves (`key`) em listas dinâmicas, preencher formulários com estado controlado e consumir endpoints REST assíncronos com ciclo de vida via `useEffect`.

---

## 🚀 2. Como Executar a Aplicação Localmente

### Pré-requisitos
- **Node.js** (versão 18 ou superior)
- Gerenciador de pacotes **npm**

### Passo a Passo

1. **Acesse o diretório do projeto:**
   ```bash
   cd "Aula_08/projeto-react-joao"
   ```

2. **Instale as dependências:**
   ```bash
   npm install --legacy-peer-deps
   ```

3. **Inicie o servidor de desenvolvimento:**
   ```bash
   npm start
   ```
   A aplicação será aberta automaticamente em `http://localhost:3000`.

4. **Gerar pacote de produção otimizado (Build):**
   ```bash
   npm run build
   ```

---

## ✨ 3. Funcionalidades Principais

- 🏠 **Dashboard Central de Conceitos:**
  - Exibição em grade moderna e responsiva de todos os 6 conceitos centrais da aula.
  - Cartões de estatísticas com métricas didáticas (`StatCard`).
  - Sistema de busca em tempo real e filtros rápidos por categoria (Sintaxe, Arquitetura, Dados, Performance, Coleções e Lógica).
  - Indicação do mapeamento de slides correspondentes a cada tópico.

- 🔬 **Laboratórios Interativos dos 6 Conceitos da Aula 08 (`/conceito/:id`):**
  1. **JSX:** Playground dinâmico de interpolação matemática e de strings com `{ }`, fechamento estrito de tags e regras de classes.
  2. **Componentes:** Compositor modular da árvore hierárquica (`App -> Header, Busca, Cards, Rodape`) com controle de montagem e desmontagem.
  3. **Props:** Customizador em tempo real onde o componente Pai gerencia estados e o componente Filho recebe e renderiza props de múltiplos tipos (string, number, boolean, array e callbacks).
  4. **Virtual DOM:** Simulador visual comparativo entre a árvore em memória e o DOM real do navegador, com disparo manual de reconciliação (*diffing*) e registro detalhado de mutações cirúrgicas.
  5. **Listas e Keys:** Gerenciador imutável de itens com adição via spread, exclusão via `.filter()`, inversão de ordem e teste prático demonstrando os perigos de usar `key={index}` vs a estabilidade de `key={item.id}`.
  6. **Renderização Condicional:** Simulador de autenticação com alternância de telas via operador ternário, alertas condicionais com `&&`, badges de status e simulação de estados de carregamento.

- 📝 **Laboratório de Formulários Controlados (`/formularios`):**
  - Componentes de entrada 100% controlados pelo estado do React (*Single Source of Truth*).
  - Suporte a múltiplos tipos de entrada: texto, email, selects, radio buttons, textarea e checkboxes.
  - Validação em tempo real e bloqueio de envio com feedback visual de erros.
  - Inspetor JSON em tempo real renderizando o objeto do `useState` a cada tecla digitada.
  - Histórico de submissões na sessão.

- 🌐 **Laboratório de Consumo de APIs & `useEffect` (`/api-explorer`):**
  - Consumo de API REST pública remota (JSONPlaceholder) com requisições assíncronas `fetch()`.
  - Tratamento rigoroso dos 3 estados fundamentais: **Loading** (spinner estilizado), **Error** (mensagem amigável com retry) e **Data** (grade de cartões mapeados).
  - Cancelamento seguro de requisições pendentes na desmontagem via `AbortController` (cleanup function).
  - Mecanismo de contingência offline com dados locais caso não haja acesso à internet.
  - Contador de execuções do Hook `useEffect` e filtro local dinâmico sobre os dados recebidos.

- 🗺️ **Roteamento SPA Declarativo (`react-router-dom`):**
  - Navegação instantânea sem recarregar a página com `<BrowserRouter>`, `<Routes>` e `<Route>`.
  - Barra de navegação com `<NavLink>` exibindo estilização ativa e transições suaves.
  - Rotas dinâmicas parametrizadas via `useParams()` (`/conceito/:id`).
  - Navegação programática via `useNavigate()`.
  - Página de erro 404 personalizada (`/qualquer-rota-inexistente`).

---

## 🧠 4. Mapeamento Detalhado dos Conceitos Utilizados

A tabela a seguir demonstra a correspondência exata entre os conteúdos teóricos ministrados na Aula 08 e sua implementação técnica nesta aplicação:

| Conceito | Onde Foi Aplicado no Projeto | Descrição da Implementação Técnica |
| :--- | :--- | :--- |
| **JSX** | Em todos os arquivos `.jsx` e especificamente em `JSXConcept.jsx` | Utilização da sintaxe declarativa unindo marcação e lógica; interpolação dinâmica com `{nome}`, `{a + b}`; conversão de atributos para `className` e `htmlFor`; fechamento obrigatório de tags `<input />`, `<img />`. |
| **Componentes** | `src/components/layout/` e `src/components/ui/` | Funções com nomenclatura *PascalCase* retornando JSX; modularização atômica em componentes puros e reutilizáveis (`FlexContainer`, `Card`, `Button`, `Badge`, `CodeBlock`, `Navbar`, `Footer`). |
| **Props** | Em todos os componentes de UI e em `PropsConcept.jsx` | Passagem explícita unidirecional de propriedades (strings, números, booleanos, arrays, objetos e funções de callback como `onClick` e `onChange`) com desestruturação de parâmetros. |
| **Virtual DOM** | `VirtualDOMConcept.jsx` | Demonstração prática do algoritmo de *diffing* e reconciliação: o React recalcula a árvore em memória e aplica apenas as mutações estritamente necessárias nos nós alterados do DOM real. |
| **Listas & Keys** | `HomePage.jsx`, `ListasKeysConcept.jsx`, `ApiExplorerPage.jsx` | Mapeamento dinâmico de arrays através de `.map()`, garantindo o fornecimento da propriedade especial `key` única e imutabilidade dos dados ao adicionar e excluir itens com `.filter()`. |
| **Renderização Condicional** | `RenderizacaoCondicionalConcept.jsx`, `ApiExplorerPage.jsx` | Controle de exibição via operador ternário (`? :`), operador lógico de curto-circuito (`&&`) e retornos antecipados (`if (loading) return ...`) para loading, erros e listas vazias. |
| **State (`useState`)** | Presente em todas as páginas e componentes interativos | Gerenciamento de estado local reativo, permitindo que alterações de dados provoquem re-renderizações automáticas e previsíveis da interface. |
| **Formulários Controlados** | `FormsPage.jsx` e `ListasKeysConcept.jsx` | Entradas com valores controlados via `value={estado}` e sincronizados por manipuladores `onChange`; prevenção do comportamento padrão de recarga com `e.preventDefault()`. |
| **`useEffect` & Ciclo de Vida** | `ApiExplorerPage.jsx` e `CodeBlock.jsx` | Execução de efeitos colaterais após a montagem do componente no DOM; array de dependências para recargas pontuais e função de limpeza (*cleanup*) com `AbortController`. |
| **Consumo de APIs** | `ApiExplorerPage.jsx` | Integração assíncrona com `fetch()` via `async/await`, estruturada com blocos `try / catch / finally` e gestão transparente de feedback visual ao usuário. |
| **React Router** | `src/App.js`, `src/pages/`, `Navbar.jsx`, `ConceptDetailPage.jsx` | Roteamento declarativo no cliente (*Client-Side Routing*) com `<BrowserRouter>`, navegação por links ativos (`<NavLink>`), parâmetros de URL (`useParams`) e histórico (`useNavigate`). |

---

## 📁 5. Estrutura de Arquivos e Diretórios

```plaintext
projeto-react-joao/
├── public/
│   ├── index.html           # HTML base com fontes Outfit/Inter e meta tags
│   ├── favicon.ico
│   └── manifest.json
├── src/
│   ├── components/
│   │   ├── concepts/        # Laboratórios dos 6 conceitos da aula
│   │   │   ├── JSXConcept.jsx
│   │   │   ├── ComponentesConcept.jsx
│   │   │   ├── PropsConcept.jsx
│   │   │   ├── VirtualDOMConcept.jsx
│   │   │   ├── ListasKeysConcept.jsx
│   │   │   └── RenderizacaoCondicionalConcept.jsx
│   │   ├── layout/          # Componentes de estrutura e Flexbox
│   │   │   ├── FlexContainer.jsx
│   │   │   ├── FlexRow.jsx
│   │   │   ├── FlexCol.jsx
│   │   │   ├── FlexItem.jsx
│   │   │   ├── Navbar.jsx
│   │   │   ├── Footer.jsx
│   │   │   └── Layout.jsx
│   │   └── ui/              # Componentes visuais do Design System
│   │       ├── Alert.jsx
│   │       ├── Badge.jsx
│   │       ├── Button.jsx
│   │       ├── Card.jsx
│   │       ├── CodeBlock.jsx
│   │       ├── InputField.jsx
│   │       ├── SectionTitle.jsx
│   │       └── StatCard.jsx
│   ├── data/
│   │   └── conceptsData.js  # Base de dados estruturada com metadados dos conceitos
│   ├── pages/               # Páginas principais renderizadas pelas rotas
│   │   ├── HomePage.jsx
│   │   ├── ConceptDetailPage.jsx
│   │   ├── FormsPage.jsx
│   │   ├── ApiExplorerPage.jsx
│   │   └── NotFoundPage.jsx
│   ├── styles/              # Design System em CSS puro (Tokens & Flexbox)
│   │   ├── theme.css
│   │   ├── flexbox.css
│   │   └── global.css
│   ├── App.js               # Configuração do React Router DOM e Layout mestre
│   ├── index.css            # Estilos de inicialização e importação global
│   └── index.js             # Ponto de entrada do React 19 no DOM real
├── package.json             # Dependências (React 19, React Router DOM 7)
└── README.md                # Documentação técnica e guia do projeto
```

---

## 🎨 6. Design System & Acessibilidade

O projeto foi construído respeitando as melhores práticas de **UI/UX moderna**:
- **Paleta Harmoniosa:** Cores com contraste acessível baseadas em tokens HSL/Hex (Indigo, Sky, Emerald, Amber, Rose e ardósia neutra).
- **Tipografia:** Tipografia premium importada via Google Fonts (*Outfit* para títulos com peso visual e *Inter* para corpo legível; *JetBrains Mono* para blocos de código).
- **Layout 100% Flexbox:** Componentes reutilizáveis de layout (`FlexContainer`, `FlexRow`, `FlexCol`) que garantem alinhamento e espaçamento consistente em qualquer dispositivo.
- **Micro-interações:** Efeitos de elevação suave em cards no estado de *hover*, botões com transições rápidas e feedback de clique, e animações de rotação para spinners.

---

## 📚 7. Referências Bibliográficas

1. **Documentação Oficial do React:** [https://react.dev](https://react.dev)
2. **MDN Web Docs (JavaScript & DOM):** [https://developer.mozilla.org](https://developer.mozilla.org)
3. **Repositório Didático da Aula (Prof. Deivison Takatu):** [https://github.com/deivisontakatu/aula-react](https://github.com/deivisontakatu/aula-react)
4. **Aplicação Exemplo da Disciplina:** [https://github.com/deivisontakatu/projeto-react](https://github.com/deivisontakatu/projeto-react)
5. **SOUZA, Natan.** *Bootstrap 4: conheça a biblioteca front-end mais utilizada no mundo.* São Paulo: Casa do Código, 2018.
6. **MACHADO, Kheronn Khennedy.** *Angular 11 e Firebase: construindo uma aplicação integrada com a plataforma do Google.* São Paulo: Casa do Código, 2021.
7. **EIS, Diego.** *Guia Front-end: o caminho das pedras para ser um dev front-end.* São Paulo: Casa do Código, 2015.
8. **GONÇALVES, Edson.** *Desenvolvendo aplicações Web com JSP, Servlets, JavaServer Faces, Hibernate, EJB 3 Persistence e Ajax.* Rio de Janeiro: Ciência Moderna, 2007.

---

> Projeto desenvolvido para fins avaliativos — SENAI Informática.
