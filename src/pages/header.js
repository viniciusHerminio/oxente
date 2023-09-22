import React, { useState } from 'react';
import logo from '../images/logo.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Header.css'; // Custom CSS for styling

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const buttonStyle = {
    backgroundColor: 'transparent',
    border: '2px solid #ff6600',
    padding: '10px 20px',
    borderRadius: '20px',
    marginLeft: '20px',
    marginTop: '10px'
  };

  const headerStyle = {
    position: 'fixed',
    top: 0,
    width: '100%',
    backgroundColor: '#ffffff',
    zIndex: 1000,
  };

  const menuStyle = {
    display: isMenuOpen ? 'flex' : 'none',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '10px',
    backgroundColor: '#ffffff',
    borderTop: '1px solid #ccc',
    position: 'absolute',
    top: '65px', // Adjusted top position to align with the header
    right: '0', // Aligned to the right
    width: '100%', // Full width
    boxSizing: 'border-box' // Ensure padding and border don't exceed the width
  };

  const menuIconStyle = {
    cursor: 'pointer',
  };

  return (
    <div style={headerStyle}>
      <div className="d-flex align-items-center justify-content-between py-3 container">
        <img src={logo} alt="Logo" className="logo" />
        <div className="d-flex align-items-center mt-4" style={{ flex: 1 }}>
          <div
            onClick={toggleMenu}
            className="d-md-none menu-icon"
            style={menuIconStyle}
          >
            ☰
          </div>
          <div className="d-none d-md-flex">
            <p className="mx-3">Home</p>
            <p className="mx-3">Cobertura</p>
            <p className="mx-3">Planos</p>
            <p className="mx-3">Empresas</p>
            <p className="mx-3">Benefícios Oxente</p>
            <p className="mx-3">Contato</p>
            <p className="mx-3">2ª Via Boleto</p>
          </div>
        </div>
        <button style={buttonStyle} className="d-none d-md-block">
          Assine Já
        </button>
      </div>
      <div style={menuStyle}>
        <p className="mx-3">Home</p>
        <p className="mx-3">Cobertura</p>
        <p className="mx-3">Planos</p>
        <p className="mx-3">Empresas</p>
        <p className="mx-3">Benefícios Oxente</p>
        <p className="mx-3">Contato</p>
        <p className="mx-3">2ª Via Boleto</p>
        <button style={buttonStyle} className="d-md-none">
          Assine Já
        </button>
      </div>
    </div>
  );
}

export default Header;