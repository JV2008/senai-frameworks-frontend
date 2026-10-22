import React from 'react';

/**
 * Card - Contêiner visual padronizado com elevação e bordas suaves.
 */
export default function Card({
  children,
  interactive = false,
  onClick = null,
  padding = 'lg', // 'sm' | 'md' | 'lg' | 'none'
  className = '',
  style = {},
  as: Component = 'div',
  ...props
}) {
  const paddingMap = {
    none: '0',
    sm: '14px',
    md: '20px',
    lg: '26px'
  };

  const isClickable = interactive || Boolean(onClick);

  return (
    <Component
      onClick={onClick}
      className={`app-card ${isClickable ? 'interactive-scale' : ''} ${className}`}
      style={{
        background: 'var(--bg-surface)',
        borderRadius: 'var(--radius-lg)',
        border: '1px solid var(--border-light)',
        boxShadow: 'var(--shadow-sm)',
        padding: paddingMap[padding],
        cursor: isClickable ? 'pointer' : 'default',
        transition: 'all var(--transition-fast)',
        ...style
      }}
      {...props}
    >
      {children}
    </Component>
  );
}
