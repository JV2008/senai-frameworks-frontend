import React from 'react';
import FlexCol from '../layout/FlexCol.jsx';

/**
 * InputField - Campo de entrada com label e estilização moderna.
 */
export default function InputField({
  label,
  value,
  onChange,
  placeholder = '',
  type = 'text',
  helperText = null,
  disabled = false,
  className = '',
  style = {},
  ...props
}) {
  return (
    <FlexCol gap="xs" className={`app-input-group ${className}`} style={{ width: '100%', ...style }}>
      {label && (
        <label style={{ fontSize: '13px', fontWeight: 600, color: 'var(--text-muted)' }}>
          {label}
        </label>
      )}
      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        disabled={disabled}
        style={{
          width: '100%',
          padding: '10px 14px',
          borderRadius: 'var(--radius-md)',
          border: '1px solid var(--border-light)',
          background: disabled ? 'var(--bg-surface-alt)' : 'var(--bg-surface)',
          color: 'var(--text-main)',
          fontSize: '14px',
          outline: 'none',
          transition: 'border-color var(--transition-fast), box-shadow var(--transition-fast)'
        }}
        onFocus={(e) => {
          e.target.style.borderColor = 'var(--color-primary)';
          e.target.style.boxShadow = '0 0 0 3px rgba(99, 102, 241, 0.2)';
        }}
        onBlur={(e) => {
          e.target.style.borderColor = 'var(--border-light)';
          e.target.style.boxShadow = 'none';
        }}
        {...props}
      />
      {helperText && (
        <span style={{ fontSize: '11px', color: 'var(--text-subtle)' }}>
          {helperText}
        </span>
      )}
    </FlexCol>
  );
}
