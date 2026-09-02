# Resumo da Aula 03: Projetos com Frameworks Front-end

**Professor:** Me. Deivison S. Takatu  
**Contato:** deivison.takatu@edu.senai.br  

---

## 1. Introdução aos Frameworks Front-end
Um framework front-end é um conjunto de ferramentas, bibliotecas e convenções que padronizam o desenvolvimento de interfaces web. Ele fornece uma estrutura pré-definida, acelerando a criação de aplicações complexas.
- **Sem framework (Vanilla JS):** Código manual, difícil manutenção e repetição de código.
- **Com framework:** Componentes reutilizáveis, estado gerenciado e atualizações eficientes.

## 2. Diferenças entre Framework e Biblioteca
- **Framework:** Controla o fluxo da aplicação (inversão de controle) e exige uma estrutura definida. *Exemplos:* Angular, Vue.
- **Biblioteca:** O desenvolvedor controla quando e como chamá-la. É flexível e sem imposições rígidas. *Exemplos:* React, jQuery.

## 3. Por que Utilizar um Framework?
- **Produtividade Aumentada:** Evita "reinventar a roda" com soluções prontas para roteamento, estado e renderização.
- **Melhores Práticas:** Código organizado em componentes, seguindo padrões reconhecidos pela indústria.
- **Manutenção Facilitada:** Uso de Virtual DOM (React), Change Detection (Angular) e otimizações internas.
- **Comunidade e Suporte:** Documentação extensa, plugins e soluções prontas para problemas comuns.

## 4. Características Comuns dos Frameworks
- **Estrutura Organizada:** Separação clara de HTML, CSS e JavaScript.
- **Componentização:** Partes da interface independentes, reutilizáveis e com lógica encapsulada.
- **Programação Reativa:** Atualização automática da UI com base nas mudanças de estado da aplicação.
- **Ferramentas de Build:** Minificação, transpilação e combinação de arquivos para melhor desempenho.
- **Sistema de Rotas:** Criação de SPAs (Single Page Applications) com navegação suave sem recarregar a página.
- **Integração com APIs e Testes:** Facilita chamadas assíncronas e inclui ferramentas para testes unitários e de integração.

## 5. Principais Tecnologias Abordadas

### ⚛️ React
- **Tipo:** Biblioteca JavaScript (criada pelo Facebook).
- **Conceitos:** Hooks (`useState`, `useEffect`), JSX (sintaxe que mistura JS com HTML, usando `camelCase` e tags fechadas), Virtual DOM.
- **Gerenciamento de Estado:** Context API (estados locais/menores) ou Redux (estados complexos/globais).

### 🅰️ Angular
- **Tipo:** Framework completo (desenvolvido pelo Google).
- **Destaques:** TypeScript nativo, Arquitetura MVC, Injeção de Dependência, CLI poderosa e Change Detection eficiente.
- **Criação do Projeto:**
  ```bash
  npm install -g @angular/cli
  ng new meu-app-angular
  cd meu-app-angular
  ng serve


  ## 📎 Links e Referências

- **Material da Aula (PDF):** [Aula 03 - Projetos com Frameworks Front-end.pdf](Aula%2003%20-%20Projetos%20com%20Frameworks%20Front-end.pdf)


- **Repositório de Exemplo (Angular):** [https://github.com/JV2008/primeiro-projeto-angular.git](https://github.com/JV2008/primeiro-projeto-angular.git)
- **Repositório de Exemplo (React):** [https://github.com/JV2008/primeiro-projeto-react.git](https://github.com/JV2008/primeiro-projeto-react.git)
- **Repositorios Dupla:** [https://github.com/JV2008/Entregas-em-Dupla.git](https://github.com/JV2008/primeiro-projeto-angular.git)
