import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CONCEITOS, STATS_DISCIPLINA } from '../data/conceptsData.js';
import Card from '../components/ui/Card.jsx';
import Badge from '../components/ui/Badge.jsx';
import Button from '../components/ui/Button.jsx';
import StatCard from '../components/ui/StatCard.jsx';
import SectionTitle from '../components/ui/SectionTitle.jsx';
import InputField from '../components/ui/InputField.jsx';
import FlexRow from '../components/layout/FlexRow.jsx';
import FlexCol from '../components/layout/FlexCol.jsx';

/**
 * HomePage - Dashboard e Catálogo Interativo dos Conceitos do React
 */
export default function HomePage() {
  const navigate = useNavigate();
  const [filtroTexto, setFiltroTexto] = useState('');
  const [categoriaAtiva, setCategoriaAtiva] = useState('Todas');

  const categorias = ['Todas', 'Sintaxe', 'Arquitetura', 'Dados', 'Performance', 'Coleções', 'Lógica'];

  const conceitosFiltrados = CONCEITOS.filter((conceito) => {
    const atendeTexto =
      conceito.titulo.toLowerCase().includes(filtroTexto.toLowerCase()) ||
      conceito.descricao.toLowerCase().includes(filtroTexto.toLowerCase()) ||
      conceito.subtitulo.toLowerCase().includes(filtroTexto.toLowerCase());
    const atendeCategoria =
      categoriaAtiva === 'Todas' || conceito.tag === categoriaAtiva;
    return atendeTexto && atendeCategoria;
  });

  return (
    <FlexCol gap="xl">
      {/* Hero Banner */}
      <div
        style={{
          background: 'linear-gradient(135deg, #1e1b4b 0%, #312e81 50%, #4338ca 100%)',
          borderRadius: 'var(--radius-xl)',
          padding: '42px 32px',
          color: '#ffffff',
          boxShadow: 'var(--shadow-lg)',
          position: 'relative',
          overflow: 'hidden'
        }}
      >
        <div style={{ maxWidth: '720px', position: 'relative', zIndex: 2 }}>
          <Badge variant="accent" size="sm" icon="🚀" style={{ marginBottom: '14px', background: 'rgba(255,255,255,0.15)', color: '#ffffff', borderColor: 'transparent' }}>
            SENAI • Frameworks Front-end • Aula 08
          </Badge>
          <h1 style={{ fontSize: 'clamp(28px, 4vw, 40px)', fontWeight: 800, lineHeight: 1.15, letterSpacing: '-0.02em' }}>
            Projeto React: Do JSX aos Fundamentos Avançados
          </h1>
          <p style={{ marginTop: '14px', fontSize: '15px', color: '#c7d2fe', lineHeight: 1.6 }}>
            Explore e interaja com os 6 pilares centrais abordados pelo <strong>Prof. Me. Deivison S. Takatu</strong>,
            além dos laboratórios práticos de formulários controlados, hooks de efeito e consumo de APIs externas.
          </p>

          <FlexRow gap="sm" style={{ marginTop: '24px', width: 'auto' }} wrap={true}>
            <Button
              variant="success"
              size="md"
              onClick={() => navigate('/conceito/jsx')}
            >
              Começar a Explorar →
            </Button>
            <Button
              variant="outline"
              size="md"
              onClick={() => navigate('/formularios')}
              style={{ background: 'rgba(255,255,255,0.1)', color: '#ffffff', borderColor: 'rgba(255,255,255,0.2)' }}
            >
              📝 Lab de Formulários
            </Button>
            <Button
              variant="outline"
              size="md"
              onClick={() => navigate('/api-explorer')}
              style={{ background: 'rgba(255,255,255,0.1)', color: '#ffffff', borderColor: 'rgba(255,255,255,0.2)' }}
            >
              🌐 Lab de APIs
            </Button>
          </FlexRow>
        </div>
      </div>

      {/* Métricas e Estatísticas Chave */}
      <FlexRow gap="md" wrap={true}>
        {STATS_DISCIPLINA.map((stat, i) => (
          <StatCard
            key={i}
            label={stat.label}
            value={stat.value}
            icon={stat.icon}
            color={stat.color}
          />
        ))}
      </FlexRow>

      {/* Barra de Filtros e Busca de Conceitos */}
      <Card padding="md">
        <FlexRow justify="between" align="center" wrap={true} gap="md">
          <FlexCol gap="none" style={{ flex: '1 1 280px' }}>
            <InputField
              placeholder="Buscar conceito (ex: Virtual DOM, props, listas)..."
              value={filtroTexto}
              onChange={(e) => setFiltroTexto(e.target.value)}
            />
          </FlexCol>

          {/* Categorias Pills */}
          <FlexRow gap="xs" wrap={true} style={{ width: 'auto' }}>
            {categorias.map((cat) => (
              <button
                key={cat}
                onClick={() => setCategoriaAtiva(cat)}
                style={{
                  padding: '6px 14px',
                  borderRadius: 'var(--radius-full)',
                  fontSize: '12px',
                  fontWeight: 600,
                  cursor: 'pointer',
                  border: 'none',
                  background: categoriaAtiva === cat ? 'var(--color-primary)' : 'var(--bg-surface-alt)',
                  color: categoriaAtiva === cat ? '#ffffff' : 'var(--text-muted)',
                  transition: 'all var(--transition-fast)'
                }}
              >
                {cat}
              </button>
            ))}
          </FlexRow>
        </FlexRow>
      </Card>

      {/* Grid de Conceitos Centrais */}
      <div>
        <SectionTitle
          icon="📚"
          subtitle="Selecione qualquer cartão para abrir o laboratório interativo individual"
        >
          Catálogo dos 6 Conceitos da Aula 08
        </SectionTitle>

        {conceitosFiltrados.length === 0 ? (
          <Card padding="lg" style={{ textAlign: 'center', marginTop: '16px' }}>
            <p style={{ color: 'var(--text-muted)' }}>
              Nenhum conceito encontrado para os critérios de busca selecionados.
            </p>
            <Button
              variant="outline"
              size="sm"
              onClick={() => { setFiltroTexto(''); setCategoriaAtiva('Todas'); }}
              style={{ marginTop: '12px' }}
            >
              Limpar Filtros
            </Button>
          </Card>
        ) : (
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
              gap: '20px',
              marginTop: '16px'
            }}
          >
            {conceitosFiltrados.map((item) => (
              <Card
                key={item.id}
                interactive={true}
                onClick={() => navigate(`/conceito/${item.id}`)}
                padding="lg"
                style={{ display: 'flex', flexDirection: 'column', height: '100%' }}
              >
                <FlexRow justify="between" align="center">
                  <Badge variant={item.cor} size="sm">
                    {item.numero} • {item.tag}
                  </Badge>
                  <span style={{ fontSize: '20px' }}>{item.icone}</span>
                </FlexRow>

                <h3 style={{ fontSize: '19px', fontWeight: 700, marginTop: '14px', color: 'var(--text-main)' }}>
                  {item.titulo}
                </h3>
                <span style={{ fontSize: '13px', fontWeight: 600, color: 'var(--color-primary)', marginTop: '2px' }}>
                  {item.subtitulo}
                </span>

                <p style={{ fontSize: '13px', color: 'var(--text-muted)', marginTop: '10px', lineHeight: 1.55, flex: 1 }}>
                  {item.descricao}
                </p>

                <div
                  style={{
                    marginTop: '18px',
                    paddingTop: '14px',
                    borderTop: '1px solid var(--border-light)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between'
                  }}
                >
                  <span style={{ fontSize: '12px', color: 'var(--text-subtle)' }}>
                    {item.slidesRef}
                  </span>
                  <span style={{ fontSize: '13px', fontWeight: 700, color: 'var(--color-primary)' }}>
                    Abrir Laboratório →
                  </span>
                </div>
              </Card>
            ))}
          </div>
        )}
      </div>

      {/* Seção dos Laboratórios Práticos Adicionais */}
      <div style={{ marginTop: '12px' }}>
        <SectionTitle
          icon="⚡"
          subtitle="Laboratórios complementares para consolidação total dos 10 requisitos da aula"
        >
          Laboratórios Avançados Integrados
        </SectionTitle>

        <FlexRow gap="md" wrap={true} style={{ marginTop: '16px' }}>
          {/* Card Form */}
          <Card
            interactive={true}
            onClick={() => navigate('/formularios')}
            padding="lg"
            style={{ flex: '1 1 340px', borderLeft: '4px solid var(--color-primary)' }}
          >
            <FlexRow justify="between" align="center">
              <Badge variant="primary" size="sm">ESTADO & ENTRADAS</Badge>
              <span style={{ fontSize: '22px' }}>📝</span>
            </FlexRow>
            <h3 style={{ fontSize: '18px', fontWeight: 700, marginTop: '12px' }}>
              Formulários Controlados & useState
            </h3>
            <p style={{ fontSize: '13px', color: 'var(--text-muted)', marginTop: '8px' }}>
              Demonstração de campos de entrada controlados, validação instantânea, cálculo de força de senha e manipulação de estado complexo.
            </p>
            <div style={{ marginTop: '16px', fontWeight: 700, color: 'var(--color-primary)', fontSize: '13px' }}>
              Acessar Formulário →
            </div>
          </Card>

          {/* Card API */}
          <Card
            interactive={true}
            onClick={() => navigate('/api-explorer')}
            padding="lg"
            style={{ flex: '1 1 340px', borderLeft: '4px solid var(--color-secondary)' }}
          >
            <FlexRow justify="between" align="center">
              <Badge variant="secondary" size="sm">ASSÍNCRONO & HOOKS</Badge>
              <span style={{ fontSize: '22px' }}>🌐</span>
            </FlexRow>
            <h3 style={{ fontSize: '18px', fontWeight: 700, marginTop: '12px' }}>
              Consumo de APIs & useEffect
            </h3>
            <p style={{ fontSize: '13px', color: 'var(--text-muted)', marginTop: '8px' }}>
              Ciclo de vida do componente, busca em API pública externa, gestão dos estados de loading, sucesso e erro com renderização condicional.
            </p>
            <div style={{ marginTop: '16px', fontWeight: 700, color: 'var(--color-secondary-hover)', fontSize: '13px' }}>
              Explorar APIs →
            </div>
          </Card>
        </FlexRow>
      </div>
    </FlexCol>
  );
}
