# Resumo da Aula 08: Projeto React

**Disciplina:** Frameworks Front-end — SENAI  
**Professor:** Prof. Me. Deivison S. Takatu  
**Contato:** deivison.takatu@edu.senai.br  

---

## 📌 1. Visão Geral e Tópicos Principais

A aula foi dividida em duas grandes etapas: uma **revisão aprofundada de fundamentos do JavaScript / DOM** e a **introdução aos conceitos centrais da biblioteca React**.

### 1.1 Revisão de JavaScript & DOM
- **Integração no HTML:** Uso da tag `<script>` inline, importação externa com `<script src="...">` e eventos inline (`onclick`, `onblur`).
- **Variáveis e Escopo:** Comparação entre `var` (escopo de função/global) vs. `let` e `const` (escopo de bloco). Sensibilidade a maiúsculas/minúsculas (*case sensitive*).
- **Tipos de Dados:** Tipos primitivos (`string`, `number`, `boolean`, `undefined`, `null`, `symbol`, `bigint`) e objetos/arrays, com uso do operador `typeof`.
- **Operadores & Condicionais:** Operadores aritméticos, lógicos e comparação estrita (`===` e `!==`). Estruturas condicionais (`if`, `else if`, `else`) e operador ternário.
- **Laços e Funções:** `for`, `while`, `do...while`, `break` e `continue`. Funções regulares e *arrow functions*, além de manipulação de arrays com métodos de alta ordem (`forEach`, `filter`, `map`).
- **Manipulação de DOM:** Métodos de seleção (`getElementById`, `querySelector`, `querySelectorAll`), alteração de conteúdo e estilos (`textContent`, `value`, `classList`, `createElement`, `appendChild`) e escuta de eventos (`addEventListener`).
- **Exemplos Práticos:** Implementação de tema escuro (*dark mode*), botão de voltar ao topo com animação de rolagem, efeito máquina de escrever (*typewriter*) e modais/pop-ups.

---

### 1.2 Fundamentos do React
- **JSX (JavaScript XML):**
  - Extensão de sintaxe que une a descrição estrutural (semelhante ao HTML) com a lógica JS.
  - Interpolação dinâmica de valores e expressões usando chaves `{ }`.
  - Diferenças em relação ao HTML padrão: `className` (em vez de `class`), `htmlFor` (em vez de `for`), fechamento estrito de tags (ex: `<img />`) e necessidade de um elemento raiz único ou Fragment (`<>...</>`).
- **Componentes:**
  - Blocos de construção independentes, modulares e reutilizáveis da interface gráfica.
  - Funções que retornam JSX e utilizam convenção *PascalCase* (ex: `function Cabecalho()`).
  - Organização da interface em uma árvore hierárquica de componentes (`App` -> `Cabecalho`, `BarraDePesquisa`, `ListaDeConceitos`, `Rodape`).
- **Props (Propriedades):**
  - Mecanismo para envio de dados do componente pai para componentes filhos (*unidirectional data flow*).
  - Permite parametrizar componentes visuais mantendo a consistência do layout.
  - Aceita qualquer tipo de valor: texto, número, booleano, arrays, objetos, funções e elementos JSX.
- **DOM vs. Virtual DOM:**
  - O DOM real reflete a árvore da página montada no navegador.
  - O **Virtual DOM** é uma representação leve em memória. Quando ocorre mudança de estado, o React calcula o novo estado visual, realiza o processo de **reconciliação** (diffing) e aplica apenas as alterações estritamente necessárias no DOM real, otimizando o desempenho.
- **Listas e a Propriedade `Key`:**
  - Renderização de coleções de dados dinâmicas através do método `.map()`.
  - Uso obrigatório de `key` estável e única (como um ID) para que o algoritmo de reconciliação do React identifique quais itens foram adicionados, alterados ou removidos.
  - Aplicação conjunta de `.filter()` e `.map()` mantendo a imutabilidade dos dados.
- **Renderização Condicional:**
  - Exibição de trechos de UI baseados em estado/props.
  - Estratégias: retorno antecipado (`if / return`) para telas completamente distintas e operador ternário (`condicao ? <A/> : <B/>`) para alternar mensagens (ex: *loading*, lista vazia, autenticado/não autenticado).

---

## 🔗 2. Links Disponibilizados no Material

### 📚 Apoio Teórico e Documentação
- **Documentação Oficial do React:** [https://react.dev](https://react.dev)
- **MDN Web Docs (JavaScript):** [https://developer.mozilla.org](https://developer.mozilla.org)
- **Material de Revisão JavaScript:** [https://github.com/deivisontakatu/aula-javascript](https://github.com/deivisontakatu/aula-javascript)
- **Plataforma de Quiz / Revisão:** [https://wayground.com/](https://wayground.com/) *(formerly Quizizz)*

### 💻 Repositórios e Aplicação de Exemplo
- **Repositório de Conceitos React:** [https://github.com/deivisontakatu/aula-react](https://github.com/deivisontakatu/aula-react)
- **Repositório do Projeto Exemplo:** [https://github.com/deivisontakatu/projeto-react](https://github.com/deivisontakatu/projeto-react)
- **Aplicação Demo no Vercel:** [https://projeto-react-five-swart.vercel.app/](https://projeto-react-five-swart.vercel.app/)

---

## 🛠️ 3. Estruturação da Atividade Proposta

A atividade final solicitada na apresentação (Slide 83) exige a construção de um projeto prático:

### 🎯 Objetivo
Desenvolver uma **aplicação React** funcional que aplique, na prática, todos os conceitos abordados na aula.

### 📋 Requisitos e Conceitos Obrigatórios
1. **JSX:** Escrita de marcação com sintaxe JSX, inserção de expressões dinâmicas com `{}` e respeito às regras de fechamento e nomenclatura de propriedades (`className`, etc.).
2. **Componentes:** Estruturação da aplicação modularizada em componentes funcionais reutilizáveis e organizados em hierarquia.
3. **Props:** Passagem de parâmetros e fluxo de dados entre componentes pais e filhos para personalização.
4. **Listas e Chaves (`key`):** Mapeamento de coleções de dados com `.map()` e aplicação correta da propriedade `key` única.
5. **Renderização Condicional:** Controle dinâmico da interface (por exemplo: exibição de mensagens de carregamento, alternância de telas ou aviso de lista vazia via ternário ou `if`).
6. **Virtual DOM:** Compreensão e aproveitamento das atualizações automáticas orientadas a dados.

### 📦 Diretrizes de Entrega
- Criar um **repositório público no GitHub**.
- Incluir um arquivo `README.md` completo contendo:
  - Descrição geral da aplicação;
  - Lista de funcionalidades implementadas;
  - Mapeamento explícito de onde e como cada conceito estudado foi aplicado.
