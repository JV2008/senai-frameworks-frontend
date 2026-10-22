import React from 'react';

/**
 * Badge - Exibe tags, números de etapas ou identificadores visuais.
 */
export default function Badge({
  children,
  variant = 'primary', // 'primary' | 'secondary' | 'accent' | 'success' | 'warning' | 'danger' | 'neutral'
  size = 'md',        // 'sm' | 'md' | 'lg'
  icon = null,
  className = '',
  style = {}
}) {
  const variantStyles = {
    primary: { background: 'var(--color-primary-light)', color: 'var(--color-primary)', border: '1px solid rgba(99, 102, 241, 0.2)' },
    secondary: { background: 'var(--color-secondary-light)', color: 'var(--color-secondary-hover)', border: '1px solid rgba(14, 165, 233, 0.2)' },
    accent: { background: 'var(--color-accent-light)', color: 'var(--color-accent)', border: '1px solid rgba(139, 92, 246, 0.2)' },
    success: { background: 'var(--color-success-bg)', color: 'var(--color-success)', border: '1px solid var(--color-success-border)' },
    warning: { background: 'var(--color-warning-bg)', color: 'var(--color-warning)', border: '1px solid var(--color-warning-border)' },
    danger: { background: 'var(--color-danger-bg)', color: 'var(--color-danger)', border: '1px solid var(--color-danger-border)' },
    neutral: { background: 'var(--bg-surface-alt)', color: 'var(--text-muted)', border: '1px solid var(--border-light)' }
  };

  const sizeStyles = {
    sm: { padding: '2px 8px', fontSize: '11px', borderRadius: 'var(--radius-xs)' },
    md: { padding: '4px 12px', fontSize: '12px', borderRadius: 'var(--radius-sm)' },
    lg: { padding: '6px 16px', fontSize: '14px', borderRadius: 'var(--radius-md)' }
  };

  return (
    <span
      className={`app-badge ${className}`}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '6px',
        fontWeight: 700,
        letterSpacing: '0.02em',
        ...variantStyles[variant],
        ...sizeStyles[size],
        ...style
      }}
    >
      {icon && <span style={{ display: 'inline-flex' }}>{icon}</span>}
      {children}
    </span>
  );
}
