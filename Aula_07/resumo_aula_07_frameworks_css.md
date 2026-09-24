# Resumo — Aula 07: Frameworks CSS

## CSS

CSS (Cascading Style Sheets) é utilizado para definir a aparência e o layout de páginas web, controlando cores, fontes, margens, alinhamentos, dimensões e posicionamento dos elementos.

A estrutura básica de uma regra CSS é:

```css
seletor {
  propriedade: valor;
}
```

### Formas de aplicar CSS

- **Inline:** aplicado diretamente no elemento HTML com `style`; indicado para ajustes pontuais.
- **Interno:** definido dentro da tag `<style>`; útil quando o estilo pertence a uma única página.
- **Externo:** armazenado em um arquivo `.css` e conectado ao HTML com `<link>`; é a abordagem recomendada para projetos maiores.

### Principais propriedades

- `color` e `background-color`: cores do texto e do fundo.
- `font-family` e `font-size`: fonte e tamanho do texto.
- `margin` e `padding`: espaçamentos externo e interno.
- `border`: bordas dos elementos.
- `width` e `height`: dimensões.
- `display`: forma de exibição dos elementos.
- `position`, `top`, `right`, `bottom` e `left`: posicionamento.
- `text-align`: alinhamento do texto.

## Box Model

O **Box Model** representa os elementos HTML como caixas compostas por:

1. **Content:** conteúdo do elemento.
2. **Padding:** espaço entre o conteúdo e a borda.
3. **Border:** borda ao redor do conteúdo e padding.
4. **Margin:** espaço externo entre a caixa e outros elementos.

Ele ajuda a controlar dimensões, espaçamentos, organização visual e adaptação dos elementos a diferentes telas.

## Flexbox

O **Flexbox** é um modelo de layout unidimensional usado para organizar elementos em linhas ou colunas, facilitando seu alinhamento e distribuição.

Principais propriedades apresentadas:

- `flex-direction`: define linha ou coluna.
- `justify-content`: distribui os itens no eixo principal.
- `align-items`: alinha os itens.
- `flex-wrap`: permite quebra de linha.
- `gap`: define o espaço entre os itens.

## Layout Responsivo

Layouts responsivos adaptam o conteúdo a diferentes tamanhos de tela, como celulares, tablets e desktops. A abordagem melhora a usabilidade e evita a necessidade de criar versões separadas para cada dispositivo.

## Framework CSS

Um **framework CSS** reúne recursos, padrões, classes e componentes que facilitam a criação e padronização de interfaces web. Ele pode oferecer recursos para:

- Layout, incluindo Grid, Flexbox e responsividade.
- Estilos, como cores, espaçamentos e tipografia.
- Componentes, como botões, cards e barras de navegação.

A utilização de frameworks reduz a necessidade de construir manualmente todos os estilos de uma interface.

## Tailwind CSS

O **Tailwind CSS** é apresentado como um framework baseado no conceito **Utility-First**. Em vez de depender apenas de componentes prontos, ele fornece pequenas classes, cada uma responsável por uma propriedade ou função de estilo.

Exemplos:

- `p-6`: padding.
- `text-xl`: tamanho do texto.
- `font-bold`: peso da fonte.
- `bg-blue-600`: cor de fundo.
- `rounded-lg`: bordas arredondadas.

A ideia central é combinar várias utilities para formar componentes. O framework busca reduzir o tempo de desenvolvimento, facilitar a customização, promover reutilização e consistência e simplificar o desenvolvimento responsivo com uma abordagem Mobile First.

O material também apresenta formas de utilizar o Tailwind por **Play CDN** e por **Tailwind CLI**, além da integração com frameworks como Next.js, Laravel, Angular e Ruby on Rails.

## Tailwind IntelliSense

O Tailwind IntelliSense oferece suporte ao desenvolvimento, incluindo autocompletar classes, visualização de estilos e auxílio para reduzir erros de digitação.

## Em resumo

A aula apresenta a evolução do uso do CSS, desde propriedades e organização por meio do Box Model e Flexbox até o uso de **frameworks CSS**, com destaque para o **Tailwind CSS**. A principal ideia é utilizar recursos e classes reutilizáveis para tornar a criação de interfaces mais organizada, consistente e responsiva.


## Link do projeto
https://github.com/JV2008/senai-frameworks-frontend-aula-css.git