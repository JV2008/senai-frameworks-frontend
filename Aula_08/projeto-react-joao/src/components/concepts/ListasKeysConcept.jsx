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
 * ListasKeysConcept - Laboratório Didático 05: Renderização de Coleções e Chaves Únicas (Key)
 * Referência aos slides 68 a 74 da Aula 08.
 */
export default function ListasKeysConcept() {
  const [itens, setItens] = useState([
    { id: 'item-101', nome: 'HTML5 & CSS3 Semântico', categoria: 'Base' },
    { id: 'item-102', nome: 'JavaScript ES6+ Moderno', categoria: 'Linguagem' },
    { id: 'item-103', nome: 'React 19 & Componentes', categoria: 'Framework' },
    { id: 'item-104', nome: 'React Router DOM', categoria: 'Roteamento' }
  ]);
  const [novoNome, setNovoNome] = useState('');
  const [novaCategoria, setNovaCategoria] = useState('Framework');
  const [busca, setBusca] = useState('');
  const [usarIndiceComoKey, setUsarIndiceComoKey] = useState(false);

  // Adição imutável usando Spread Operator
  const adicionarItem = (e) => {
    e.preventDefault();
    if (!novoNome.trim()) return;
    const novo = {
      id: `item-${Date.now().toString().slice(-4)}`,
      nome: novoNome.trim(),
      categoria: novaCategoria
    };
    setItens([novo, ...itens]);
    setNovoNome('');
  };

  // Remoção imutável usando filter()
  const removerItem = (idRemover) => {
    setItens(itens.filter((item) => item.id !== idRemover));
  };

  // Reordenação imutável
  const inverterOrdem = () => {
    setItens([...itens].reverse());
  };

  // Filtragem da lista
  const itensFiltrados = itens.filter((item) =>
    item.nome.toLowerCase().includes(busca.toLowerCase()) ||
    item.categoria.toLowerCase().includes(busca.toLowerCase())
  );

  const snippetCodigo = `// 1. Renderizando coleções com .map() e propriedade key única
const listaFiltrada = itens.filter(item => item.ativo);

return (
  <ul>
    {listaFiltrada.map((item, index) => (
      // CORRETO: Usar um ID único e estável como chave
      <li key={${usarIndiceComoKey ? 'index /* Alerta: chave instável! */' : 'item.id'}}>
        <strong>{item.nome}</strong>
        <button onClick={() => removerItem(item.id)}>Remover</button>
      </li>
    ))}
  </ul>
);`;

  return (
    <FlexCol gap="lg">
      <Card padding="lg">
        <FlexRow justify="between" align="center" wrap={true} gap="sm">
          <FlexRow gap="sm" style={{ width: 'auto' }}>
            <Badge variant="warning" size="lg">05</Badge>
            <div>
              <h2 style={{ fontSize: '24px', fontWeight: 800, color: 'var(--text-main)' }}>
                Listas & Chaves (Keys)
              </h2>
              <span style={{ fontSize: '13px', color: 'var(--text-muted)' }}>
                Iteração dinâmica com map(), filtros e estabilidade do Virtual DOM
              </span>
            </div>
          </FlexRow>
          <Badge variant="neutral" size="md">Slides 68 - 74</Badge>
        </FlexRow>

        <p style={{ marginTop: '16px', fontSize: '15px', color: 'var(--text-muted)', lineHeight: 1.6 }}>
          No React, coleções de dados são transformadas em nós visuais através do método <code>.map()</code>.
          Para que o algoritmo de reconciliação acompanhe com eficiência quais itens foram adicionados, removidos ou reordenados, cada elemento renderizado precisa receber a propriedade especial <strong><code>key</code></strong>.
        </p>

        <Alert variant="warning" title="Por que a Key deve ser Única e Estável? (Slides 71 e 73)">
          Utilizar o índice do array (<code>index</code>) como chave pode causar comportamentos inesperados ao reordenar ou excluir itens, pois o React confunde o estado interno de elementos que mudaram de posição. Prefira sempre identificadores permanentes como IDs do banco de dados ou UUIDs.
        </Alert>
      </Card>

      <Card padding="lg">
        <SectionTitle icon="💻" subtitle="Padrão recomendado para iterar coleções com React">
          Código de Mapeamento com Key
        </SectionTitle>
        <CodeBlock code={snippetCodigo} title="ListasComMap.jsx" />
      </Card>

      {/* Laboratório de Listas */}
      <Card padding="lg" style={{ borderLeft: '4px solid var(--color-warning)' }}>
        <SectionTitle icon="📋" subtitle="Experimente adicionar, filtrar, reordenar e testar o impacto da propriedade key">
          Laboratório Interativo de Coleções
        </SectionTitle>

        {/* Barra de Ações e Filtros */}
        <FlexRow gap="md" wrap={true} align="end">
          <FlexCol gap="xs" style={{ flex: '1 1 240px' }}>
            <InputField
              label="Filtrar Itens da Lista:"
              value={busca}
              onChange={(e) => setBusca(e.target.value)}
              placeholder="Digite para buscar..."
            />
          </FlexCol>

          <Button variant="outline" onClick={inverterOrdem} size="md" style={{ height: '42px', marginBottom: '2px' }}>
            🔄 Inverter Ordem da Lista
          </Button>

          <Button
            variant={usarIndiceComoKey ? 'danger' : 'outline'}
            onClick={() => setUsarIndiceComoKey(!usarIndiceComoKey)}
            size="md"
            style={{ height: '42px', marginBottom: '2px' }}
          >
            {usarIndiceComoKey ? '⚠️ Usando key={index}' : '✓ Usando key={item.id}'}
          </Button>
        </FlexRow>

        {/* Formulário de Adição de Item */}
        <form onSubmit={adicionarItem} style={{ marginTop: '16px' }}>
          <FlexRow gap="sm" wrap={true} align="end">
            <FlexCol gap="xs" style={{ flex: '2 1 200px' }}>
              <InputField
                label="Novo Conceito / Tópico:"
                value={novoNome}
                onChange={(e) => setNovoNome(e.target.value)}
                placeholder="Ex: Custom Hooks..."
              />
            </FlexCol>
            <FlexCol gap="xs" style={{ flex: '1 1 140px' }}>
              <label style={{ fontSize: '13px', fontWeight: 600, color: 'var(--text-muted)' }}>
                Categoria:
              </label>
              <select
                value={novaCategoria}
                onChange={(e) => setNovaCategoria(e.target.value)}
                style={{
                  height: '42px',
                  padding: '0 12px',
                  borderRadius: 'var(--radius-md)',
                  border: '1px solid var(--border-light)',
                  background: 'var(--bg-surface)',
                  fontSize: '14px',
                  color: 'var(--text-main)',
                  outline: 'none'
                }}
              >
                <option value="Framework">Framework</option>
                <option value="Linguagem">Linguagem</option>
                <option value="Arquitetura">Arquitetura</option>
                <option value="Performance">Performance</option>
              </select>
            </FlexCol>
            <Button type="submit" variant="primary" style={{ height: '42px', marginBottom: '2px' }}>
              ➕ Adicionar à Lista
            </Button>
          </FlexRow>
        </form>

        {/* Lista de Itens Renderizada */}
        <div style={{ marginTop: '24px' }}>
          <FlexRow justify="between" align="center" style={{ marginBottom: '12px' }}>
            <span style={{ fontSize: '13px', fontWeight: 700, color: 'var(--text-muted)' }}>
              ITENS RENDERIZADOS ({itensFiltrados.length}):
            </span>
            <span style={{ fontSize: '12px', color: 'var(--text-subtle)' }}>
              Prop key ativa: <code>{usarIndiceComoKey ? 'index (0, 1, 2...)' : 'item.id (única)'}</code>
            </span>
          </FlexRow>

          {itensFiltrados.length === 0 ? (
            <div style={{ padding: '24px', textAlign: 'center', background: 'var(--bg-surface-alt)', borderRadius: 'var(--radius-md)', color: 'var(--text-muted)' }}>
              Nenhum item encontrado para o termo pesquisado.
            </div>
          ) : (
            <FlexCol gap="xs">
              {itensFiltrados.map((item, index) => {
                const chaveAtiva = usarIndiceComoKey ? index : item.id;
                return (
                  <div
                    key={chaveAtiva}
                    style={{
                      padding: '12px 16px',
                      background: 'var(--bg-surface)',
                      border: '1px solid var(--border-light)',
                      borderRadius: 'var(--radius-md)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      flexWrap: 'wrap',
                      gap: '12px'
                    }}
                  >
                    <FlexRow gap="sm" style={{ width: 'auto' }}>
                      <Badge variant="neutral" size="sm">
                        key="{chaveAtiva}"
                      </Badge>
                      <div>
                        <strong style={{ color: 'var(--text-main)', fontSize: '14px' }}>
                          {item.nome}
                        </strong>
                        <span style={{ marginLeft: '10px', fontSize: '12px', color: 'var(--text-muted)' }}>
                          ({item.categoria})
                        </span>
                      </div>
                    </FlexRow>

                    <FlexRow gap="sm" style={{ width: 'auto' }}>
                      {/* Mini input local para testar a perda de estado quando index é a key ao reordenar */}
                      <input
                        placeholder="Nota pessoal..."
                        style={{
                          padding: '6px 10px',
                          borderRadius: 'var(--radius-sm)',
                          border: '1px solid var(--border-light)',
                          fontSize: '12px',
                          width: '130px'
                        }}
                      />
                      <Button
                        size="sm"
                        variant="danger"
                        onClick={() => removerItem(item.id)}
                      >
                        🗑️ Excluir
                      </Button>
                    </FlexRow>
                  </div>
                );
              })}
            </FlexCol>
          )}
        </div>
      </Card>
    </FlexCol>
  );
}
