import React, { useState, useEffect } from 'react';
import Card from '../components/ui/Card.jsx';
import Badge from '../components/ui/Badge.jsx';
import Button from '../components/ui/Button.jsx';
import Alert from '../components/ui/Alert.jsx';
import CodeBlock from '../components/ui/CodeBlock.jsx';
import InputField from '../components/ui/InputField.jsx';
import SectionTitle from '../components/ui/SectionTitle.jsx';
import FlexRow from '../components/layout/FlexRow.jsx';
import FlexCol from '../components/layout/FlexCol.jsx';

// Dados de contingência (Fallback offline robusto)
const DADOS_OFFLINE = [
  { id: 1, name: 'Leanne Graham', email: 'Sincere@april.biz', company: { name: 'Romaguera-Crona' }, phone: '1-770-736-8031' },
  { id: 2, name: 'Ervin Howell', email: 'Shanna@melissa.tv', company: { name: 'Deckow-Crist' }, phone: '010-692-6593' },
  { id: 3, name: 'Clementine Bauch', email: 'Nathan@yesenia.net', company: { name: 'Romaguera-Jacobson' }, phone: '1-463-123-4447' },
  { id: 4, name: 'Patricia Lebsack', email: 'Julianne.OConner@kory.org', company: { name: 'Robel-Corkery' }, phone: '493-170-9623' },
  { id: 5, name: 'Chelsey Dietrich', email: 'Lucio_Hettinger@annie.ca', company: { name: 'Keebler LLC' }, phone: '(254)954-1289' }
];

/**
 * ApiExplorerPage - Laboratório de Consumo de APIs e useEffect
 */
