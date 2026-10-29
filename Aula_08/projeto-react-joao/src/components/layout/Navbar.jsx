import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import FlexRow from './FlexRow.jsx';
import Badge from '../ui/Badge.jsx';

/**
 * Navbar - Barra de navegação superior fixa com indicador de rotas ativas.
 */
export default function Navbar() {
  const getNavClass = ({ isActive }) =>
    isActive ? 'nav-link active' : 'nav-link';

  return (
    <header
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 100,
        background: 'rgba(255, 255, 255, 0.92)',
        backdropFilter: 'blur(12px)',
        borderBottom: '1px solid var(--border-light)',
        boxShadow: 'var(--shadow-sm)'
      }}
    >
      <div style={{ maxWidth: '1180px', margin: '0 auto', padding: '12px 20px' }}>
        <FlexRow justify="between" align="center" wrap={true} gap="md">
          {/* Brand / Logo */}
          <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <div
              style={{
                width: '38px',
                height: '38px',
                borderRadius: 'var(--radius-md)',
                background: 'linear-gradient(135deg, var(--color-primary), var(--color-secondary))',
                display: 'grid',
                placeItems: 'center',
                color: 'white',
                fontSize: '20px',
                boxShadow: '0 4px 10px rgba(99, 102, 241, 0.3)'
              }}
            >
              ⚛️
            </div>
            <div>
              <div style={{ fontWeight: 800, fontSize: '17px', color: 'var(--text-main)', letterSpacing: '-0.02em' }}>
                React Mastery Lab
              </div>
              <div style={{ fontSize: '11px', color: 'var(--text-muted)', fontWeight: 500 }}>
                SENAI Frameworks Front-end • Aula 08
              </div>
            </div>
          </Link>

          {/* Links de Navegação SPA */}
          <nav>
            <FlexRow gap="sm" wrap={true} style={{ width: 'auto' }}>
              <NavLink to="/" className={getNavClass} end>
                🏠 Início
              </NavLink>
              <NavLink to="/formularios" className={getNavClass}>
                📝 Formulários Controlados
              </NavLink>
              <NavLink to="/api-explorer" className={getNavClass}>
                🌐 API & useEffect
              </NavLink>
            </FlexRow>
          </nav>

          {/* Status Badge */}
          <FlexRow gap="xs" style={{ width: 'auto' }}>
            <Badge variant="primary" size="sm" icon="🎓">
              Prof. Deivison Takatu
            </Badge>
          </FlexRow>
        </FlexRow>
      </div>

      <style>{`
        .nav-link {
          padding: 8px 14px;
          border-radius: var(--radius-md);
          font-size: 13px;
          font-weight: 600;
          color: var(--text-muted);
          transition: all var(--transition-fast);
          display: inline-flex;
          align-items: center;
          gap: 6px;
        }
        .nav-link:hover {
          color: var(--color-primary);
          background: var(--color-primary-light);
        }
        .nav-link.active {
          color: var(--color-primary);
          background: var(--color-primary-light);
          box-shadow: 0 0 0 1px rgba(99, 102, 241, 0.2);
        }
      `}</style>
    </header>
  );
}
