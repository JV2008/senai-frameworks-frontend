import React from 'react';

/**
 * FlexItem - Componente filho flexível com controle fino de crescimento, encolhimento e auto-alinhamento.
 */
export default function FlexItem({
  flex = null,        // '1' | 'auto' | 'initial' | 'none'
  grow = false,
  shrink = false,
  alignSelf = null,   // 'start' | 'center' | 'end' | 'stretch'
  className = '',
  style = {},
  children,
  as: Component = 'div',
  ...props
}) {
  const classes = [
    flex ? `app-flex-${flex}` : '',
    grow ? 'app-flex-grow' : '',
    shrink ? 'app-flex-shrink-0' : '',
    alignSelf ? `app-self-${alignSelf}` : '',
    className
  ].filter(Boolean).join(' ');

  return (
    <Component className={classes} style={style} {...props}>
      {children}
    </Component>
  );
}
