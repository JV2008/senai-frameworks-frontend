# Aula 05 – Criando APIs para o Front‑end

## 📚 Visão geral
Esta aula apresenta os conceitos fundamentais para a criação de APIs que serão consumidas por aplicações front‑end. Aborda desde a definição de **API (Application Programming Interface)** e o **protocolo HTTP**, passando por **endpoints**, **JSON**, até a implementação prática de um back‑end com **Express.js** e seu deployment no **Render**. Também inclui a integração com um front‑end React, o ciclo completo de **CRUD** (Create, Read, Update, Delete) e ferramentas auxiliares como **Postman** para documentação e testes.

---

## ✅ Principais tópicos
- **API & REST** – Conceitos, vantagens de uma arquitetura sem estado e padrões de design.
- **Métodos HTTP** – GET, POST, PUT/PATCH, DELETE – finalidade, características e idempotência.
- **Endpoints** – URLs que expõem recursos; exemplo de endpoint público.
- **JSON** – Formato leve de troca de dados; objetos e arrays.
- **Servidor Backend** – Funções de armazenamento, regras de negócio e exposição de APIs.
- **Web Service** – Comunicação via HTTP/HTTPS entre sistemas heterogêneos.
- **Express.js** – Framework minimalista para Node.js que simplifica rotas, middlewares e CORS.
- **CRUD com Express** – Implementação passo‑a‑passo de rotas para notas (list, create, read, update, delete) usando `server.js` e um arquivo `data.json` como armazenamento simples.
- **Deploy no Render** – Criar repositório GitHub, conectar ao Render, definir comandos de build/start e disponibilizar a API online.
- **Integração Front‑end React** – Consumo das rotas da API, criação de UI para listagem e manipulação de notas.
- **Publicação do Front‑end** – Deploy na Vercel e ajuste da URL da API.
- **Postman** – Criação de coleção com as quatro operações CRUD, geração de documentação e testes automatizados.

---

## 📦 Artefatos e links (placeholders)
- **Aplicação Deployada:** https://senai-frameworks-frontend-api-backend.onrender.com
- **Repositório GitHub:**  https://github.com/JV2008/senai-frameworks-frontend-api-backend.git

---

## 📌 Observações importantes
- O uso de um arquivo `data.json` como banco de dados é adequado apenas para protótipos ou pequenos projetos acadêmicos. Em produção recomenda‑se um banco de dados persistente.
- A organização do código em um único `server.js` funciona para demos, mas uma estrutura modular (rotas, controllers, services) melhora a manutenibilidade.
- Segurança: habilitar CORS de forma restrita, validar entradas e considerar autenticação/autorização antes de expor endpoints.

---

*Este resumo foi gerado a partir do material da aula “Criando APIs para o Front‑end”.*