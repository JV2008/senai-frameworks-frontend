import React from 'react';
import { useNavigate } from 'react-router-dom';
import Card from '../components/ui/Card.jsx';
import Button from '../components/ui/Button.jsx';
import FlexCol from '../components/layout/FlexCol.jsx';

/**
 * NotFoundPage - Página de Erro 404 para rotas não mapeadas.
 */
export default function NotFoundPage() {
  const navigate = useNavigate();

  return (
    <div style={{ padding: '60px 16px', display: 'flex', justifyContent: 'center' }}>
      <Card padding="lg" style={{ textAlign: 'center', maxWidth: '480px' }}>
        <FlexCol align="center" gap="md">
          <span style={{ fontSize: '56px', lineHeight: 1 }}>🗺️</span>
          <h1 style={{ fontSize: '32px', fontWeight: 800, color: 'var(--text-main)', margin: 0 }}>
            404
          </h1>
          <h2 style={{ fontSize: '18px', fontWeight: 700, color: 'var(--text-muted)' }}>
            Página Não Encontrada
          </h2>
          <p style={{ fontSize: '14px', color: 'var(--text-muted)', lineHeight: 1.6 }}>
            A rota que você tentou acessar não existe nesta aplicação.
            Utilize o menu de navegação ou retorne para a página inicial.
          </p>
          <Button variant="primary" size="md" onClick={() => navigate('/')}>
            🏠 Voltar ao Início
          </Button>
        </FlexCol>
      </Card>
    </div>
  );
}
