import React, { useState } from 'react';
import Card from '../ui/Card.jsx';
import Badge from '../ui/Badge.jsx';
import Button from '../ui/Button.jsx';
import CodeBlock from '../ui/CodeBlock.jsx';
import InputField from '../ui/InputField.jsx';
import Alert from '../ui/Alert.jsx';
import SectionTitle from '../ui/SectionTitle.jsx';
import FlexRow from '../layout/FlexRow.jsx';
import FlexCol from '../layout/FlexCol.jsx';

/**
 * Componente Filho Didático: Recebe Props do componente Pai.
 * Demonstra a desestruturação e a imutabilidade das propriedades recebidas.
 */
function CardProdutoDidatico({ titulo, categoria, preco, emEstoque, destaque, tags, onComprar }) {
  return (
    <div
      style={{
        padding: '20px',
        borderRadius: 'var(--radius-lg)',
        border: destaque ? '2px solid var(--color-accent)' : '1px solid var(--border-light)',
        background: destaque ? 'var(--color-accent-light)' : 'var(--bg-surface)',
        boxShadow: destaque ? 'var(--shadow-md)' : 'var(--shadow-sm)',
        transition: 'all var(--transition-fast)'
      }}
    >
      <FlexRow justify="between" align="center">
        <Badge variant={destaque ? 'accent' : 'primary'} size="sm">
          {categoria}
        </Badge>
        <span style={{ fontSize: '12px', fontWeight: 700, color: emEstoque ? 'var(--color-success)' : 'var(--color-danger)' }}>
          {emEstoque ? '● Em Estoque' : '○ Esgotado'}
        </span>
      </FlexRow>

      <h3 style={{ fontSize: '18px', fontWeight: 800, marginTop: '12px', color: 'var(--text-main)' }}>
        {titulo || '(Título não informado)'}
      </h3>

      <div style={{ fontSize: '20px', fontWeight: 800, color: 'var(--color-accent)', margin: '8px 0' }}>
        R$ {Number(preco || 0).toFixed(2).replace('.', ',')}
      </div>

      <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap', margin: '10px 0' }}>
        {tags.map((tag, idx) => (
          <span
            key={idx}
            style={{
              fontSize: '11px',
              padding: '2px 8px',
              borderRadius: 'var(--radius-xs)',
              background: 'rgba(0,0,0,0.05)',
              color: 'var(--text-muted)'
            }}
          >
            #{tag}
          </span>
        ))}
      </div>

      <Button
        variant={emEstoque ? 'primary' : 'outline'}
        disabled={!emEstoque}
        fullWidth={true}
        size="sm"
        onClick={onComprar}
        style={{ marginTop: '10px' }}
      >
        {emEstoque ? '🛒 Comprar via Callback Prop' : 'Indisponível'}
      </Button>
    </div>
  );
}

/**
 * PropsConcept - Laboratório Didático 03: Passagem de Parâmetros e Fluxo Unidirecional
 * Referência aos slides 51 a 59 da Aula 08.
 */
