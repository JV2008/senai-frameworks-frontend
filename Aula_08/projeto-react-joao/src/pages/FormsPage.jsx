import React, { useState } from 'react';
import Card from '../components/ui/Card.jsx';
import Badge from '../components/ui/Badge.jsx';
import Button from '../components/ui/Button.jsx';
import InputField from '../components/ui/InputField.jsx';
import Alert from '../components/ui/Alert.jsx';
import CodeBlock from '../components/ui/CodeBlock.jsx';
import SectionTitle from '../components/ui/SectionTitle.jsx';
import FlexRow from '../components/layout/FlexRow.jsx';
import FlexCol from '../components/layout/FlexCol.jsx';

/**
 * FormsPage - Laboratório Dedicado a Formulários Controlados e useState
 */
export default function FormsPage() {
  const [formData, setFormData] = useState({
    nome: 'João Vitor',
    email: 'joao.vitor@edu.senai.br',
    nivel: 'Intermediário',
    framework: 'React',
    turno: 'Noite',
    aceitouTermos: true,
    bio: 'Estudante entusiasmado por desenvolvimento frontend e componentes reativos.'
  });

  const [erros, setErros] = useState({});
  const [envios, setEnvios] = useState([]);
  const [sucessoMsg, setSucessoMsg] = useState('');

  // Manipulador genérico de inputs controlados
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));

    // Limpa erro do campo modificado
    if (erros[name]) {
      setErros((prev) => ({ ...prev, [name]: null }));
    }
  };

  // Validação dos dados do formulário
  const validarFormulario = () => {
    const novosErros = {};
    if (!formData.nome.trim() || formData.nome.length < 3) {
      novosErros.nome = 'O nome deve ter pelo menos 3 caracteres.';
    }
    if (!formData.email.trim() || !formData.email.includes('@')) {
      novosErros.email = 'Informe um endereço de e-mail válido com @.';
    }
    if (!formData.aceitouTermos) {
      novosErros.aceitouTermos = 'É obrigatório aceitar os termos do regulamento.';
    }
    return novosErros;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validacoes = validarFormulario();

    if (Object.keys(validacoes).length > 0) {
      setErros(validacoes);
      setSucessoMsg('');
      return;
    }

    setErros({});
    const novoEnvio = {
      ...formData,
      id: Date.now(),
      dataEnvio: new Date().toLocaleTimeString()
    };

    setEnvios((prev) => [novoEnvio, ...prev]);
    setSucessoMsg(`Inscrição de "${formData.nome}" registrada com sucesso!`);
    setTimeout(() => setSucessoMsg(''), 4000);
  };

  const snippetCodigo = `// Exemplo de Formulário Controlado no React:
const [formData, setFormData] = useState({
  nome: '',
  email: '',
  nivel: 'Iniciante'
});

const handleChange = (e) => {
  const { name, value } = e.target;
  // Atualização imutável do estado com chave dinâmica
  setFormData(prev => ({ ...prev, [name]: value }));
};

const handleSubmit = (e) => {
  e.preventDefault(); // Impede o recarregamento do browser
  console.log("Dados prontos para envio:", formData);
};

return (
  <form onSubmit={handleSubmit}>
    <input name="nome" value={formData.nome} onChange={handleChange} />
    <input name="email" value={formData.email} onChange={handleChange} />
    <button type="submit">Enviar</button>
  </form>
);`;

  return (
    <FlexCol gap="xl">
      {/* Cabeçalho */}
      <Card padding="lg">
        <FlexRow justify="between" align="center" wrap={true} gap="sm">
          <FlexRow gap="sm" style={{ width: 'auto' }}>
            <Badge variant="primary" size="lg">📝</Badge>
            <div>
              <h1 style={{ fontSize: '26px', fontWeight: 800, color: 'var(--text-main)' }}>
                Formulários Controlados & State
              </h1>
              <span style={{ fontSize: '13px', color: 'var(--text-muted)' }}>
                Single Source of Truth, validação e manipulação de estado em tempo real
              </span>
            </div>
          </FlexRow>
          <Badge variant="success" size="md">useState Hook</Badge>
        </FlexRow>

        <p style={{ marginTop: '16px', fontSize: '15px', color: 'var(--text-muted)', lineHeight: 1.6 }}>
          Em componentes React controlados, o valor do elemento HTML de formulário (como <code>&lt;input&gt;</code>, <code>&lt;select&gt;</code> e <code>&lt;textarea&gt;</code>) é governado diretamente pelo estado do React.
          A cada digitação do usuário, um evento <code>onChange</code> é disparado, atualizando o estado via <code>useState</code> e renderizando o novo valor sincronizado.
        </p>

        <Alert variant="info" title="Por que usar Componentes Controlados?">
          Eles permitem validações imediatas a cada tecla, habilitar/desabilitar botões condicionalmente, formatar máscaras de entrada e assegurar que a interface e o estado estejam sempre 100% alinhados.
        </Alert>
      </Card>

      {/* Snippet de Código */}
      <Card padding="lg">
        <SectionTitle icon="💻" subtitle="Padrão arquitetural de gerenciamento de formulários">
          Implementação de Formulário Controlado
        </SectionTitle>
        <CodeBlock code={snippetCodigo} title="FormularioControlado.jsx" />
      </Card>

      {/* Laboratório Prático de Formulário */}
      <Card padding="lg" style={{ borderLeft: '4px solid var(--color-primary)' }}>
        <SectionTitle icon="📋" subtitle="Preencha o formulário e observe o objeto JSON de estado se transformando ao vivo">
          Laboratório Interativo: Inscrição em Workshop SENAI
        </SectionTitle>

        {sucessoMsg && (
          <Alert variant="success" title="Inscrição Confirmada!">
            {sucessoMsg}
          </Alert>
        )}

        <FlexRow gap="xl" wrap={true} align="start" style={{ marginTop: '16px' }}>
          {/* Formulário Interativo */}
          <form onSubmit={handleSubmit} style={{ flex: '1 1 360px' }}>
            <FlexCol gap="md">
              <div>
                <InputField
                  label="Nome Completo:"
                  name="nome"
                  value={formData.nome}
                  onChange={handleChange}
                  placeholder="Seu nome completo..."
                />
                {erros.nome && (
                  <span style={{ fontSize: '12px', color: 'var(--color-danger)', fontWeight: 600 }}>
                    ⚠️ {erros.nome}
                  </span>
                )}
              </div>

              <div>
                <InputField
                  label="E-mail Institucional:"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="exemplo@edu.senai.br"
                />
                {erros.email && (
                  <span style={{ fontSize: '12px', color: 'var(--color-danger)', fontWeight: 600 }}>
                    ⚠️ {erros.email}
                  </span>
                )}
              </div>

              {/* Nível de Experiência e Turno */}
              <FlexRow gap="sm" wrap={true}>
                <FlexCol gap="xs" style={{ flex: 1 }}>
                  <label style={{ fontSize: '13px', fontWeight: 600, color: 'var(--text-muted)' }}>
                    Nível de Experiência:
                  </label>
                  <select
                    name="nivel"
                    value={formData.nivel}
                    onChange={handleChange}
                    style={{
                      height: '42px',
                      padding: '0 12px',
                      borderRadius: 'var(--radius-md)',
                      border: '1px solid var(--border-light)',
                      background: 'var(--bg-surface)',
                      fontSize: '14px',
                      outline: 'none'
                    }}
                  >
                    <option value="Iniciante">Iniciante</option>
                    <option value="Intermediário">Intermediário</option>
                    <option value="Avançado">Avançado</option>
                  </select>
                </FlexCol>

                <FlexCol gap="xs" style={{ flex: 1 }}>
                  <label style={{ fontSize: '13px', fontWeight: 600, color: 'var(--text-muted)' }}>
                    Turno Desejado:
                  </label>
                  <select
                    name="turno"
                    value={formData.turno}
                    onChange={handleChange}
                    style={{
                      height: '42px',
                      padding: '0 12px',
                      borderRadius: 'var(--radius-md)',
                      border: '1px solid var(--border-light)',
                      background: 'var(--bg-surface)',
                      fontSize: '14px',
                      outline: 'none'
                    }}
                  >
                    <option value="Manhã">Manhã</option>
                    <option value="Tarde">Tarde</option>
                    <option value="Noite">Noite</option>
                  </select>
                </FlexCol>
              </FlexRow>

              {/* Framework de Preferência (Radio Buttons) */}
              <FlexCol gap="xs">
                <label style={{ fontSize: '13px', fontWeight: 600, color: 'var(--text-muted)' }}>
                  Tecnologia Principal de Foco:
                </label>
                <FlexRow gap="md">
                  {['React', 'Next.js', 'Vite'].map((tech) => (
                    <label key={tech} style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '13px', cursor: 'pointer' }}>
                      <input
                        type="radio"
                        name="framework"
                        value={tech}
                        checked={formData.framework === tech}
                        onChange={handleChange}
                      />
                      {tech}
                    </label>
                  ))}
                </FlexRow>
              </FlexCol>

              {/* Textarea */}
              <FlexCol gap="xs">
                <label style={{ fontSize: '13px', fontWeight: 600, color: 'var(--text-muted)' }}>
                  Objetivo / Expectativa com a Disciplina:
                </label>
                <textarea
                  name="bio"
                  rows="3"
                  value={formData.bio}
                  onChange={handleChange}
                  style={{
                    padding: '10px 14px',
                    borderRadius: 'var(--radius-md)',
                    border: '1px solid var(--border-light)',
                    fontFamily: 'inherit',
                    fontSize: '14px',
                    resize: 'vertical'
                  }}
                />
              </FlexCol>

              {/* Checkbox Termos */}
              <div>
                <label style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13px', cursor: 'pointer' }}>
                  <input
                    type="checkbox"
                    name="aceitouTermos"
                    checked={formData.aceitouTermos}
                    onChange={handleChange}
                  />
                  <span>Concordo com os regulamentos acadêmicos do SENAI</span>
                </label>
                {erros.aceitouTermos && (
                  <span style={{ fontSize: '12px', color: 'var(--color-danger)', fontWeight: 600, display: 'block', marginTop: '4px' }}>
                    ⚠️ {erros.aceitouTermos}
                  </span>
                )}
              </div>

              <Button type="submit" variant="primary" size="lg" fullWidth={true}>
                🚀 Concluir Inscrição Controlada
              </Button>
            </FlexCol>
          </form>

          {/* Inspetor de Estado em Tempo Real */}
          <FlexCol gap="md" style={{ flex: '1 1 320px' }}>
            <div
              style={{
                padding: '16px',
                background: '#0f172a',
                borderRadius: 'var(--radius-lg)',
                border: '1px solid #1e293b',
                color: '#e2e8f0',
                boxShadow: 'var(--shadow-md)'
              }}
            >
              <FlexRow justify="between" align="center" style={{ marginBottom: '8px' }}>
                <span style={{ fontSize: '12px', fontWeight: 700, color: '#38bdf8' }}>
                  🔍 ESTADO REACT (useState)
                </span>
                <Badge variant="accent" size="sm">TEMPO REAL</Badge>
              </FlexRow>
              <pre
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '12px',
                  lineHeight: 1.5,
                  margin: 0,
                  overflowX: 'auto',
                  color: '#a5f3fc'
                }}
              >
                {JSON.stringify(formData, null, 2)}
              </pre>
            </div>

            {/* Inscrições Efetuadas */}
            {envios.length > 0 && (
              <div style={{ marginTop: '8px' }}>
                <span style={{ fontSize: '13px', fontWeight: 700, color: 'var(--text-main)' }}>
                  Inscrições Submetidas Nesta Sessão ({envios.length}):
                </span>
                <FlexCol gap="xs" style={{ marginTop: '8px' }}>
                  {envios.map((env) => (
                    <div
                      key={env.id}
                      style={{
                        padding: '10px 14px',
                        background: 'var(--bg-surface)',
                        border: '1px solid var(--border-light)',
                        borderRadius: 'var(--radius-md)',
                        fontSize: '12px'
                      }}
                    >
                      <strong>{env.nome}</strong> ({env.email}) — {env.nivel} • Turno {env.turno}
                      <span style={{ display: 'block', color: 'var(--text-subtle)', marginTop: '2px' }}>
                        Enviado às {env.dataEnvio}
                      </span>
                    </div>
                  ))}
                </FlexCol>
              </div>
            )}
          </FlexCol>
        </FlexRow>
      </Card>
    </FlexCol>
  );
}
