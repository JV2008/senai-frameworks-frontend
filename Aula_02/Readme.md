# 📚 Caderno de Estudos Interativo — SENAI

Projeto desenvolvido como atividade prática da disciplina de **Frameworks Front-end**, com foco na configuração do ambiente de desenvolvimento, versionamento de código e publicação de uma aplicação Web.

## 🎯 Sobre a aula

A aula **Configuração do Ambiente de Desenvolvimento** apresentou conceitos e ferramentas fundamentais para o desenvolvimento de aplicações front-end.

Durante a aula foram abordados:

* Introdução ao versionamento de software;
* Diferença entre versionamento e backup;
* Versionamento Semântico (SemVer);
* Git e controle de versão;
* Tags, branches e boas práticas com Git;
* Visual Studio Code como ambiente de desenvolvimento;
* Node.js e NPM;
* Criação de projetos React;
* Deploy e hospedagem utilizando Vercel;
* Versionamento e publicação de projetos através do GitHub.

A atividade prática teve como objetivo desenvolver uma aplicação, versionar o projeto utilizando Git e GitHub e realizar o deploy da aplicação na Vercel.

## 💻 Sobre o projeto

O projeto consiste em um **Caderno de Estudos Interativo**, desenvolvido para auxiliar na organização da rotina de estudos.

A aplicação permite organizar informações de estudo em diferentes áreas, possibilitando o gerenciamento de:

* 📋 Plano de estudos;
* 📝 Notas rápidas;
* 📚 Matérias;
* 📖 Conteúdos e sessões de estudo;
* 📊 Acompanhamento do progresso.

Os dados da aplicação são armazenados localmente no navegador utilizando `localStorage`, permitindo que as informações permaneçam disponíveis após o recarregamento da página.

## 🛠️ Tecnologias utilizadas

* HTML5
* CSS3
* JavaScript
* Git
* GitHub
* Vercel
* LocalStorage

## 🚀 Acesso ao projeto

### 📦 Repositório

O código-fonte completo da atividade está disponível no GitHub:

**GitHub:**
https://github.com/JV2008/senai-vanillaJs

### 🌐 Deploy

A aplicação está publicada e disponível para acesso através da Vercel:

**Aplicação:**
https://senai-vanilla-js.vercel.app/

## 📈 Atualizações do projeto

Durante o desenvolvimento, o projeto recebeu diversas melhorias documentadas na pasta `Documents` do repositório.

### 📚 Organização por matérias

Foi criada uma estrutura para organizar as anotações e conteúdos de estudo por matéria. A aplicação passou a permitir visualizar matérias cadastradas, filtrar conteúdos e reunir notas e sessões relacionadas à mesma disciplina.

### 🧭 Navegação entre seções

Foi implementada uma navegação por abas para facilitar o acesso às diferentes funcionalidades do sistema, incluindo visão geral, plano de estudos, notas rápidas e matérias.

### 🎨 Identidade visual das matérias

Cada matéria passou a possuir uma identidade visual própria, utilizada nos filtros, títulos, cartões e indicadores relacionados ao conteúdo.

### 📱 Melhorias no layout responsivo

O layout foi ajustado para aproveitar melhor o espaço disponível em diferentes tamanhos de tela, utilizando recursos como `width: 100%`, `clamp()`, `auto-fit` e `minmax()`, melhorando a experiência em computadores, tablets e celulares.

### 🔄 Unificação das seções

Posteriormente, as antigas áreas **Separador** e **Caderno** foram unificadas em uma única seção chamada **Matérias**.

Essa alteração concentrou em um mesmo espaço:

* Criação de conteúdos;
* Notas rápidas;
* Sessões do caderno;
* Filtros por matéria;
* Visualização dos conteúdos em cards.

A mudança teve como objetivo simplificar a navegação e tornar a organização dos estudos mais intuitiva.

## 💾 Persistência dos dados

A aplicação utiliza o `localStorage` do navegador para armazenar o estado do projeto.

As informações permanecem salvas após atualizar ou fechar a página no mesmo navegador. Como o armazenamento é local, os dados não são sincronizados automaticamente entre diferentes dispositivos ou navegadores.

## 📂 Estrutura principal

```text
senai-vanillaJs/
├── Documents/
│   ├── SeparacaoMaterias.md
│   ├── Sessão matérias.md
│   └── UnificacaoSeparadorCaderno.md
├── .github/
├── index.html
├── style.css
├── script.js
└── README.md
```

## 👨‍💻 Atividade acadêmica

Projeto desenvolvido como parte das atividades da disciplina de **Frameworks Front-end — SENAI**.

O projeto demonstra na prática conceitos de desenvolvimento Web, organização de código, versionamento utilizando Git/GitHub e publicação de aplicações através da Vercel.

---

⭐ **Projeto desenvolvido por João Victor Leite**
