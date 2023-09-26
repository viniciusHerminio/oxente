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
      setIsMobile(window.innerWidth < 768);
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
      nome: 'OXENTE',
      descricao: '100% Fibra Óptica',
      value: '200 MEGA',
      condicao: 'contrate 100M, receba 200M',
      beneficios: [
        'Wifi - Turbo',
        'Oxente.Tv',
        'valor já com desconto por fidelização e pagamento até o vencimento.'
      ],
      price: 'R$ 69,90/mes',
    },
    {
      nome: 'OXENTE',
      descricao: '100% Fibra Óptica',
      value: '400 MEGA',
      condicao: 'contrate 200M, receba 400M',
      beneficios: [
        'Wifi - Turbo',
        'Deezer Premium',
        'Oxente.Tv',
        'valor já com desconto por fidelização e pagamento até o vencimento.'
      ],
      price: 'R$ 79,90/mes',
    },
    {
      nome: 'OXENTE',
      descricao: '100% Fibra Óptica',
      value: '500 MEGA',
      condicao: 'contrate 200M, receba 500M',
      beneficios: [
        'Wifi - Turbo',
        'Deezer Premium',
        'Clinica digital Mediquo',
        'Oxente.Tv',
        'valor já com desconto por fidelização e pagamento até o vencimento.'
      ],
      price: 'R$ 89,90/mes',
    },
    {
      nome: 'OXENTE',
      descricao: '100% Fibra Óptica',
      value: '600 MEGA',
      condicao: 'contrate 300M, receba 600M',
      beneficios: [
        'Wifi - Turbo',
        'Deezer Premium',
        'Clinica digital Mediquo',
        'Streaming vídeo Looke',
        'Oxente.Tv',
        'valor já com desconto por fidelização e pagamento até o vencimento.'
      ],
      price: 'R$ 99,90/mes',
    },
  ];

  const renderBeneficios = (beneficios, index) => {
    return (
      <ul className={`beneficios-list${index}`}>
        {beneficios.map((beneficio, index) => (
          <li className='beneficio-item' key={index}>{beneficio}</li>
        ))}
      </ul>
    );
  };

  const renderPlanosCards = () => {
    return planos.map((plano, index) => (
      <div key={index} className="card-plano">
        <div className="plano-card">
          <h3 className='nome-card'>{plano.nome}</h3>
          <h1 className='plano-value'>{plano.value}</h1>
          <h5 className='plano-descricao'>{plano.descricao}</h5>
          <p>{plano.condicao}</p>
          <hr />
          {renderBeneficios(plano.beneficios, index)}
          <p className="price">{plano.price}</p>
          <button className="button-card">Assine já</button>
        </div>
      </div>
    ));
  };

  return (
    <div className={`home-container ${isMobile ? 'mobile' : ''}`}>
      {isMobile ? (
        <>
          <h2 className='titleCell'>Nossos planos são feitos<br /> sob medida para você!</h2>
          <div className="planos-container">
            {renderPlanosCards()}
          </div>
        </>
      ) : (
        <>
          <AliceCarousel
            autoPlay
            autoPlayControls={false}
            autoPlayInterval={5000}
            infinite
            animationDuration={400}
            swipeDelta={500}
            disableButtonsControls
            disableDotsControls
            mouseTracking
            items={items}
          />
          <h2 className='titleDesk'>Nossos planos são feitos<br /> sob medida para você!</h2>
          <div className="planos-container">
            {renderPlanosCards()}
          </div>
          <div>
            <h2>Benefícios</h2>
          </div>
        </>
      )}
    </div>
  );
}

export default Home;