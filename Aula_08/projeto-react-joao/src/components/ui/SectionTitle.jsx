import React from 'react';
import FlexRow from '../layout/FlexRow.jsx';

/**
 * SectionTitle - Título de seção com indicador visual.
 */
export default function SectionTitle({
  children,
  subtitle = null,
  icon = null,
  className = '',
  style = {}
}) {
  return (
    <div className={`app-section-title ${className}`} style={{ margin: '18px 0 10px', ...style }}>
      <FlexRow align="center" gap="sm">
        {icon && <span style={{ fontSize: '18px' }}>{icon}</span>}
        <h3 style={{ fontSize: '18px', fontWeight: 700, color: 'var(--text-main)' }}>
          {children}
        </h3>
      </FlexRow>
      {subtitle && (
        <p style={{ fontSize: '13px', color: 'var(--text-muted)', marginTop: '4px' }}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
