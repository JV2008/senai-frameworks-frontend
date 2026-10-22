import React from 'react';
import FlexContainer from './FlexContainer.jsx';

/**
 * FlexCol - Componente utilitário que fixa a direção como 'col'.
 * Reutilizado em todas as telas para empilhamento vertical padronizado.
 */
export default function FlexCol({
  justify = 'start',
  align = 'stretch',
  gap = 'md',
  wrap = false,
  fullWidth = true,
  className = '',
  style = {},
  children,
  as = 'div',
  ...props
}) {
  return (
    <FlexContainer
      direction="col"
      justify={justify}
      align={align}
      gap={gap}
      wrap={wrap}
      fullWidth={fullWidth}
      className={className}
      style={style}
      as={as}
      {...props}
    >
      {children}
    </FlexContainer>
  );
}
