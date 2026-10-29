/**
 * Dados estruturados dos 6 conceitos fundamentais do React da Aula 08
 * Inclui metadados didáticos, ícones, cores e resumos extraídos dos slides da aula.
 */
export const CONCEITOS = [
  {
    id: 'jsx',
    numero: '01',
    titulo: 'JSX',
    subtitulo: 'Sintaxe declarativa de UI para JavaScript',
    descricao: 'Como descrever interfaces escrevendo marcações semelhantes a HTML diretamente no código JavaScript com suporte a expressões dinâmicas {}.',
    tag: 'Sintaxe',
    cor: 'primary',
    icone: '⚡',
    slidesRef: 'Slides 34 - 40',
    pontosChave: [
      'Extensão de sintaxe que une estrutura visual com lógica JavaScript.',
      'Usa chaves {} para interpolar expressões JS dinâmicas.',
      'Utiliza className em vez de class e htmlFor em vez de for.',
      'Exige fechamento estrito de tags (ex: <img />) e elemento raiz único ou Fragment (<>...</>).'
    ]
  },
  {
    id: 'componentes',
    numero: '02',
    titulo: 'Componentes',
    subtitulo: 'Modularização e reutilização de interfaces',
    descricao: 'Como dividir a aplicação em blocos isolados e reutilizáveis, compondo uma árvore hierárquica de elementos (App -> Header, Main, Footer).',
    tag: 'Arquitetura',
    cor: 'secondary',
    icone: '🧩',
    slidesRef: 'Slides 41 - 50',
    pontosChave: [
      'Funções JavaScript com inicial maiúscula (PascalCase) que retornam JSX.',
      'Evita duplicação de layout e mantém a consistência visual.',
      'A aplicação se organiza em uma árvore hierárquica clara de componentes.',
      'Componentes podem ser combinados para compor páginas e fluxos complexos.'
    ]
  },
  {
    id: 'props',
    numero: '03',
    titulo: 'Props',
    subtitulo: 'Comunicação unidirecional e passagem de parâmetros',
    descricao: 'Como enviar dados (strings, números, booleanos, arrays, objetos e funções) de componentes pais para filhos para personalizar seu comportamento.',
    tag: 'Dados',
    cor: 'accent',
    icone: '📬',
    slidesRef: 'Slides 51 - 59',
    pontosChave: [
      'Abreviação de "properties" (propriedades recebidas pelo componente).',
      'Fluxo de dados estritamente unidirecional (do pai para o filho).',
      'Aceita qualquer tipo de valor: texto, número, booleano, array, objeto, função de callback e JSX.',
      'A estrutura do componente permanece igual enquanto os dados exibidos variam.'
    ]
  },
  {
    id: 'virtual-dom',
    numero: '04',
    titulo: 'Virtual DOM',
    subtitulo: 'Renderização eficiente e algoritmo de reconciliação',
    descricao: 'Como o React mantém uma representação leve da árvore em memória para calcular diferenças (diffing) e atualizar pontualmente o DOM real.',
    tag: 'Performance',
    cor: 'success',
    icone: '🌳',
    slidesRef: 'Slides 60 - 67',
    pontosChave: [
      'O DOM real é a árvore montada pelo navegador; modificá-lo diretamente é custoso.',
      'O Virtual DOM é uma cópia leve em memória gerenciada pelo React.',
      'Ciclo: Mudança de estado -> Renderização (cálculo) -> Reconciliação (diffing) -> Patch no DOM real.',
      'Nem toda nova renderização exige alterações no DOM real; apenas os nós afetados sofrem mutação.'
    ]
  },
  {
    id: 'listas-keys',
    numero: '05',
    titulo: 'Listas e Keys',
    subtitulo: 'Renderização dinâmica de coleções de dados',
    descricao: 'Como iterar coleções com .map() e a importância de chaves únicas (key) estáveis para identificação de nós irmãos no algoritmo de diffing.',
    tag: 'Coleções',
    cor: 'warning',
    icone: '📋',
    slidesRef: 'Slides 68 - 74',
    pontosChave: [
      'O método map() transforma cada item de um array em elementos de interface.',
      'A propriedade key é obrigatória entre elementos irmãos para rastreabilidade de estado.',
      'Chaves estáveis (ex: IDs) evitam bugs ao reordenar, adicionar ou remover itens.',
      'Trabalhe sempre com imutabilidade (filter, map, spread) ao atualizar coleções no estado.'
    ]
  },
  {
    id: 'renderizacao-condicional',
    numero: '06',
    titulo: 'Renderização Condicional',
    subtitulo: 'Controle dinâmico da visualização da interface',
    descricao: 'Como alternar elementos da interface com base em estado ou props usando ternário (?:), operador && de curto-circuito e if/return antecipado.',
    tag: 'Lógica',
    cor: 'danger',
    icone: '🔀',
    slidesRef: 'Slides 75 - 82',
    pontosChave: [
      'Permite mostrar, ocultar ou alternar elementos conforme condições booleanas.',
      'Operador ternário (condicao ? <A/> : <B/>) para escolher entre duas opções.',
      'Curto-circuito (condicao && <Elemento/>) para renderizar somente se verdadeiro.',
      'Retorno antecipado (if / return) para layouts totalmente distintos (ex: telas de erro ou loading).'
    ]
  }
];

export const STATS_DISCIPLINA = [
  { label: 'Conceitos da Aula', value: '06', icon: '📚', color: 'primary' },
  { label: 'Laboratórios Práticos', value: '10+', icon: '🧪', color: 'secondary' },
  { label: 'Conceitos Avançados', value: '4 Novos', icon: '🚀', color: 'success' }, // Router, Forms, useEffect, Fetch API
  { label: 'Compatibilidade', value: 'React 19', icon: '⚛️', color: 'warning' }
];
