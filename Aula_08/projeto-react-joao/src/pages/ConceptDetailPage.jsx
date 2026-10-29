import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { CONCEITOS } from '../data/conceptsData.js';
import Button from '../components/ui/Button.jsx';
import Badge from '../components/ui/Badge.jsx';
import Card from '../components/ui/Card.jsx';
import FlexRow from '../components/layout/FlexRow.jsx';
import FlexCol from '../components/layout/FlexCol.jsx';

// Importação dos 6 Componentes de Conceitos
import JSXConcept from '../components/concepts/JSXConcept.jsx';
import ComponentesConcept from '../components/concepts/ComponentesConcept.jsx';
import PropsConcept from '../components/concepts/PropsConcept.jsx';
import VirtualDOMConcept from '../components/concepts/VirtualDOMConcept.jsx';
import ListasKeysConcept from '../components/concepts/ListasKeysConcept.jsx';
import RenderizacaoCondicionalConcept from '../components/concepts/RenderizacaoCondicionalConcept.jsx';

const MAPA_COMPONENTES = {
  'jsx': JSXConcept,
  'componentes': ComponentesConcept,
  'props': PropsConcept,
  'virtual-dom': VirtualDOMConcept,
  'listas-keys': ListasKeysConcept,
  'renderizacao-condicional': RenderizacaoCondicionalConcept
};

/**
 * ConceptDetailPage - Página dinâmica de visualização do conceito selecionado via React Router.
 */
export default function ConceptDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();

  const conceitoIndex = CONCEITOS.findIndex((c) => c.id === id);
  const conceito = CONCEITOS[conceitoIndex];
  const ComponenteRenderizado = MAPA_COMPONENTES[id];

  if (!conceito || !ComponenteRenderizado) {
    return (
      <Card padding="lg" style={{ textAlign: 'center', margin: '40px auto', maxWidth: '500px' }}>
        <span style={{ fontSize: '48px' }}>🔍</span>
        <h2 style={{ fontSize: '22px', fontWeight: 800, marginTop: '12px' }}>
          Conceito Não Encontrado
        </h2>
        <p style={{ color: 'var(--text-muted)', fontSize: '14px', margin: '8px 0 20px' }}>
          O conceito com identificador <code>"{id}"</code> não foi localizado na matriz curricular da Aula 08.
        </p>
        <Button variant="primary" onClick={() => navigate('/')}>
          ← Retornar à Página Inicial
        </Button>
      </Card>
    );
  }

  // Próximo e Anterior para navegação linear fluida
  const anterior = conceitoIndex > 0 ? CONCEITOS[conceitoIndex - 1] : null;
  const proximo = conceitoIndex < CONCEITOS.length - 1 ? CONCEITOS[conceitoIndex + 1] : null;

  return (
    <FlexCol gap="lg">
      {/* Barra de Navegação Superior da Página */}
      <FlexRow justify="between" align="center" wrap={true} gap="sm">
        <Link to="/" style={{ textDecoration: 'none' }}>
          <Button variant="outline" size="sm">
            ← Voltar ao Catálogo de Conceitos
          </Button>
        </Link>

        {/* Paginação Anterior / Próximo */}
        <FlexRow gap="xs" style={{ width: 'auto' }}>
          {anterior && (
            <Button
              variant="ghost"
              size="sm"
              onClick={() => navigate(`/conceito/${anterior.id}`)}
            >
              ← {anterior.numero} {anterior.titulo}
            </Button>
          )}
          {proximo && (
            <Button
              variant="ghost"
              size="sm"
              onClick={() => navigate(`/conceito/${proximo.id}`)}
            >
              {proximo.numero} {proximo.titulo} →
            </Button>
          )}
        </FlexRow>
      </FlexRow>

      {/* Renderização do Módulo Específico */}
      <ComponenteRenderizado />

      {/* Barra Inferior de Navegação */}
      <Card padding="md" style={{ marginTop: '16px' }}>
        <FlexRow justify="between" align="center" wrap={true} gap="sm">
          <div>
            <Badge variant="neutral" size="sm">
              Progresso no Módulo: {conceito.numero} de 06
            </Badge>
          </div>
          <FlexRow gap="sm" style={{ width: 'auto' }}>
            {anterior && (
              <Button
                variant="outline"
                size="sm"
                onClick={() => navigate(`/conceito/${anterior.id}`)}
              >
                ← Anterior ({anterior.titulo})
              </Button>
            )}
            {proximo ? (
              <Button
                variant="primary"
                size="sm"
                onClick={() => navigate(`/conceito/${proximo.id}`)}
              >
                Próximo ({proximo.titulo}) →
              </Button>
            ) : (
              <Button
                variant="success"
                size="sm"
                onClick={() => navigate('/formularios')}
              >
                Ir para o Lab de Formulários 🚀
              </Button>
            )}
          </FlexRow>
        </FlexRow>
      </Card>
    </FlexCol>
  );
}
