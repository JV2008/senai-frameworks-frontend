import React from 'react';

/**
 * FlexContainer - Componente central padronizado de layout Flexbox.
 * Reutilizado em todas as telas e seções para manter o layout 100% consistente.
 */
export default function FlexContainer({
  direction = 'row', // 'row' | 'col'
  justify = 'start', // 'start' | 'center' | 'end' | 'between' | 'around' | 'evenly'
  align = 'stretch', // 'start' | 'center' | 'end' | 'stretch' | 'baseline'
  gap = 'md',        // 'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl'
  wrap = false,
  fullWidth = true,
  className = '',
  style = {},
  children,
  as: Component = 'div',
  ...props
}) {
  const classes = [
    direction === 'col' ? 'app-flex-col' : 'app-flex-row',
    `app-justify-${justify}`,
    `app-align-${align}`,
    `app-gap-${gap}`,
    wrap ? 'app-flex-wrap' : 'app-flex-nowrap',
    fullWidth ? 'app-full-width' : '',
    className
  ].filter(Boolean).join(' ');

  return (
    <Component className={classes} style={style} {...props}>
      {children}
    </Component>
  );
}
