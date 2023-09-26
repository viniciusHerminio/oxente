import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import oxenteBanner from '../images/OxenteBanner.png';
import mediquoBanner from '../images/MediquoBanner.png';
import 'react-alice-carousel/lib/alice-carousel.css';
import AliceCarousel from 'react-alice-carousel';
import './Home.css'; // Custom CSS for styling

function Home() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768); // Assuming 768px is the breakpoint for mobile
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleDragStart = (e) => e.preventDefault();

  const items = [
    <img src={oxenteBanner} className='imagemCarrossel' alt='oxenteBanner' onDragStart={handleDragStart} role="presentation" />,
    <img src={mediquoBanner} className='imagemCarrossel' alt='mediquoBanner' onDragStart={handleDragStart} role="presentation" />,
  ];

  const planos = [
    {
      nome: 'Plano Bronze',
      descricao: 'Plano básico com cobertura essencial.',
    },
    {
      nome: 'Plano Prata',
      descricao: 'Cobertura intermediária para suas necessidades de saúde.',
    },
    {
      nome: 'Plano Ouro',
      descricao: 'Ampla cobertura para cuidar da sua saúde e bem-estar.',
    },
    {
      nome: 'Plano Diamante',
      descricao: 'O plano premium com cobertura completa e exclusiva.',
    },
  ];

  const renderPlanosCards = () => {
    return planos.map((plano, index) => (
      <div key={index} className="plano-card">
        <h3>{plano.nome}</h3>
        <p>{plano.descricao}</p>
      </div>
    ));
  };

  return (
    <div className={`home-container ${isMobile ? 'mobile' : ''}`}>
      {isMobile ? (
        <h2 className='titleCell'>Nossos planos são feitos<br /> sob medida para você!</h2>
      ) : (
        <>
          <AliceCarousel
            autoPlay={true}
            autoPlayControls={false}
            autoPlayInterval={5000}
            infinite={true}
            animationDuration={400}
            swipeDelta={500}
            disableButtonsControls
            disableDotsControls
            mouseTracking
            items={items}
          />
          <h2>Nossos planos são feitos<br /> sob medida para você!</h2>
          <div className="planos-container">
            {renderPlanosCards()}
          </div>
        </>
      )}
    </div>
  );
}

export default Home;