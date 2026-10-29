import React from 'react';
import FlexRow from './FlexRow.jsx';
import FlexCol from './FlexCol.jsx';

/**
 * Footer - Rodapé informativo com dados da disciplina, professor e links oficiais.
 */
export default function Footer() {
  return (
    <footer
      style={{
        marginTop: 'auto',
        background: '#0f172a',
        color: '#94a3b8',
        borderTop: '1px solid #1e293b',
        padding: '36px 20px 24px'
      }}
    >
      <div style={{ maxWidth: '1180px', margin: '0 auto' }}>
        <FlexRow justify="between" align="start" wrap={true} gap="xl">
          <FlexCol gap="xs" style={{ flex: '1 1 320px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span style={{ fontSize: '20px' }}>⚛️</span>
              <strong style={{ color: '#ffffff', fontSize: '16px' }}>React Mastery Lab</strong>
            </div>
            <p style={{ fontSize: '13px', lineHeight: 1.6, color: '#94a3b8' }}>
              Projeto didático interativo construído para a disciplina de <strong>Frameworks Front-end</strong> do SENAI,
              apresentando os fundamentos e recursos modernos do ecossistema React.
            </p>
            <span style={{ fontSize: '12px', color: '#64748b' }}>
              Orientador: <strong>Prof. Me. Deivison S. Takatu</strong> (deivison.takatu@edu.senai.br)
            </span>
          </FlexCol>

          <FlexCol gap="xs" style={{ flex: '0 1 200px' }}>
            <strong style={{ color: '#ffffff', fontSize: '13px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              Conceitos da Aula
            </strong>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, fontSize: '13px', lineHeight: 1.9 }}>
              <li>• JSX e Virtual DOM</li>
              <li>• Componentes & Props</li>
              <li>• Listas, Chaves (Keys) & Filtros</li>
              <li>• Renderização Condicional</li>
            </ul>
          </FlexCol>

          <FlexCol gap="xs" style={{ flex: '0 1 220px' }}>
            <strong style={{ color: '#ffffff', fontSize: '13px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              Conceitos Complementares
            </strong>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, fontSize: '13px', lineHeight: 1.9 }}>
              <li>• State & useState Hook</li>
              <li>• Formulários Controlados</li>
              <li>• useEffect & Efeitos Colaterais</li>
              <li>• Consumo de APIs Assíncronas</li>
              <li>• React Router DOM (v7)</li>
            </ul>
          </FlexCol>

          <FlexCol gap="xs" style={{ flex: '0 1 180px' }}>
            <strong style={{ color: '#ffffff', fontSize: '13px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              Links de Apoio
            </strong>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', fontSize: '13px' }}>
              <a
                href="https://react.dev"
                target="_blank"
                rel="noreferrer"
                style={{ color: '#38bdf8', textDecoration: 'none' }}
              >
                🔗 Documentação React
              </a>
              <a
                href="https://developer.mozilla.org/pt-BR/docs/Web/JavaScript"
                target="_blank"
                rel="noreferrer"
                style={{ color: '#38bdf8', textDecoration: 'none' }}
              >
                🔗 MDN JavaScript
              </a>
              <a
                href="https://github.com/deivisontakatu/projeto-react"
                target="_blank"
                rel="noreferrer"
                style={{ color: '#38bdf8', textDecoration: 'none' }}
              >
                🔗 Repositório Exemplo
              </a>
            </div>
          </FlexCol>
        </FlexRow>

        <div
          style={{
            marginTop: '32px',
            paddingTop: '20px',
            borderTop: '1px solid #1e293b',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '12px',
            fontSize: '12px',
            color: '#64748b'
          }}
        >
          <span>© 2026 João Vitor — SENAI Frameworks Front-end. Todos os direitos reservados.</span>
          <span>Desenvolvido com React + Flexbox + Vanilla CSS</span>
        </div>
      </div>
    </footer>
  );
}
