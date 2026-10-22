import React, { useState } from 'react';
import FlexRow from '../layout/FlexRow.jsx';
import FlexCol from '../layout/FlexCol.jsx';
import Button from './Button.jsx';

/**
 * CodeBlock - Exibe snippets de código com destaque visual e botão de cópia.
 */
export default function CodeBlock({
  code,
  language = 'jsx',
  title = null,
  className = '',
  style = {}
}) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    if (navigator?.clipboard) {
      navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <FlexCol
      gap="none"
      className={`app-code-block ${className}`}
      style={{
        background: '#0f172a',
        borderRadius: 'var(--radius-md)',
        overflow: 'hidden',
        border: '1px solid #1e293b',
        boxShadow: 'var(--shadow-md)',
        margin: '14px 0',
        ...style
      }}
    >
      <FlexRow
        justify="between"
        align="center"
        style={{
          padding: '8px 16px',
          background: '#1e293b',
          borderBottom: '1px solid rgba(255, 255, 255, 0.08)'
        }}
      >
        <FlexRow gap="xs" style={{ width: 'auto' }}>
          <span style={{ width: 10, height: 10, borderRadius: '50%', background: '#ef4444' }} />
          <span style={{ width: 10, height: 10, borderRadius: '50%', background: '#f59e0b' }} />
          <span style={{ width: 10, height: 10, borderRadius: '50%', background: '#10b981' }} />
          {title && (
            <span style={{ color: '#94a3b8', fontSize: '12px', marginLeft: '10px', fontWeight: 500 }}>
              {title}
            </span>
          )}
        </FlexRow>

        <Button
          size="sm"
          variant="ghost"
          onClick={handleCopy}
          style={{
            color: copied ? '#10b981' : '#cbd5e1',
            fontSize: '11px',
            padding: '4px 8px'
          }}
        >
          {copied ? '✓ Copiado!' : 'Copiar'}
        </Button>
      </FlexRow>

      <pre
        style={{
          margin: 0,
          padding: '16px',
          color: '#e2e8f0',
          fontFamily: 'var(--font-mono)',
          fontSize: '13px',
          lineHeight: 1.6,
          overflowX: 'auto'
        }}
      >
        <code>{code}</code>
      </pre>
    </FlexCol>
  );
}
