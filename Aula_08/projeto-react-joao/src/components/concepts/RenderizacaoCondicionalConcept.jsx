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
 * RenderizacaoCondicionalConcept - Laboratório Didático 06: Controle Dinâmico da Interface
 * Referência aos slides 75 a 82 da Aula 08.
 */
export default function RenderizacaoCondicionalConcept() {
  const [autenticado, setAutenticado] = useState(false);
  const [perfil, setPerfil] = useState('aluno'); // 'aluno' | 'admin'
  const [carregando, setCarregando] = useState(false);
  const [notificacoes, setNotificacoes] = useState(3);
  const [modoNoturno, setModoNoturno] = useState(false);

  const dispararSimulacaoLoading = () => {
    setCarregando(true);
    setTimeout(() => {
      setCarregando(false);
    }, 1200);
  };

  const snippetCodigo = `// 1. Operador Ternário (Escolha entre duas telas)
{autenticado ? (
  <PainelUsuario nome="João" />
) : (
  <FormularioLogin />
)}

// 2. Curto-Circuito com && (Exibe se a condição for verdadeira)
{notificacoes > 0 && (
  <span className="badge-notificacao">{notificacoes}</span>
)}

// 3. Retorno Antecipado (Early Return)
function PainelPrivado({ carregando, erro }) {
  if (carregando) return <SpinnerCarregando />;
  if (erro) return <MensagemErro motivo={erro} />;
  return <ConteudoCompleto />;
}`;

  return (
    <FlexCol gap="lg">
      <Card padding="lg">
        <FlexRow justify="between" align="center" wrap={true} gap="sm">
          <FlexRow gap="sm" style={{ width: 'auto' }}>
            <Badge variant="danger" size="lg">06</Badge>
            <div>
              <h2 style={{ fontSize: '24px', fontWeight: 800, color: 'var(--text-main)' }}>
                Renderização Condicional
              </h2>
              <span style={{ fontSize: '13px', color: 'var(--text-muted)' }}>
                Ternários, curto-circuito (&&) e retorno antecipado (if / return)
              </span>
            </div>
          </FlexRow>
          <Badge variant="neutral" size="md">Slides 75 - 82</Badge>
        </FlexRow>

        <p style={{ marginTop: '16px', fontSize: '15px', color: 'var(--text-muted)', lineHeight: 1.6 }}>
          A <strong>renderização condicional</strong> no React funciona com a mesma lógica do JavaScript.
          Permite mostrar, ocultar ou alternar blocos visuais dependendo do estado atual da aplicação, tais como carregamento, erros de API ou nível de acesso de um usuário.
        </p>

        <Alert variant="danger" title="Técnicas de Condicional no React (Slides 77, 81 e 82)">
          <ul style={{ margin: '6px 0 0 16px', lineHeight: 1.7 }}>
            <li><strong>Operador Ternário (<code>cond ? &lt;A/&gt; : &lt;B/&gt;</code>):</strong> Ideal para alternar entre dois estados opostos (ex: logado/deslogado, sucesso/erro).</li>
            <li><strong>Operador Lógico <code>&amp;&amp;</code>:</strong> Perfeito para exibir um elemento apenas se uma condição for satisfeita.</li>
            <li><strong>Retorno Antecipado (<code>if (loading) return ...</code>):</strong> Indicado quando o componente possui estados visuais substancialmente diferentes.</li>
          </ul>
        </Alert>
      </Card>

      <Card padding="lg">
        <SectionTitle icon="💻" subtitle="Exemplos de renderização condicional no JSX">
          Padrões de Código Condicional
        </SectionTitle>
        <CodeBlock code={snippetCodigo} title="CondicionaisReact.jsx" />
      </Card>

      {/* Laboratório de Condicionais */}
      <Card padding="lg" style={{ borderLeft: '4px solid var(--color-danger)' }}>
        <SectionTitle icon="🔀" subtitle="Alterne os estados abaixo e veja a resposta condicional imediata na tela">
          Laboratório Interativo de Estados Condicionais
        </SectionTitle>

        {/* Controles de Estado */}
        <FlexRow gap="sm" wrap={true} style={{ marginBottom: '20px' }}>
          <Button
            variant={autenticado ? 'danger' : 'primary'}
            onClick={() => setAutenticado(!autenticado)}
            size="sm"
          >
            {autenticado ? '🚪 Fazer Logout' : '🔑 Fazer Login'}
          </Button>

          <Button
            variant="outline"
            onClick={dispararSimulacaoLoading}
            disabled={carregando}
            size="sm"
          >
            {carregando ? '⏳ Carregando...' : '🔄 Simular Carregamento (1.2s)'}
          </Button>

          {autenticado && (
            <Button
              variant={perfil === 'admin' ? 'secondary' : 'outline'}
              onClick={() => setPerfil(perfil === 'admin' ? 'aluno' : 'admin')}
              size="sm"
            >
              Nível: {perfil === 'admin' ? '🛡️ Administrador' : '🎓 Aluno'}
            </Button>
          )}

          <Button
            variant="outline"
            onClick={() => setNotificacoes(notificacoes > 0 ? 0 : 4)}
            size="sm"
          >
            🔔 Notificações: {notificacoes}
          </Button>

          <Button
            variant={modoNoturno ? 'primary' : 'outline'}
            onClick={() => setModoNoturno(!modoNoturno)}
            size="sm"
          >
            {modoNoturno ? '🌙 Modo Noturno Ativo' : '☀️ Modo Claro Ativo'}
          </Button>
        </FlexRow>

        {/* Área de Visualização Condicional */}
        <div
          style={{
            padding: '24px',
            borderRadius: 'var(--radius-lg)',
            background: modoNoturno ? '#1e293b' : 'var(--bg-surface-alt)',
            color: modoNoturno ? '#f8fafc' : 'var(--text-main)',
            border: '1px solid var(--border-light)',
            minHeight: '180px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center',
            transition: 'all var(--transition-fast)'
          }}
        >
          {/* 1. Condicional de Carregamento (Early Return simulado) */}
          {carregando ? (
            <FlexCol align="center" gap="sm">
              <div
                style={{
                  width: '32px',
                  height: '32px',
                  border: '3px solid rgba(99, 102, 241, 0.2)',
                  borderTopColor: 'var(--color-primary)',
                  borderRadius: '50%',
                  animation: 'spin 0.8s linear infinite'
                }}
              />
              <strong style={{ fontSize: '15px' }}>Buscando dados no servidor...</strong>
              <span style={{ fontSize: '12px', color: 'var(--text-subtle)' }}>Renderização condicional de Loading ativa</span>
            </FlexCol>
          ) : (
            /* 2. Condicional de Autenticação (Ternário) */
            autenticado ? (
              <FlexCol align="center" gap="sm" style={{ width: '100%', maxWidth: '420px' }}>
                <span style={{ fontSize: '36px' }}>🎉</span>
                <h3 style={{ fontSize: '20px', fontWeight: 800 }}>
                  Bem-vindo de volta ao Sistema!
                </h3>
                <p style={{ fontSize: '13px', color: modoNoturno ? '#cbd5e1' : 'var(--text-muted)' }}>
                  Você está autenticado no perfil: <strong>{perfil.toUpperCase()}</strong>
                </p>

                {/* 3. Curto-Circuito: Badge de Notificações */}
                {notificacoes > 0 && (
                  <Badge variant="warning" size="md">
                    🔔 Você possui {notificacoes} novas notificações pendentes!
                  </Badge>
                )}

                {/* 4. Curto-Circuito: Permissão Especial de Admin */}
                {perfil === 'admin' ? (
                  <div
                    style={{
                      width: '100%',
                      marginTop: '10px',
                      padding: '12px',
                      background: 'rgba(239, 68, 68, 0.12)',
                      border: '1px solid rgba(239, 68, 68, 0.3)',
                      borderRadius: 'var(--radius-md)',
                      color: '#ef4444',
                      fontSize: '12px'
                    }}
                  >
                    🛡️ <strong>Painel Administrativo Desbloqueado:</strong> Apenas usuários com a prop/estado <code>perfil === "admin"</code> enxergam esta seção confidencial.
                  </div>
                ) : (
                  <span style={{ fontSize: '11px', color: 'var(--text-subtle)', marginTop: '8px' }}>
                    💡 Dica: Alterne o perfil para "Administrador" acima para ver o conteúdo restrito.
                  </span>
                )}
              </FlexCol>
            ) : (
              /* Condicional: Usuário Não Autenticado */
              <FlexCol align="center" gap="sm">
                <span style={{ fontSize: '36px' }}>🔒</span>
                <h3 style={{ fontSize: '18px', fontWeight: 700 }}>
                  Acesso Restrito
                </h3>
                <p style={{ fontSize: '13px', color: modoNoturno ? '#cbd5e1' : 'var(--text-muted)', maxWidth: '360px' }}>
                  Por favor, clique no botão <strong>"Fazer Login"</strong> acima para acessar as ferramentas didáticas exclusivas.
                </p>
                <Badge variant="neutral" size="sm">
                  Renderizando ramo falso do operador ternário
                </Badge>
              </FlexCol>
            )
          )}
        </div>
      </Card>

      <style>{`
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
      `}</style>
    </FlexCol>
  );
}