export default function ApiExplorerPage() {
  const [usuarios, setUsuarios] = useState([]);
  const [carregando, setCarregando] = useState(true);
  const [erro, setErro] = useState(null);
  const [origem, setOrigem] = useState('');
  const [termoBusca, setTermoBusca] = useState('');
  const [recarregarGatilho, setRecarregarGatilho] = useState(0);
  const [execucoesEffect, setExecucoesEffect] = useState(0);

  // Hook useEffect demonstrando consumo assíncrono de API com AbortController
  useEffect(() => {
    let montado = true;
    const controller = new AbortController();

    const buscarUsuarios = async () => {
      setCarregando(true);
      setErro(null);

      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users', {
          signal: controller.signal
        });

        if (!response.ok) {
          throw new Error(`Falha na requisição HTTP: Status ${response.status}`);
        }

        const dados = await response.json();
        if (montado) {
          setUsuarios(dados);
          setOrigem('API Remota (JSONPlaceholder)');
        }
      } catch (err) {
        if (err.name !== 'AbortError' && montado) {
          console.warn('Utilizando dados de contingência local:', err.message);
          setUsuarios(DADOS_OFFLINE);
          setOrigem('Mock Local (Contingência)');
          setErro(`Não foi possível conectar à API externa (${err.message}). Exibindo dados locais de demonstração.`);
        }
      } finally {
        if (montado) {
          setCarregando(false);
          setExecucoesEffect((prev) => prev + 1);
        }
      }
    };

    buscarUsuarios();

    // Função de limpeza (cleanup) executada na desmontagem
    return () => {
      montado = false;
      controller.abort();
    };
  }, [recarregarGatilho]);

  const usuariosFiltrados = usuarios.filter((user) =>
    user.name.toLowerCase().includes(termoBusca.toLowerCase()) ||
    user.email.toLowerCase().includes(termoBusca.toLowerCase()) ||
    user.company?.name.toLowerCase().includes(termoBusca.toLowerCase())
  );

  const snippetCodigo = `// Padrão de consumo de APIs com useEffect no React:
import { useState, useEffect } from 'react';

export default function ListaUsuarios() {
  const [dados, setDados] = useState([]);
  const [loading, setLoading] = useState(true);
  const [erro, setErro] = useState(null);

  useEffect(() => {
    const controller = new AbortController();

    async function carregar() {
      try {
        setLoading(true);
        const res = await fetch('https://api.exemplo.com/dados', {
          signal: controller.signal
        });
        const json = await res.json();
        setDados(json);
      } catch (err) {
        if (err.name !== 'AbortError') setErro(err.message);
      } finally {
        setLoading(false);
      }
    }

    carregar();

    // Cleanup: cancela requisições pendentes na desmontagem
    return () => controller.abort();
  }, []); // Executa apenas na montagem

  if (loading) return <p>Carregando dados...</p>;
  if (erro) return <p>Erro: {erro}</p>;

  return (
    <ul>
      {dados.map(item => <li key={item.id}>{item.nome}</li>)}
    </ul>
  );
}`;

  return (
    <FlexCol gap="xl">
      {/* Cabeçalho */}
      <Card padding="lg">
        <FlexRow justify="between" align="center" wrap={true} gap="sm">
          <FlexRow gap="sm" style={{ width: 'auto' }}>
            <Badge variant="secondary" size="lg">🌐</Badge>
            <div>
              <h1 style={{ fontSize: '26px', fontWeight: 800, color: 'var(--text-main)' }}>
                Consumo de APIs & useEffect
              </h1>
              <span style={{ fontSize: '13px', color: 'var(--text-muted)' }}>
                Efeitos colaterais, sincronização assíncrona e tratamento de estados
              </span>
            </div>
          </FlexRow>
          <Badge variant="primary" size="md">useEffect Hook</Badge>
        </FlexRow>

        <p style={{ marginTop: '16px', fontSize: '15px', color: 'var(--text-muted)', lineHeight: 1.6 }}>
          O <strong><code>useEffect</code></strong> é o Hook do React responsável por lidar com <em>efeitos colaterais</em> (side effects), tais como requisições de rede (HTTP fetch), subscrições de eventos e timers.
          Ele permite sincronizar o componente com fontes de dados externas fora da renderização pura.
        </p>

        <Alert variant="info" title="Os 3 Estados Obrigatórios no Consumo de APIs">
          Toda requisição assíncrona profissional deve gerenciar três estados fundamentais:
          <ol style={{ margin: '6px 0 0 16px', lineHeight: 1.7 }}>
            <li><strong>Carregando (Loading):</strong> Feedback visual enquanto os dados trafegam pela rede.</li>
            <li><strong>Erro (Error):</strong> Tratamento e mensagem clara caso a requisição falhe.</li>
            <li><strong>Sucesso (Data):</strong> Renderização dos dados recebidos através de <code>.map()</code>.</li>
          </ol>
        </Alert>
      </Card>

      {/* Snippet de Código */}
      <Card padding="lg">
        <SectionTitle icon="💻" subtitle="Estrutura canônica recomendada para consumo de APIs no React">
          Código do Efeito Assíncrono com Cleanup
        </SectionTitle>
        <CodeBlock code={snippetCodigo} title="ConsumoApiUseEffect.jsx" />
      </Card>

      {/* Laboratório Prático de API */}
      <Card padding="lg" style={{ borderLeft: '4px solid var(--color-secondary)' }}>
        <SectionTitle icon="🚀" subtitle="Explore a lista carregada via fetch, aplique busca e observe a reação do componente">
          Laboratório Interativo de Requisição HTTP
        </SectionTitle>

        {/* Barra de Status e Controles */}
        <FlexRow justify="between" align="center" wrap={true} gap="md" style={{ marginBottom: '18px' }}>
          <FlexRow gap="sm" style={{ width: 'auto' }}>
            <Badge variant="neutral" size="sm">
              Fonte: {origem || 'Carregando...'}
            </Badge>
            <Badge variant="secondary" size="sm">
              Execuções do useEffect: {execucoesEffect}
            </Badge>
          </FlexRow>

          <Button
            variant="primary"
            size="sm"
            onClick={() => setRecarregarGatilho((g) => g + 1)}
            disabled={carregando}
          >
            {carregando ? '⏳ Carregando...' : '🔄 Disparar Nova Requisição'}
          </Button>
        </FlexRow>

        {erro && (
          <Alert variant="warning" title="Aviso de Conexão">
            {erro}
          </Alert>
        )}

        <InputField
          placeholder="Filtrar por nome, email ou empresa..."
          value={termoBusca}
          onChange={(e) => setTermoBusca(e.target.value)}
          style={{ marginBottom: '20px' }}
        />

        {/* Renderização Condicional: Loading vs Erro vs Dados */}
        {carregando ? (
          <div style={{ padding: '48px', textAlign: 'center' }}>
            <div
              style={{
                width: '40px',
                height: '40px',
                border: '4px solid rgba(14, 165, 233, 0.2)',
                borderTopColor: 'var(--color-secondary)',
                borderRadius: '50%',
                margin: '0 auto 16px',
                animation: 'spin 0.8s linear infinite'
              }}
            />
            <strong style={{ fontSize: '16px', color: 'var(--text-main)' }}>
              Consultando API Externa...
            </strong>
            <p style={{ fontSize: '13px', color: 'var(--text-muted)', marginTop: '4px' }}>
              Aguardando resposta assíncrona do endpoint REST.
            </p>
          </div>
        ) : (
          <div>
            <div style={{ fontSize: '13px', fontWeight: 700, color: 'var(--text-muted)', marginBottom: '14px' }}>
              USUÁRIOS RETORNADOS PELA API ({usuariosFiltrados.length}):
            </div>

            {usuariosFiltrados.length === 0 ? (
              <div style={{ padding: '24px', textAlign: 'center', background: 'var(--bg-surface-alt)', borderRadius: 'var(--radius-md)', color: 'var(--text-muted)' }}>
                Nenhum usuário corresponde à busca informada.
              </div>
            ) : (
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
                  gap: '16px'
                }}
              >
                {usuariosFiltrados.map((user) => (
                  <Card key={user.id} padding="md" style={{ background: 'var(--bg-surface)' }}>
                    <FlexRow justify="between" align="start">
                      <div
                        style={{
                          width: '36px',
                          height: '36px',
                          borderRadius: '50%',
                          background: 'var(--color-secondary-light)',
                          color: 'var(--color-secondary-hover)',
                          display: 'grid',
                          placeItems: 'center',
                          fontWeight: 800,
                          fontSize: '14px'
                        }}
                      >
                        {user.name.charAt(0)}
                      </div>
                      <Badge variant="neutral" size="sm">
                        ID: {user.id}
                      </Badge>
                    </FlexRow>

                    <h4 style={{ fontSize: '16px', fontWeight: 700, marginTop: '10px', color: 'var(--text-main)' }}>
                      {user.name}
                    </h4>
                    <span style={{ fontSize: '12px', color: 'var(--color-secondary-hover)', fontWeight: 600 }}>
                      ✉️ {user.email}
                    </span>

                    <div style={{ marginTop: '12px', fontSize: '12px', color: 'var(--text-muted)' }}>
                      🏢 Empresa: <strong>{user.company?.name || 'Não informada'}</strong>
                    </div>
                    {user.phone && (
                      <div style={{ fontSize: '11px', color: 'var(--text-subtle)', marginTop: '2px' }}>
                        📞 {user.phone}
                      </div>
                    )}
                  </Card>
                ))}
              </div>
            )}
          </div>
        )}
      </Card>

      <style>{`
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
      `}</style>
    </FlexCol>
  );
}
