import React from 'react';
import Navbar from './Navbar.jsx';
import Footer from './Footer.jsx';

/**
 * Layout - Estrutura mestre da aplicação (Navbar + Main responsivo + Footer).
 */
export default function Layout({ children }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Navbar />
      <main style={{ flex: 1, padding: '28px 16px', maxWidth: '1180px', width: '100%', margin: '0 auto' }}>
        {children}
      </main>
      <Footer />
    </div>
  );
}
