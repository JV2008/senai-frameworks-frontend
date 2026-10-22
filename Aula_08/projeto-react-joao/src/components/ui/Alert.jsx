import React from 'react';
import FlexRow from '../layout/FlexRow.jsx';
import FlexCol from '../layout/FlexCol.jsx';

/**
 * Alert - Caixa de destaque/chamada de atenção para conceitos importantes.
 */
export default function Alert({
  children,
  title = null,
  variant = 'info', // 'info' | 'success' | 'warning' | 'danger'
  icon = null,
  style = {},
  className = ''
}) {
  const variantConfig = {
    info: {
      bg: 'var(--color-info-bg)',
      border: 'var(--color-info-border)',
      color: '#1d4ed8',
      defaultIcon: '💡'
    },
    success: {
      bg: 'var(--color-success-bg)',
      border: 'var(--color-success-border)',
      color: '#047857',
      defaultIcon: '✅'
    },
    warning: {
      bg: 'var(--color-warning-bg)',
      border: 'var(--color-warning-border)',
      color: '#b45309',
      defaultIcon: '⚠️'
    },
    danger: {
      bg: 'var(--color-danger-bg)',
      border: 'var(--color-danger-border)',
      color: '#b91c1c',
      defaultIcon: '🚫'
    }
  };

  const config = variantConfig[variant];

  return (
    <div
      className={`app-alert ${className}`}
      style={{
        background: config.bg,
        border: `1px solid ${config.border}`,
        borderRadius: 'var(--radius-md)',
        padding: '14px 18px',
        color: config.color,
        margin: '12px 0',
        ...style
      }}
    >
      <FlexRow align="start" gap="sm">
        <span style={{ fontSize: '18px', lineHeight: 1 }}>{icon || config.defaultIcon}</span>
        <FlexCol gap="xs" style={{ flex: 1 }}>
          {title && <strong style={{ fontSize: '14px' }}>{title}</strong>}
          <div style={{ fontSize: '13px', lineHeight: 1.55 }}>{children}</div>
        </FlexCol>
      </FlexRow>
    </div>
  );
}
