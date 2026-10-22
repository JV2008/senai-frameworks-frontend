import React from 'react';

/**
 * Button - Botão interativo padronizado com suporte a variantes, tamanhos e ícones.
 */
export default function Button({
  children,
  onClick,
  variant = 'primary', // 'primary' | 'secondary' | 'outline' | 'danger' | 'ghost' | 'success'
  size = 'md',        // 'sm' | 'md' | 'lg'
  icon = null,
  disabled = false,
  fullWidth = false,
  className = '',
  style = {},
  type = 'button',
  ...props
}) {
  const baseStyle = {
    display: fullWidth ? 'flex' : 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '8px',
    fontWeight: 600,
    cursor: disabled ? 'not-allowed' : 'pointer',
    opacity: disabled ? 0.6 : 1,
    transition: 'all var(--transition-fast)',
    userSelect: 'none',
    width: fullWidth ? '100%' : 'auto'
  };

  const sizeStyles = {
    sm: { padding: '6px 12px', fontSize: '13px', borderRadius: 'var(--radius-sm)' },
    md: { padding: '10px 18px', fontSize: '14px', borderRadius: 'var(--radius-md)' },
    lg: { padding: '12px 24px', fontSize: '15px', borderRadius: 'var(--radius-lg)' }
  };

  const variantStyles = {
    primary: {
      background: 'var(--color-primary)',
      color: 'var(--text-inverse)',
      boxShadow: 'var(--shadow-sm)',
      border: '1px solid transparent'
    },
    secondary: {
      background: 'var(--color-secondary)',
      color: 'var(--text-inverse)',
      boxShadow: 'var(--shadow-sm)',
      border: '1px solid transparent'
    },
    outline: {
      background: 'var(--bg-surface)',
      color: 'var(--text-main)',
      border: '1px solid var(--border-light)',
      boxShadow: 'var(--shadow-sm)'
    },
    success: {
      background: 'var(--color-success)',
      color: 'var(--text-inverse)',
      border: '1px solid transparent'
    },
    danger: {
      background: 'var(--color-danger)',
      color: 'var(--text-inverse)',
      border: '1px solid transparent'
    },
    ghost: {
      background: 'transparent',
      color: 'var(--color-primary)',
      border: '1px solid transparent'
    }
  };

  return (
    <button
      type={type}
      onClick={disabled ? undefined : onClick}
      disabled={disabled}
      className={`app-button ${className}`}
      style={{
        ...baseStyle,
        ...sizeStyles[size],
        ...variantStyles[variant],
        ...style
      }}
      {...props}
    >
      {icon && <span style={{ display: 'inline-flex' }}>{icon}</span>}
      {children}
    </button>
  );
}
