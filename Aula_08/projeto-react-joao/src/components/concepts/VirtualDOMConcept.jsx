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
 * VirtualDOMConcept - Laboratório Didático 04: Virtual DOM e Algoritmo de Reconciliação
 * Referência aos slides 60 a 67 da Aula 08.
 */
export default function VirtualDOMConcept() {
  const [nomeVirtual, setNomeVirtual] = useState('Carlos Eduardo');
  const [cargoVirtual, setCargoVirtual] = useState('Aluno SENAI');
  const [nomeDOM, setNomeDOM] = useState('Carlos Eduardo');
  const [cargoDOM, setCargoDOM] = useState('Aluno SENAI');
  const [logReconciliacao, setLogReconciliacao] = useState([]);
  const [isDiffing, setIsDiffing] = useState(false);

  // Executa o processo didático de Reconciliação (Diffing)
  const aplicarReconciliacao = () => {
    setIsDiffing(true);
    const alteracoes = [];

    if (nomeVirtual !== nomeDOM) {
      alteracoes.push(`Nó <Nome> alterado: "${nomeDOM}" -> "${nomeVirtual}"`);
    }
    if (cargoVirtual !== cargoDOM) {
      alteracoes.push(`Nó <Cargo> alterado: "${cargoDOM}" -> "${cargoVirtual}"`);
    }
    if (alteracoes.length === 0) {
      alteracoes.push('Nenhum nó precisou de alteração no DOM real (Diffing = 0 mutações).');
    }

    setTimeout(() => {
      setNomeDOM(nomeVirtual);
      setCargoDOM(cargoVirtual);
      setIsDiffing(false);
      setLogReconciliacao((prev) => [
        {
          timestamp: new Date().toLocaleTimeString(),
          detalhes: alteracoes,
          nósMutados: (nomeVirtual !== nomeDOM ? 1 : 0) + (cargoVirtual !== cargoDOM ? 1 : 0)
        },
        ...prev.slice(0, 4)
      ]);
    }, 400);
  };

  const temDiferenca = nomeVirtual !== nomeDOM || cargoVirtual !== cargoDOM;

  const snippetCodigo = `// Como o Virtual DOM funciona no React:
// 1. Mudança de Estado:
setNome("Novo Nome");

// 2. Renderização em Memória (Virtual DOM):
// O React monta uma nova árvore virtual de elementos leves em JS.

// 3. Algoritmo de Reconciliação (Diffing):
// O React compara a árvore anterior com a nova árvore gerada.
// Exemplo: <App> e <Perfil> não mudaram! Apenas o nó de texto do <h3> mudou.

// 4. Patch Cirúrgico no DOM Real:
// Apenas document.querySelector("h3").textContent é atualizado no navegador!
// Não há reconstrução da página nem repintura desnecessária.`;

  return (
    <FlexCol gap="lg">
      <Card padding="lg">
        <FlexRow justify="between" align="center" wrap={true} gap="sm">
          <FlexRow gap="sm" style={{ width: 'auto' }}>
            <Badge variant="success" size="lg">04</Badge>
            <div>
              <h2 style={{ fontSize: '24px', fontWeight: 800, color: 'var(--text-main)' }}>
                Virtual DOM & Reconciliação
              </h2>
              <span style={{ fontSize: '13px', color: 'var(--text-muted)' }}>
                Renderização eficiente em memória e atualizações cirúrgicas
              </span>
            </div>
          </FlexRow>
          <Badge variant="neutral" size="md">Slides 60 - 67</Badge>
        </FlexRow>

        <p style={{ marginTop: '16px', fontSize: '15px', color: 'var(--text-muted)', lineHeight: 1.6 }}>
          O <strong>DOM real</strong> do navegador é estruturado como uma árvore de nós HTML.
          Manipulá-lo diretamente e com frequência é uma das operações mais lentas do desenvolvimento web.
          O React resolve isso criando o <strong>Virtual DOM</strong>: uma representação leve da interface mantida em memória.
        </p>

        <Alert variant="success" title="As 4 Etapas da Atualização do React (Slide 64)">
          <ol style={{ margin: '6px 0 0 16px', lineHeight: 1.7 }}>
            <li><strong>Mudança:</strong> Ocorre uma interação do usuário ou atualização de estado (<code>useState</code>).</li>
            <li><strong>Renderização:</strong> O React executa os componentes para calcular a nova descrição visual da árvore.</li>
            <li><strong>Reconciliação:</strong> O algoritmo de <em>diffing</em> compara a nova descrição com o snapshot anterior.</li>
            <li><strong>Atualização (Commit):</strong> Apenas as diferenças estritamente necessárias são aplicadas ao DOM real.</li>
          </ol>
        </Alert>
      </Card>

      <Card padding="lg">
        <SectionTitle icon="💻" subtitle="Fluxo de execução do algoritmo de diffing">
          Arquitetura de Reconciliação
        </SectionTitle>
        <CodeBlock code={snippetCodigo} title="VirtualDOM_Conceito.jsx" />
      </Card>

      {/* Laboratório Comparativo do Virtual DOM */}
      <Card padding="lg" style={{ borderLeft: '4px solid var(--color-success)' }}>
        <SectionTitle icon="🌳" subtitle="Simule como o React calcula a árvore em memória antes de sincronizar o DOM real">
          Simulador Interativo: Virtual DOM vs DOM Real
        </SectionTitle>

        <FlexRow gap="md" wrap={true} align="end">
          <FlexCol gap="xs" style={{ flex: '1 1 240px' }}>
            <InputField
              label="Alterar Nome no Estado:"
              value={nomeVirtual}
              onChange={(e) => setNomeVirtual(e.target.value)}
            />
          </FlexCol>
          <FlexCol gap="xs" style={{ flex: '1 1 240px' }}>
            <InputField
              label="Alterar Cargo no Estado:"
              value={cargoVirtual}
              onChange={(e) => setCargoVirtual(e.target.value)}
            />
          </FlexCol>
          <Button
            variant={temDiferenca ? 'success' : 'outline'}
            disabled={!temDiferenca || isDiffing}
            onClick={aplicarReconciliacao}
            style={{ marginBottom: '2px', height: '42px' }}
          >
            {isDiffing ? '⚙️ Processando Diff...' : '⚡ Disparar Reconciliação'}
          </Button>
        </FlexRow>

        {/* Comparador de Árvores Lado a Lado */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '16px',
            marginTop: '20px'
          }}
        >
          {/* Árvore 1: Virtual DOM */}
          <div
            style={{
              padding: '18px',
              borderRadius: 'var(--radius-lg)',
              border: temDiferenca ? '2px dashed #f59e0b' : '1px solid var(--border-light)',
              background: temDiferenca ? '#fffbeb' : 'var(--bg-surface-alt)'
            }}
          >
            <FlexRow justify="between" align="center">
              <strong style={{ fontSize: '15px', color: '#b45309' }}>🌱 Árvore 1: Virtual DOM (Memória)</strong>
              <Badge variant={temDiferenca ? 'warning' : 'neutral'} size="sm">
                {temDiferenca ? 'NOVO ESTADO' : 'SINCRONIZADO'}
              </Badge>
            </FlexRow>
            <p style={{ fontSize: '12px', color: 'var(--text-muted)', margin: '6px 0 14px' }}>
              Representação calculada imediatamente a cada dígito digitado.
            </p>

            {/* Nós Visuais */}
            <FlexCol gap="xs">
              <div style={nodeStyleBase}>&lt;App /&gt; (Sem alterações)</div>
              <div style={{ ...nodeStyleBase, marginLeft: '14px' }}>&lt;Perfil /&gt; (Sem alterações)</div>
              <div
                style={{
                  ...nodeStyleBase,
                  marginLeft: '28px',
                  background: nomeVirtual !== nomeDOM ? '#fde68a' : '#ffffff',
                  border: nomeVirtual !== nomeDOM ? '1px solid #d97706' : '1px solid var(--border-light)',
                  fontWeight: nomeVirtual !== nomeDOM ? 700 : 500
                }}
              >
                &lt;h3&gt;Nome: {nomeVirtual || '(vazio)'}&lt;/h3&gt;
                {nomeVirtual !== nomeDOM && <span style={{ fontSize: '11px', color: '#b45309' }}> (Pendente de Patch)</span>}
              </div>
              <div
                style={{
                  ...nodeStyleBase,
                  marginLeft: '28px',
                  background: cargoVirtual !== cargoDOM ? '#fde68a' : '#ffffff',
                  border: cargoVirtual !== cargoDOM ? '1px solid #d97706' : '1px solid var(--border-light)',
                  fontWeight: cargoVirtual !== cargoDOM ? 700 : 500
                }}
              >
                &lt;p&gt;Cargo: {cargoVirtual || '(vazio)'}&lt;/p&gt;
                {cargoVirtual !== cargoDOM && <span style={{ fontSize: '11px', color: '#b45309' }}> (Pendente de Patch)</span>}
              </div>
            </FlexCol>
          </div>

          {/* Árvore 2: DOM Real */}
          <div
            style={{
              padding: '18px',
              borderRadius: 'var(--radius-lg)',
              border: '1px solid var(--border-light)',
              background: 'var(--bg-surface)'
            }}
          >
            <FlexRow justify="between" align="center">
              <strong style={{ fontSize: '15px', color: 'var(--color-success)' }}>🖥️ Árvore 2: DOM Real (Navegador)</strong>
              <Badge variant="success" size="sm">DOM RENDERIZADO</Badge>
            </FlexRow>
            <p style={{ fontSize: '12px', color: 'var(--text-muted)', margin: '6px 0 14px' }}>
              O que o usuário efetivamente enxerga na tela.
            </p>

            <FlexCol gap="xs">
              <div style={nodeStyleBase}>&lt;div id="root"&gt;</div>
              <div style={{ ...nodeStyleBase, marginLeft: '14px' }}>&lt;section class="perfil"&gt;</div>
              <div
                style={{
                  ...nodeStyleBase,
                  marginLeft: '28px',
                  background: 'var(--color-success-bg)',
                  border: '1px solid var(--color-success-border)'
                }}
              >
                &lt;h3&gt;{nomeDOM}&lt;/h3&gt;
              </div>
              <div
                style={{
                  ...nodeStyleBase,
                  marginLeft: '28px',
                  background: 'var(--color-success-bg)',
                  border: '1px solid var(--color-success-border)'
                }}
              >
                &lt;p&gt;{cargoDOM}&lt;/p&gt;
              </div>
            </FlexCol>
          </div>
        </div>

        {/* Histórico de Reconciliações */}
        {logReconciliacao.length > 0 && (
          <div style={{ marginTop: '18px', padding: '14px', background: 'var(--bg-surface-alt)', borderRadius: 'var(--radius-md)' }}>
            <span style={{ fontSize: '13px', fontWeight: 700, color: 'var(--text-main)' }}>
              Registro de Operações de Reconciliação (Diffing Log):
            </span>
            <ul style={{ listStyle: 'none', padding: 0, margin: '8px 0 0', fontSize: '12px', color: 'var(--text-muted)' }}>
              {logReconciliacao.map((item, i) => (
                <li key={i} style={{ padding: '4px 0', borderBottom: '1px solid var(--border-light)' }}>
                  [{item.timestamp}] <strong>{item.nósMutados} nós atualizados no DOM real:</strong> {item.detalhes.join(' | ')}
                </li>
              ))}
            </ul>
          </div>
        )}
      </Card>
    </FlexCol>
  );
}

const nodeStyleBase = {
  padding: '8px 12px',
  borderRadius: 'var(--radius-sm)',
  background: '#ffffff',
  border: '1px solid var(--border-light)',
  fontSize: '13px',
  fontFamily: 'var(--font-mono)',
  color: 'var(--text-main)'
};
