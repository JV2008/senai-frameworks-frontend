/**
 * Dados estruturados dos 6 conceitos fundamentais do React da Aula 08
 */
export const CONCEITOS = [
  {
    id: 'jsx',
    numero: '01',
    titulo: 'JSX',
    subtitulo: 'Sintaxe declarativa de UI para JavaScript',
    descricao: 'Como descrever interfaces escrevendo marcações semelhantes a HTML diretamente no código JavaScript.',
    tag: 'Sintaxe',
    cor: 'primary',
    icone: '⚡'
  },
  {
    id: 'componentes',
    numero: '02',
    titulo: 'Componentes',
    subtitulo: 'Modularização e reutilização de interfaces',
    descricao: 'Como dividir a aplicação em blocos isolados e reutilizáveis, compondo uma árvore hierárquica de elementos.',
    tag: 'Arquitetura',
    cor: 'secondary',
    icone: '🧩'
  },
  {
    id: 'props',
    numero: '03',
    titulo: 'Props',
    subtitulo: 'Comunicação unidirecional e passagem de parâmetros',
    descricao: 'Como enviar dados e funções de componentes pais para filhos para personalizar seu comportamento e renderização.',
    tag: 'Dados',
    cor: 'accent',
    icone: '📬'
  },
  {
    id: 'virtual-dom',
    numero: '04',
    titulo: 'Virtual DOM',
    subtitulo: 'Renderização eficiente e algoritmo de reconciliação',
    descricao: 'Como o React mantém uma cópia da árvore em memória para calcular diferenças (diffing) e atualizar o DOM real.',
    tag: 'Performance',
    cor: 'success',
    icone: '🌳'
  },
  {
    id: 'listas-keys',
    numero: '05',
    titulo: 'Listas e Keys',
    subtitulo: 'Renderização dinâmica de coleções de dados',
    descricao: 'Como iterar coleções com .map() e a importância de chaves únicas (key) para identificação estável de nós irmãos.',
    tag: 'Coleções',
    cor: 'warning',
    icone: '📋'
  },
  {
    id: 'renderizacao-condicional',
    numero: '06',
    titulo: 'Renderização Condicional',
    subtitulo: 'Controle dinâmico da visualização da interface',
    descricao: 'Como alternar elementos da interface com base em estado ou props usando ternário, operador && e if/return.',
    tag: 'Lógica',
    cor: 'danger',
    icone: '🔀'
  }
];
