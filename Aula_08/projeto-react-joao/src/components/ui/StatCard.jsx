import React from 'react';
import Card from './Card.jsx';
import FlexCol from '../layout/FlexCol.jsx';
import FlexRow from '../layout/FlexRow.jsx';

/**
 * StatCard - Exibe métricas, contadores ou estatísticas chave com Flexbox.
 */
export default function StatCard({
  label,
  value,
  icon = null,
  color = 'primary',
  className = '',
  style = {}
}) {
  const colorMap = {
    primary: 'var(--color-primary)',
    secondary: 'var(--color-secondary)',
    success: 'var(--color-success)',
    warning: 'var(--color-warning)'
  };

  return (
    <Card padding="md" style={{ flex: 1, minWidth: '140px', ...style }} className={className}>
      <FlexCol gap="xs">
        <FlexRow justify="between" align="center">
          <span style={{ fontSize: '12px', fontWeight: 600, color: 'var(--text-muted)' }}>
            {label}
          </span>
          {icon && <span style={{ fontSize: '16px' }}>{icon}</span>}
        </FlexRow>
        <span
          style={{
            fontSize: '24px',
            fontWeight: 800,
            color: colorMap[color] || colorMap.primary,
            lineHeight: 1.2
          }}
        >
          {value}
        </span>
      </FlexCol>
    </Card>
  );
}
