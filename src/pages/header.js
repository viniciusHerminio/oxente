import React from 'react';
import logo from '../images/logo.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Header.css'; // Custom CSS for styling

function Header() {
  const buttonStyle = {
    backgroundColor: 'transparent',
    border: '2px solid #ff6600', // Orange border matching font color
    padding: '10px 20px',
    borderRadius: '20px', // Rounded corners
    marginLeft: '20px', // Adjust margin for spacing
    marginTop: '10px'
  };

  const headerStyle = {
    position: 'fixed',
    top: 0,
    width: '100%',
    backgroundColor: '#ffffff', // Set your desired background color
    zIndex: 1000, // Ensure the header is on top of other elements
  };

  return (
    <div style={headerStyle}>
      <div className="d-flex align-items-center justify-content-between py-3 container">
        <img src={logo} alt="Logo" className="logo" />
        <div className="d-flex align-items-center mt-4">
          <p className="mx-3">Home</p>
          <p className="mx-3">Cobertura</p>
          <p className="mx-3">Planos</p>
          <p className="mx-3">Empresas</p>
          <p className="mx-3">Benefícios Oxente</p>
          <p className="mx-3">Contato</p>
          <p className="mx-3">2ª Via Boleto</p>
        </div>
        <button style={buttonStyle}>Assine Já</button>
      </div>
    </div>
  );
}

export default Header;