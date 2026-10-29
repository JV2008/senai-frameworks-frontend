# 📚 Conceitos Aplicados & Guia de Funcionalidades
## ⚛️ React Mastery Lab — SENAI Frameworks Front-end (Aula 08)

> **Docente:** Prof. Me. Deivison S. Takatu  
> **Desenvolvedor:** João Vitor  
> **Arquivo:** `conteitos_aplicados.md`  
> **Objetivo:** Detalhamento exaustivo e didático de cada funcionalidade da aplicação, associando cada recurso interativo ao seu respectivo conceito da biblioteca React.

---

## 📑 Sumário

1. [Visão Geral da Arquitetura Funcional](#1-visão-geral-da-arquitetura-funcional)
2. [Funcionalidade 1: Dashboard Central & Hub de Aprendizado](#funcionalidade-1-dashboard-central--hub-de-aprendizado)
3. [Funcionalidade 2: Laboratório Interativo de JSX](#funcionalidade-2-laboratório-interativo-de-jsx)
4. [Funcionalidade 3: Compositor Visual da Árvore de Componentes](#funcionalidade-3-compositor-visual-da-árvore-de-componentes)
5. [Funcionalidade 4: Simulador de Comunicação Unidirecional de Props](#funcionalidade-4-simulador-de-comunicação-unidirecional-de-props)
6. [Funcionalidade 5: Simulador do Virtual DOM & Algoritmo de Reconciliação](#funcionalidade-5-simulador-do-virtual-dom--algoritmo-de-reconciliação)
7. [Funcionalidade 6: Gerenciador de Coleções & Diagnóstico da Prop `key`](#funcionalidade-6-gerenciador-de-coleções--diagnóstico-da-prop-key)
8. [Funcionalidade 7: Painel de Controle de Renderização Condicional](#funcionalidade-7-painel-de-controle-de-renderização-condicional)
9. [Funcionalidade 8: Formulário de Inscrição Controlado & Inspetor de Estado](#funcionalidade-8-formulário-de-inscrição-controlado--inspetor-de-estado)
10. [Funcionalidade 9: Explorador de APIs Assíncronas com `useEffect`](#funcionalidade-9-explorador-de-apis-assíncronas-com-useeffect)
11. [Funcionalidade 10: Roteamento Declarativo SPA com React Router](#funcionalidade-10-roteamento-declarativo-spa-com-react-router)

---

## 1. Visão Geral da Arquitetura Funcional

A aplicação foi projetada seguindo os princípios de **Single Page Application (SPA)**, onde toda a interface é executada no cliente pelo navegador sem recargas completas de página. A estrutura divide-se em:

- **Camada de Layout Mestre:** Cabeçalho persistente com indicadores de rota ativa (`Navbar`), contêiner principal responsivo e rodapé institucional (`Footer`).
- **Camada de Rotas Declarativas:** Roteamento via `react-router-dom` conectando URLs específicas a telas e componentes modulares.
- **Camada de Componentes Atômicos de UI:** Componentes puros e altamente reutilizáveis baseados em **CSS Tokens** e **Flexbox** (`Card`, `Button`, `Badge`, `InputField`, `Alert`, `CodeBlock`, `StatCard`).
- **Camada de Laboratórios Práticos:** Cada conceito da disciplina possui uma interface própria com controles ao vivo e feedback imediato.

---

## Funcionalidade 1: Dashboard Central & Hub de Aprendizado
- **Rota:** `/`
- **Componente Principal:** [`HomePage.jsx`](file:///c:/Users/joaov/Desktop/FRONTEND/senai-frameworks-frontend/Aula_08/projeto-react-joao/src/pages/HomePage.jsx)
- **Conceitos React Empregados:** `Componentes`, `Props`, `State (useState)`, `Listas (.map)`, `Filtros (.filter)` e `Renderização Condicional`.

### O que a funcionalidade faz:
1. **Hero Informativo:** Apresenta o banner de boas-vindas com título, resumo curricular do SENAI e atalhos rápidos para os laboratórios.
2. **Estatísticas Dinâmicas (`StatCard`):** Exibe 4 cartões com métricas quantitativas da disciplina (quantidade de conceitos da aula, número de laboratórios práticos, novos tópicos avançados e versão do React utilizada).
3. **Filtro Combinado e Busca Reativa:**
   - Possui um campo de texto onde o usuário digita termos-chave (ex: "DOM", "props", "sintaxe").
   - Possui botões de filtro rápido por categoria: *Todas, Sintaxe, Arquitetura, Dados, Performance, Coleções e Lógica*.
   - A lista é filtrada dinamicamente via `Array.prototype.filter()`.
4. **Tratamento de Estado Vazio:** Se a pesquisa não encontrar nenhum conceito correspondente, um card condicional é renderizado alertando o usuário e oferecendo o botão de "Limpar Filtros".
5. **Navegação Direta:** Cada cartão possui um botão interativo que dispara o hook `useNavigate()` para abrir a rota dedicada do conceito em `/conceito/:id`.

---

## Funcionalidade 2: Laboratório Interativo de JSX
- **Rota:** `/conceito/jsx`
- **Componente Principal:** [`JSXConcept.jsx`](file:///c:/Users/joaov/Desktop/FRONTEND/senai-frameworks-frontend/Aula_08/projeto-react-joao/src/components/concepts/JSXConcept.jsx)
- **Conceitos React Empregados:** `Sintaxe JSX`, `Interpolação de Expressões com { }`, `Regras de Nomenclatura (className, htmlFor)`, `Tags Fechadas` e `State (useState)`.

### O que a funcionalidade faz:
1. **Quadro Teórico e Diferenças do HTML:** Exibe em destaque as regras fundamentais do JSX (slides 34 a 40), contrastando `class` vs `className`, fechamento obrigatório de tags e elemento raiz único.
2. **Snippet Reativo de Código (`CodeBlock`):** Apresenta o código formatado com realce de sintaxe e botão integrado de cópia para a área de transferência (`navigator.clipboard`).
3. **Playground de Interpolação ao Vivo:**
   - O usuário digita o **Nome** e o **Cargo**.
   - O usuário altera os valores numéricos **A** e **B**.
   - O JSX processa em tempo real a interpolação matemática `{numA + numB}`, exibindo instantaneamente o cálculo no cartão visual ao lado.
   - Um botão de alternância de status altera o valor booleano (`ativo`), demonstrando expressões ternárias dentro da própria interpolação do JSX.

---

## Funcionalidade 3: Compositor Visual da Árvore de Componentes
- **Rota:** `/conceito/componentes`
- **Componente Principal:** [`ComponentesConcept.jsx`](file:///c:/Users/joaov/Desktop/FRONTEND/senai-frameworks-frontend/Aula_08/projeto-react-joao/src/components/concepts/ComponentesConcept.jsx)
- **Conceitos React Empregados:** `Componentes Funcionais`, `Convenção PascalCase`, `Composição`, `Árvore Hierárquica de Elementos` e `Ciclo de Montagem/Desmontagem`.

### O que a funcionalidade faz:
1. **Explicação Arquitetural (Slides 41 a 50):** Detalha a importância de dividir interfaces em blocos isolados, mantendo legibilidade e consistência visual.
2. **Compositor Interativo da Árvore:**
   - Disponibiliza botões de controle para ativar e desativar módulos individuais: `<Cabecalho />`, `<BarraDePesquisa />`, `<CardConceito />` e `<Rodape />`.
   - Ao clicar nos botões, o React monta ou desmonta cirurgicamente cada ramo da árvore visual renderizada.
3. **Inspetor de Foco do Componente:**
   - Permite clicar em qualquer componente renderizado para destacá-lo e visualizar sua responsabilidade única dentro da hierarquia da aplicação.

---

## Funcionalidade 4: Simulador de Comunicação Unidirecional de Props
- **Rota:** `/conceito/props`
- **Componente Principal:** [`PropsConcept.jsx`](file:///c:/Users/joaov/Desktop/FRONTEND/senai-frameworks-frontend/Aula_08/projeto-react-joao/src/components/concepts/PropsConcept.jsx)
- **Conceitos React Empregados:** `Props`, `Unidirectional Data Flow (Pai -> Filho)`, `Desestruturação de Parâmetros`, `Tipagem Variada em Props` e `Funções de Callback`.

### O que a funcionalidade faz:
1. **Quadro Didático de Props (Slides 51 a 59):** Explica por que props são parâmetros de entrada imutáveis recebidos pelo componente filho.
2. **Painel do Componente Pai (Gerenciador do Estado):**
   - O Pai controla inputs de texto (`titulo`, `categoria`), numéricos (`preco`), booleanos (`emEstoque`, `destaque`) e arrays de tags.
3. **Painel do Componente Filho (`CardProdutoDidatico`):**
   - O Filho é um componente puro que apenas recebe as props desestruturadas e desenha a interface correspondente.
   - Se o Pai marca `destaque = true`, o Filho aplica automaticamente borda acentuada e cor temática.
   - Se o Pai marca `emEstoque = false`, o botão no Filho torna-se desabilitado com opacidade reduzida.
4. **Comunicação Reversa via Callback Prop:**
   - O Filho recebe uma função `onComprar` via prop. Ao clicar no botão de compra, o Filho executa a callback, incrementando o contador no Pai e provando como filhos notificam seus ascendentes sem quebrar o fluxo unidirecional.

---

## Funcionalidade 5: Simulador do Virtual DOM & Algoritmo de Reconciliação
- **Rota:** `/conceito/virtual-dom`
- **Componente Principal:** [`VirtualDOMConcept.jsx`](file:///c:/Users/joaov/Desktop/FRONTEND/senai-frameworks-frontend/Aula_08/projeto-react-joao/src/components/concepts/VirtualDOMConcept.jsx)
- **Conceitos React Empregados:** `DOM Real vs Virtual DOM`, `Algoritmo de Reconciliação (Diffing)`, `Performance` e `Patch Cirúrgico no DOM`.

### O que a funcionalidade faz:
1. **Desmistificação Teórica (Slides 60 a 67):** Explica por que manipulações diretas no DOM do navegador são lentas e como o React usa a cópia em memória para calcular o menor caminho de atualização.
2. **Simulador em Duas Árvores Paralelas:**
   - **Árvore 1 — Virtual DOM (Memória):** Quando o usuário digita nos campos de texto (Nome e Cargo), a árvore em memória muda instantaneamente, destacando nós em amarelo com a etiqueta "Pendente de Patch". O DOM real ainda não foi tocado.
   - **Árvore 2 — DOM Real (Navegador):** Permanece intacta até que o botão "Disparar Reconciliação" seja acionado.
3. **Visualizador do Processo de Reconciliação:**
   - Ao acionar a reconciliação, o simulador compara os dois nós, detecta exatamente quais mudaram e aplica a alteração no DOM real com animação visual de pulso verde.
4. **Log de Operações de Diffing:**
   - Mantém um histórico em tempo real das mutações realizadas com carimbo de data/hora e o número exato de nós que precisaram ser alterados.

---

## Funcionalidade 6: Gerenciador de Coleções & Diagnóstico da Prop `key`
- **Rota:** `/conceito/listas-keys`
- **Componente Principal:** [`ListasKeysConcept.jsx`](file:///c:/Users/joaov/Desktop/FRONTEND/senai-frameworks-frontend/Aula_08/projeto-react-joao/src/components/concepts/ListasKeysConcept.jsx)
- **Conceitos React Empregados:** `Renderização de Listas (.map)`, `Filtros Imutáveis (.filter)`, `Operador Spread (...)` e `Identificadores Estáveis (Prop key)`.

### O que a funcionalidade faz:
1. **Adição Imutável:** Formulário de inclusão de novos conceitos que adiciona itens ao início da lista usando o spread operator (`[novo, ...itens]`), preservando a imutabilidade do array original.
2. **Exclusão Precisa:** Cada item possui um botão "Excluir" que filtra a coleção pelo identificador único (`item.id`).
3. **Filtro de Busca em Tempo Real:** Campo de pesquisa textual que filtra dinamicamente os itens exibidos sem mutar os dados guardados no estado.
4. **Laboratório Diagnóstico: `key={item.id}` vs `key={index}`:**
   - O usuário pode alternar entre usar a **chave estável (ID)** ou o **índice numérico do array**.
   - Cada item renderizado possui um campo de anotação pessoal (`<input>`).
   - Ao inverter a ordem da lista (`inverterOrdem()`), se o usuário estiver usando `key={index}`, o React reutiliza os nós de input na mesma posição física da tela, transferindo o texto digitado para o item errado — demonstrando visualmente o clássico bug de interface que a prop `key` estável resolve!

---

## Funcionalidade 7: Painel de Controle de Renderização Condicional
- **Rota:** `/conceito/renderizacao-condicional`
- **Componente Principal:** [`RenderizacaoCondicionalConcept.jsx`](file:///c:/Users/joaov/Desktop/FRONTEND/senai-frameworks-frontend/Aula_08/projeto-react-joao/src/components/concepts/RenderizacaoCondicionalConcept.jsx)
- **Conceitos React Empregados:** `Operador Ternário (? :)`, `Curto-Circuito (&&)`, `Retorno Antecipado (Early Return)` e `Alternância de Temas/Estados`.

### O que a funcionalidade faz:
1. **Simulação de Autenticação (Ternário):**
   - Alterna entre estado Deslogado (`<p>Acesso Restrito</p>`) e Usuário Logado (`<p>Bem-vindo de volta!</p>`), demonstrando a escolha entre duas interfaces completas.
2. **Simulador de Carregamento (Early Return):**
   - Botão que dispara um temporizador de 1.2 segundos simulando uma requisição de rede, ativando um spinner de carregamento condicional.
3. **Exibição Condicional por Nível de Acesso (`role === 'admin'`):**
   - Apenas usuários com o perfil definido como "Administrador" têm acesso ao bloco vermelho de configurações críticas, usando o operador lógico `&&`.
4. **Badges de Notificações com Curto-Circuito:**
   - Exibe a notificação pendente somente quando `notificacoes > 0`.
5. **Alternador de Modo Noturno:**
   - Modifica os estilos do painel condicionalmente com base no estado booleano `modoNoturno`.

---

## Funcionalidade 8: Formulário de Inscrição Controlado & Inspetor de Estado
- **Rota:** `/formularios`
- **Componente Principal:** [`FormsPage.jsx`](file:///c:/Users/joaov/Desktop/FRONTEND/senai-frameworks-frontend/Aula_08/projeto-react-joao/src/pages/FormsPage.jsx)
- **Conceitos React Empregados:** `Componentes Controlados`, `useState com Objeto Complexo`, `Manipulador Genérico de Inputs`, `Validação de Formulários`, `Interrupção de Evento (preventDefault)` e `Feedback Visual`.

### O que a funcionalidade faz:
1. **Campos Diversificados Controlados:**
   - Input de Texto (Nome completo com validação de mínimo de 3 caracteres).
   - Input de E-mail (com validação obrigatória de `@`).
   - Selects (Nível de Experiência e Turno).
   - Radio Buttons (Escolha de tecnologia: React, Next.js, Vite).
   - Textarea (Expectativas de estudo).
   - Checkbox (Aceite obrigatório de termos do regulamento).
2. **Manipulador Genérico com Chave Dinâmica:**
   - Utiliza a propriedade `name` do elemento HTML para atualizar o objeto de estado com imutabilidade:
     ```javascript
     setFormData(prev => ({ ...prev, [name]: type === 'checkbox' ? checked : value }));
     ```
3. **Inspetor JSON em Tempo Real:**
   - Painel escuro estilizado que renderiza o objeto `JSON.stringify(formData, null, 2)` a cada tecla digitada pelo usuário, demonstrando o conceito de *Single Source of Truth* (o estado governa a UI).
4. **Submissão e Histórico de Inscrições:**
   - Intercepta a submissão com `e.preventDefault()`, valida todos os campos e armazena os envios efetuados em uma lista de histórico na sessão.

---

## Funcionalidade 9: Explorador de APIs Assíncronas com `useEffect`
- **Rota:** `/api-explorer`
- **Componente Principal:** [`ApiExplorerPage.jsx`](file:///c:/Users/joaov/Desktop/FRONTEND/senai-frameworks-frontend/Aula_08/projeto-react-joao/src/pages/ApiExplorerPage.jsx)
- **Conceitos React Empregados:** `Hook useEffect`, `Efeitos Colaterais (Side Effects)`, `Consumo REST via Fetch/Async/Await`, `Ciclo de Vida (Montagem e Desmontagem)`, `Função de Limpeza (Cleanup com AbortController)` e `Tratamento dos 3 Estados de Requisição`.

### O que a funcionalidade faz:
1. **Requisição HTTP Remota na Montagem:**
   - Ao entrar na rota, o `useEffect` com array de dependências dispara uma requisição assíncrona ao endpoint da API pública **JSONPlaceholder** (`https://jsonplaceholder.typicode.com/users`).
2. **Gestão dos 3 Estados de Rede:**
   - **Loading:** Exibe indicador giratório e texto informativo enquanto a Promise está pendente.
   - **Error:** Captura falhas de conexão no bloco `catch`, exibindo alerta explicativo e botão para tentar novamente.
   - **Data:** Mapeia a lista de usuários em cartões elegantes contendo nome, e-mail institucional, avatar e dados da empresa.
3. **Mecanismo de Contingência Offline:**
   - Caso a máquina do estudante esteja sem internet ou a rede corporativa/escolar bloqueie a requisição, o sistema intercepta o erro e carrega automaticamente uma base de dados mock local para garantir que a experiência didática nunca seja interrompida.
4. **Cancelamento Seguro na Desmontagem (Cleanup):**
   - Utiliza a API nativa `AbortController` na função de retorno do `useEffect` para cancelar requisições caso o usuário navegue para outra página antes do término da resposta, evitando vazamentos de memória (*memory leaks*).
5. **Filtro Local nos Dados da API:**
   - Barra de busca dinâmica que filtra os usuários retornados da API em tempo real.
6. **Contador de Execuções do Effect:**
   - Exibe a quantidade exata de vezes que o `useEffect` foi executado, permitindo disparar novas requisições manuais através da atualização de uma dependência no array.

---

## Funcionalidade 10: Roteamento Declarativo SPA com React Router
- **Arquivos:** [`App.js`](file:///c:/Users/joaov/Desktop/FRONTEND/senai-frameworks-frontend/Aula_08/projeto-react-joao/src/App.js), [`Navbar.jsx`](file:///c:/Users/joaov/Desktop/FRONTEND/senai-frameworks-frontend/Aula_08/projeto-react-joao/src/components/layout/Navbar.jsx) e [`ConceptDetailPage.jsx`](file:///c:/Users/joaov/Desktop/FRONTEND/senai-frameworks-frontend/Aula_08/projeto-react-joao/src/pages/ConceptDetailPage.jsx)
- **Conceitos React Empregados:** `Client-Side Routing`, `BrowserRouter`, `Routes & Route`, `NavLink com Classe Ativa`, `useNavigate` e `useParams`.

### O que a funcionalidade faz:
1. **Navegação Fluida sem Reload:**
   - O `<BrowserRouter>` monitora a URL do navegador e renderiza instantaneamente o componente correspondente sem disparar recargas no servidor HTTP.
2. **Links Ativos na Barra de Navegação:**
   - O componente `<NavLink>` identifica a rota ativa e aplica dinamicamente a classe `.active` com destaque de cor azul-índigo e sombra suave.
3. **Rotas Parametrizadas (`/conceito/:id`):**
   - Utiliza o hook `useParams()` para extrair dinamicamente o parâmetro `:id` da URL e renderizar o laboratório correspondente a partir de um mapa de componentes.
4. **Roteamento Programático:**
   - Utiliza `useNavigate()` para permitir que botões comuns façam redirecionamentos inteligentes na aplicação (ex: voltar à Home, avançar para o próximo conceito, etc.).
5. **Tratamento de Páginas Inexistentes (404):**
   - A rota coringa `<Route path="*" element={<NotFoundPage />} />` intercepta qualquer URL inválida e exibe uma tela amigável com opção de retorno à Home.

---

> **Resumo Acadêmico:**  
> Esta implementação cumpre integralmente os requisitos didáticos e pedagógicos da disciplina de **Frameworks Front-end**, demonstrando domínio teórico e prático no ecossistema **React**.
