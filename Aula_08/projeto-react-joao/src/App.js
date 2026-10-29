import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout.jsx';
import HomePage from './pages/HomePage.jsx';
import ConceptDetailPage from './pages/ConceptDetailPage.jsx';
import FormsPage from './pages/FormsPage.jsx';
import ApiExplorerPage from './pages/ApiExplorerPage.jsx';
import NotFoundPage from './pages/NotFoundPage.jsx';

/**
 * App - Componente Raiz da Aplicação com Configuração de Rotas Declarativas (React Router)
 */
export default function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          {/* Rota Principal: Dashboard dos Conceitos */}
          <Route path="/" element={<HomePage />} />

          {/* Rota Dinâmica: Detalhes e Laboratório do Conceito */}
          <Route path="/conceito/:id" element={<ConceptDetailPage />} />

          {/* Rota Temática: Formulários Controlados e State */}
          <Route path="/formularios" element={<FormsPage />} />

          {/* Rota Temática: Consumo de APIs e useEffect */}
          <Route path="/api-explorer" element={<ApiExplorerPage />} />

          {/* Rota Coringa 404: Página não encontrada */}
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}
