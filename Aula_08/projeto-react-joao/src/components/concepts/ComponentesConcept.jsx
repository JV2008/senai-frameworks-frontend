import React, { useState } from 'react';
import Card from '../ui/Card.jsx';
import Badge from '../ui/Badge.jsx';
import Button from '../ui/Button.jsx';
import CodeBlock from '../ui/CodeBlock.jsx';
import Alert from '../ui/Alert.jsx';
import SectionTitle from '../ui/SectionTitle.jsx';
import FlexRow from '../layout/FlexRow.jsx';
import FlexCol from '../layout/FlexCol.jsx';

/**
 * ComponentesConcept - Laboratório Didático 02: Modularização e Hierarquia de Componentes
 * Referência aos slides 41 a 50 da Aula 08.
 */
export default function ComponentesConcept() {
  const [exibirHeader, setExibirHeader] = useState(true);
  const [exibirBusca, setExibirBusca] = useState(true);
  const [exibirCards, setExibirCards] = useState(true);
  const [exibirFooter, setExibirFooter] = useState(true);
  const [componenteSelecionado, setComponenteSelecionado] = useState('App');

  const snippetCodigo = `// Hierarquia de Componentes em React
function Cabecalho() {
  return <header className="cabecalho"><h1>Catálogo SENAI</h1></header>;
}

function BarraDePesquisa() {
  return <input type="text" placeholder="Pesquisar conceitos..." />;
}

function CardConceito({ titulo }) {
  return <article className="card"><h3>{titulo}</h3></article>;
}

function Rodape() {
  return <footer>Material de Estudo React</footer>;
}

// Componente Raiz integrador (App)
export default function App() {
  return (
    <main>
      ${exibirHeader ? '<Cabecalho />' : '/* Cabecalho oculto */'}
      ${exibirBusca ? '<BarraDePesquisa />' : '/* Busca oculta */'}
      ${exibirCards ? '<ListaDeConceitos />' : '/* Lista oculta */'}
      ${exibirFooter ? '<Rodape />' : '/* Rodape oculto */'}
    </main>
  );
}`;

  return (
    <FlexCol gap="lg">
      <Card padding="lg">
        <FlexRow justify="between" align="center" wrap={true} gap="sm">
          <FlexRow gap="sm" style={{ width: 'auto' }}>
            <Badge variant="secondary" size="lg">02</Badge>
            <div>
              <h2 style={{ fontSize: '24px', fontWeight: 800, color: 'var(--text-main)' }}>
                Componentes
              </h2>
              <span style={{ fontSize: '13px', color: 'var(--text-muted)' }}>
                Modularização, reutilização e árvores hierárquicas
              </span>
            </div>
          </FlexRow>
          <Badge variant="neutral" size="md">Slides 41 - 50</Badge>
        </FlexRow>

        <p style={{ marginTop: '16px', fontSize: '15px', color: 'var(--text-muted)', lineHeight: 1.6 }}>
          Componentes são unidades independentes e reutilizáveis de interface. No React, são geralmente funções JavaScript iniciadas com letra maiúscula (convenção <em>PascalCase</em>) que retornam elementos JSX.
          Eles transformam páginas monolíticas complexas em pequenos blocos fáceis de testar, manter e reutilizar.
        </p>

        <Alert variant="info" title="A Árvore de Componentes (Slides 49 e 50)">
          Uma aplicação React se organiza exatamente como uma árvore hierárquica: o componente raiz (<code>App</code>) renderiza componentes filhos (<code>Cabecalho</code>, <code>BarraDePesquisa</code>, <code>Lista</code>), que por sua vez podem conter outros sub-componentes (<code>CardConceito</code>).
        </Alert>
      </Card>

      <Card padding="lg">
        <SectionTitle icon="💻" subtitle="Estrutura de montagem de múltiplos componentes">
          Exemplo de Composição e Reutilização
        </SectionTitle>
        <CodeBlock code={snippetCodigo} title="HierarquiaComponentes.jsx" />
      </Card>

      {/* Laboratório de Composição */}
      <Card padding="lg" style={{ borderLeft: '4px solid var(--color-secondary)' }}>
        <SectionTitle icon="🧩" subtitle="Selecione nós da árvore para inspecionar e alterne a visibilidade dos blocos modulares">
          Compositor Visual da Árvore de Componentes
        </SectionTitle>

        <FlexRow gap="lg" wrap={true} align="start">
          {/* Controles de Visibilidade */}
          <FlexCol gap="sm" style={{ flex: '1 1 280px' }}>
            <span style={{ fontSize: '13px', fontWeight: 700, color: 'var(--text-muted)' }}>
              Alternar Módulos da Árvore:
            </span>
            <Button
              variant={exibirHeader ? 'primary' : 'outline'}
              onClick={() => { setExibirHeader(!exibirHeader); setComponenteSelecionado('Cabecalho'); }}
              size="sm"
            >
              {exibirHeader ? '✓' : '✗'} &lt;Cabecalho /&gt;
            </Button>
            <Button
              variant={exibirBusca ? 'secondary' : 'outline'}
              onClick={() => { setExibirBusca(!exibirBusca); setComponenteSelecionado('BarraDePesquisa'); }}
              size="sm"
            >
              {exibirBusca ? '✓' : '✗'} &lt;BarraDePesquisa /&gt;
            </Button>
            <Button
              variant={exibirCards ? 'success' : 'outline'}
              onClick={() => { setExibirCards(!exibirCards); setComponenteSelecionado('CardConceito'); }}
              size="sm"
            >
              {exibirCards ? '✓' : '✗'} &lt;CardConceito /&gt; (Reutilizável)
            </Button>
            <Button
              variant={exibirFooter ? 'primary' : 'outline'}
              onClick={() => { setExibirFooter(!exibirFooter); setComponenteSelecionado('Rodape'); }}
              size="sm"
            >
              {exibirFooter ? '✓' : '✗'} &lt;Rodape /&gt;
            </Button>

            <div
              style={{
                marginTop: '12px',
                padding: '12px',
                background: 'var(--bg-surface-alt)',
                borderRadius: 'var(--radius-md)',
                fontSize: '12px',
                color: 'var(--text-muted)'
              }}
            >
              <strong>Componente Focado:</strong> <code>&lt;{componenteSelecionado} /&gt;</code>
              <p style={{ marginTop: '4px' }}>
                Cada bloco é isolado. O React instancia e desmonta os componentes conforme a árvore requer.
              </p>
            </div>
          </FlexCol>

          {/* Visualização da Árvore Renderizada */}
          <FlexCol gap="sm" style={{ flex: '1 1 360px' }}>
            <span style={{ fontSize: '12px', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase' }}>
              Resultado da Montagem Modular:
            </span>

            <div
              style={{
                border: '2px dashed var(--border-subtle)',
                borderRadius: 'var(--radius-lg)',
                padding: '16px',
                background: 'var(--bg-surface)'
              }}
            >
              <div style={{ fontSize: '11px', color: 'var(--text-subtle)', marginBottom: '8px' }}>
                &lt;App&gt; (Container Principal)
              </div>

              <FlexCol gap="sm">
                {exibirHeader && (
                  <div
                    onClick={() => setComponenteSelecionado('Cabecalho')}
                    style={{
                      padding: '12px',
                      background: 'var(--color-primary-light)',
                      border: '1px solid var(--color-primary)',
                      borderRadius: 'var(--radius-md)',
                      cursor: 'pointer'
                    }}
                  >
                    <strong style={{ color: 'var(--color-primary)', fontSize: '14px' }}>
                      &lt;Cabecalho /&gt;
                    </strong>
                    <div style={{ fontSize: '12px', color: 'var(--text-muted)' }}>Portal Didático SENAI</div>
                  </div>
                )}

                {exibirBusca && (
                  <div
                    onClick={() => setComponenteSelecionado('BarraDePesquisa')}
                    style={{
                      padding: '10px 12px',
                      background: 'var(--color-secondary-light)',
                      border: '1px solid var(--color-secondary)',
                      borderRadius: 'var(--radius-md)',
                      cursor: 'pointer'
                    }}
                  >
                    <strong style={{ color: 'var(--color-secondary)', fontSize: '13px' }}>
                      &lt;BarraDePesquisa /&gt;
                    </strong>
                    <div style={{ fontSize: '12px', color: 'var(--text-muted)' }}>🔍 [ Campo de Busca Interativo ]</div>
                  </div>
                )}

                {exibirCards && (
                  <FlexRow gap="sm">
                    <div
                      onClick={() => setComponenteSelecionado('CardConceito')}
                      style={{
                        flex: 1,
                        padding: '12px',
                        background: 'var(--color-success-bg)',
                        border: '1px solid var(--color-success)',
                        borderRadius: 'var(--radius-md)',
                        cursor: 'pointer'
                      }}
                    >
                      <strong style={{ color: 'var(--color-success)', fontSize: '13px' }}>&lt;CardConceito #1 /&gt;</strong>
                      <p style={{ fontSize: '11px', color: 'var(--text-muted)' }}>Instância 1</p>
                    </div>
                    <div
                      onClick={() => setComponenteSelecionado('CardConceito')}
                      style={{
                        flex: 1,
                        padding: '12px',
                        background: 'var(--color-success-bg)',
                        border: '1px solid var(--color-success)',
                        borderRadius: 'var(--radius-md)',
                        cursor: 'pointer'
                      }}
                    >
                      <strong style={{ color: 'var(--color-success)', fontSize: '13px' }}>&lt;CardConceito #2 /&gt;</strong>
                      <p style={{ fontSize: '11px', color: 'var(--text-muted)' }}>Instância 2</p>
                    </div>
                  </FlexRow>
                )}

                {exibirFooter && (
                  <div
                    onClick={() => setComponenteSelecionado('Rodape')}
                    style={{
                      padding: '10px 12px',
                      background: 'var(--bg-surface-alt)',
                      border: '1px solid var(--border-light)',
                      borderRadius: 'var(--radius-md)',
                      cursor: 'pointer',
                      textAlign: 'center'
                    }}
                  >
                    <strong style={{ color: 'var(--text-muted)', fontSize: '12px' }}>
                      &lt;Rodape /&gt;
                    </strong>
                    <div style={{ fontSize: '11px', color: 'var(--text-subtle)' }}>Material didático de apoio</div>
                  </div>
                )}
              </FlexCol>
            </div>
          </FlexCol>
        </FlexRow>
      </Card>
    </FlexCol>
  );
}
