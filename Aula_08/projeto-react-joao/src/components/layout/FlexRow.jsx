import React from 'react';
import FlexContainer from './FlexContainer.jsx';

/**
 * FlexRow - Componente utilitário que fixa a direção como 'row'.
 * Reutilizado em todas as telas para cabeçalhos, barras de ferramentas, botões e grids lineares.
 */
export default function FlexRow({
  justify = 'start',
  align = 'center',
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
      direction="row"
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