export default function PropsConcept() {
  const [titulo, setTitulo] = useState('Curso React Moderno');
  const [categoria, setCategoria] = useState('Educação Tech');
  const [preco, setPreco] = useState(199.9);
  const [emEstoque, setEmEstoque] = useState(true);
  const [destaque, setDestaque] = useState(true);
  const [comprasCount, setComprasCount] = useState(0);

  const tagsArray = ['React', 'Frontend', 'SENAI'];

  const snippetCodigo = `// Componente Filho desestruturando suas Props
function CardProduto({ titulo, categoria, preco, emEstoque, destaque, tags, onComprar }) {
  return (
    <article className={destaque ? 'card-destaque' : 'card'}>
      <span className="categoria">{categoria}</span>
      <h3>{titulo}</h3>
      <p>R$ {preco}</p>
      <button onClick={onComprar} disabled={!emEstoque}>Comprar</button>
    </article>
  );
}

// Componente Pai passando Props de múltiplos tipos
export default function Catalogo() {
  const handleCompra = () => setCompras(c => c + 1);

  return (
    <CardProduto
      titulo="${titulo}"            // String
      categoria="${categoria}"       // String
      preco={${preco}}               // Number
      emEstoque={${emEstoque}}       // Boolean
      destaque={${destaque}}         // Boolean
      tags={${JSON.stringify(tagsArray)}} // Array
      onComprar={handleCompra}       // Function (Callback)
    />
  );
}`;

  return (
    <FlexCol gap="lg">
      <Card padding="lg">
        <FlexRow justify="between" align="center" wrap={true} gap="sm">
          <FlexRow gap="sm" style={{ width: 'auto' }}>
            <Badge variant="accent" size="lg">03</Badge>
            <div>
              <h2 style={{ fontSize: '24px', fontWeight: 800, color: 'var(--text-main)' }}>
                Props (Propriedades)
              </h2>
              <span style={{ fontSize: '13px', color: 'var(--text-muted)' }}>
                Comunicação unidirecional e passagem de parâmetros
              </span>
            </div>
          </FlexRow>
          <Badge variant="neutral" size="md">Slides 51 - 59</Badge>
        </FlexRow>

        <p style={{ marginTop: '16px', fontSize: '15px', color: 'var(--text-muted)', lineHeight: 1.6 }}>
          <strong>Props</strong> são dados recebidos por um componente para configurar e parametrizar sua renderização.
          O fluxo de dados no React é estritamente <strong>unidirecional</strong>: os dados fluem do componente pai para os filhos.
          As props são somente leitura (imutáveis dentro do filho) — se o filho precisa notificar o pai, ele executa uma função de <em>callback</em> passada via props.
        </p>

        <Alert variant="info" title="Tipos de Valores Suportados em Props (Slide 59)">
          Props aceitam qualquer tipo em JavaScript: <code>string</code>, <code>number</code>, <code>boolean</code>, <code>arrays</code>, <code>objetos</code>, <code>funções de evento</code> e até mesmo <code>elementos JSX</code> via <code>children</code>.
        </Alert>
      </Card>

      <Card padding="lg">
        <SectionTitle icon="💻" subtitle="Veja como as props são declaradas no pai e consumidas no filho">
          Exemplo de Passagem de Props
        </SectionTitle>
        <CodeBlock code={snippetCodigo} title="PassagemDeProps.jsx" />
      </Card>

      {/* Laboratório de Props */}
      <Card padding="lg" style={{ borderLeft: '4px solid var(--color-accent)' }}>
        <SectionTitle icon="🎛️" subtitle="Modifique o estado no Pai e veja o Componente Filho atualizar as Props recebidas">
          Laboratório Interativo Pai & Filho
        </SectionTitle>

        <FlexRow gap="lg" wrap={true} align="start">
          {/* Painel do Pai */}
          <FlexCol gap="sm" style={{ flex: '1 1 320px' }}>
            <div style={{ padding: '8px 12px', background: 'var(--bg-surface-alt)', borderRadius: 'var(--radius-sm)', fontSize: '12px', fontWeight: 700, color: 'var(--text-muted)' }}>
              COMPONENTE PAI (Gerencia o Estado):
            </div>

            <InputField
              label="Título (Prop String):"
              value={titulo}
              onChange={(e) => setTitulo(e.target.value)}
            />
            <InputField
              label="Categoria (Prop String):"
              value={categoria}
              onChange={(e) => setCategoria(e.target.value)}
            />
            <InputField
              label="Preço (Prop Number):"
              type="number"
              step="10"
              value={preco}
              onChange={(e) => setPreco(Number(e.target.value))}
            />

            <FlexRow gap="sm">
              <Button
                size="sm"
                variant={emEstoque ? 'success' : 'outline'}
                onClick={() => setEmEstoque(!emEstoque)}
              >
                {emEstoque ? '✓ Em Estoque (true)' : '✗ Esgotado (false)'}
              </Button>
              <Button
                size="sm"
                variant={destaque ? 'secondary' : 'outline'}
                onClick={() => setDestaque(!destaque)}
              >
                {destaque ? '★ Em Destaque (true)' : '☆ Normal (false)'}
              </Button>
            </FlexRow>

            <div style={{ marginTop: '10px', fontSize: '13px', color: 'var(--text-muted)' }}>
              🛒 Compras acionadas via Callback: <strong>{comprasCount}</strong>
            </div>
          </FlexCol>

          {/* Painel do Filho */}
          <FlexCol gap="sm" style={{ flex: '1 1 320px' }}>
            <div style={{ padding: '8px 12px', background: 'var(--color-accent-light)', borderRadius: 'var(--radius-sm)', fontSize: '12px', fontWeight: 700, color: 'var(--color-accent)' }}>
              COMPONENTE FILHO (Renderiza via Props):
            </div>

            <CardProdutoDidatico
              titulo={titulo}
              categoria={categoria}
              preco={preco}
              emEstoque={emEstoque}
              destaque={destaque}
              tags={tagsArray}
              onComprar={() => setComprasCount((prev) => prev + 1)}
            />
          </FlexCol>
        </FlexRow>
      </Card>
    </FlexCol>
  );
}
