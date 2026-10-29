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
 * JSXConcept - Laboratório Didático 01: Sintaxe JSX & Expressões JavaScript
 * Referência aos slides 34 a 40 da Aula 08.
 */
export default function JSXConcept() {
  const [nome, setNome] = useState('João');
  const [cargo, setCargo] = useState('Desenvolvedor Frontend');
  const [numA, setNumA] = useState(10);
  const [numB, setNumB] = useState(5);
  const [ativo, setAtivo] = useState(true);

  const snippetCodigo = `// Exemplo de sintaxe JSX com interpolação dinâmica {}
const nome = "${nome}";
const cargo = "${cargo}";
const soma = ${numA} + ${numB}; // Resultado: ${Number(numA) + Number(numB)}

function CartaoApresentacao() {
  return (
    <div className="cartao-perfil">
      <h2>Olá, {nome || "Visitante"}!</h2>
      <p>Atuação: {cargo}</p>
      <span>Cálculo dinâmico: {${numA} + ${numB}}</span>
      <p>Status: {${ativo} ? "Ativo" : "Inativo"}</p>
    </div>
  );
}`;

  return (
    <FlexCol gap="lg">
      {/* Cabeçalho do Conceito */}
      <Card padding="lg">
        <FlexRow justify="between" align="center" wrap={true} gap="sm">
          <FlexRow gap="sm" style={{ width: 'auto' }}>
            <Badge variant="primary" size="lg">01</Badge>
            <div>
              <h2 style={{ fontSize: '24px', fontWeight: 800, color: 'var(--text-main)' }}>
                JSX (JavaScript XML)
              </h2>
              <span style={{ fontSize: '13px', color: 'var(--text-muted)' }}>
                Sintaxe declarativa para descrever interfaces de usuário
              </span>
            </div>
          </FlexRow>
          <Badge variant="neutral" size="md">Slides 34 - 40</Badge>
        </FlexRow>

        <p style={{ marginTop: '16px', fontSize: '15px', color: 'var(--text-muted)', lineHeight: 1.6 }}>
          O <strong>JSX</strong> é uma extensão de sintaxe para JavaScript recomendada pelo React.
          Ele permite escrever estruturas semelhantes a HTML diretamente dentro do código JS, unindo a marcação da interface com a lógica que produz seu conteúdo.
        </p>

        <Alert variant="info" title="Diferenças Fundamentais entre JSX e HTML">
          <ul style={{ margin: '6px 0 0 16px', lineHeight: 1.7 }}>
            <li>Utiliza <code>className</code> em vez de <code>class</code> para atribuir classes CSS.</li>
            <li>Utiliza <code>htmlFor</code> em vez de <code>for</code> para associar labels e inputs.</li>
            <li>Todas as tags sem filhos devem ser estritamente fechadas, como <code>&lt;img /&gt;</code> e <code>&lt;input /&gt;</code>.</li>
            <li>Expressões JavaScript válidas são inseridas dentro de chaves <code>{'{ }'}</code>.</li>
            <li>Componentes devem sempre retornar um elemento raiz único ou um <strong>Fragment</strong> (<code>&lt;&gt;...&lt;/&gt;</code>).</li>
          </ul>
        </Alert>
      </Card>

      {/* Snippet de Código */}
      <Card padding="lg">
        <SectionTitle icon="💻" subtitle="Observe como as variáveis de estado são interpoladas dentro do JSX">
          Código JSX Reativo
        </SectionTitle>
        <CodeBlock code={snippetCodigo} title="ExemploJSX.jsx" />
      </Card>

      {/* Laboratório Interativo */}
      <Card padding="lg" style={{ borderLeft: '4px solid var(--color-primary)' }}>
        <SectionTitle icon="🧪" subtitle="Altere os campos abaixo e veja o JSX ser recalculado e renderizado instantaneamente">
          Laboratório Interativo ao Vivo
        </SectionTitle>

        <FlexRow gap="lg" wrap={true} align="start">
          {/* Controles de Entrada */}
          <FlexCol gap="sm" style={{ flex: '1 1 300px' }}>
            <InputField
              label="Nome da Pessoa:"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              placeholder="Digite um nome..."
            />
            <InputField
              label="Cargo ou Ocupação:"
              value={cargo}
              onChange={(e) => setCargo(e.target.value)}
              placeholder="Digite o cargo..."
            />
            <FlexRow gap="sm">
              <InputField
                label="Valor A:"
                type="number"
                value={numA}
                onChange={(e) => setNumA(Number(e.target.value))}
              />
              <InputField
                label="Valor B:"
                type="number"
                value={numB}
                onChange={(e) => setNumB(Number(e.target.value))}
              />
            </FlexRow>

            <FlexRow justify="between" align="center" style={{ marginTop: '6px' }}>
              <span style={{ fontSize: '13px', fontWeight: 600, color: 'var(--text-muted)' }}>
                Status do Perfil:
              </span>
              <Button
                size="sm"
                variant={ativo ? 'success' : 'outline'}
                onClick={() => setAtivo(!ativo)}
              >
                {ativo ? '🟢 Perfil Ativo' : '⚪ Perfil Inativo'}
              </Button>
            </FlexRow>
          </FlexCol>

          {/* Pré-visualização do Elemento JSX */}
          <FlexCol gap="sm" style={{ flex: '1 1 320px' }}>
            <span style={{ fontSize: '12px', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase' }}>
              Renderização do Elemento JSX:
            </span>
            <div
              style={{
                background: 'linear-gradient(135deg, var(--bg-surface-alt), #ffffff)',
                border: '1px solid var(--border-light)',
                borderRadius: 'var(--radius-lg)',
                padding: '24px',
                boxShadow: 'var(--shadow-sm)'
              }}
            >
              <FlexRow justify="between" align="center">
                <span style={{ fontSize: '32px' }}>👤</span>
                <Badge variant={ativo ? 'success' : 'neutral'} size="sm">
                  {ativo ? 'ONLINE' : 'OFFLINE'}
                </Badge>
              </FlexRow>

              <h3 style={{ fontSize: '20px', fontWeight: 800, marginTop: '12px', color: 'var(--text-main)' }}>
                {nome ? `Olá, ${nome}!` : 'Olá, Visitante!'}
              </h3>
              <p style={{ fontSize: '14px', color: 'var(--color-primary)', fontWeight: 600 }}>
                {cargo || 'Sem cargo definido'}
              </p>

              <div
                style={{
                  marginTop: '16px',
                  padding: '10px 14px',
                  background: 'var(--color-primary-light)',
                  borderRadius: 'var(--radius-md)',
                  fontSize: '13px',
                  color: 'var(--color-primary)'
                }}
              >
                <strong>Expressão Matemática JSX:</strong> {numA} + {numB} = {Number(numA) + Number(numB)}
              </div>
            </div>
          </FlexCol>
        </FlexRow>
      </Card>
    </FlexCol>
  );
}
