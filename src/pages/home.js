import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import oxenteBanner from '../images/OxenteBanner.png';
import mediquoBanner from '../images/MediquoBanner.png';
import 'react-alice-carousel/lib/alice-carousel.css';
import AliceCarousel from 'react-alice-carousel';
import './Home.css'; // Custom CSS for styling

function Home() {
 
  const handleDragStart = (e) => e.preventDefault();

  const items = [
    <img src={oxenteBanner} className='imagemCarrossel' alt='oxenteBanner' onDragStart={handleDragStart} role="presentation" />,
    <img src={mediquoBanner} className='imagemCarrossel' alt='mediquoBanner' onDragStart={handleDragStart} role="presentation" />,
  ];

  return (
    <div className="home-container">
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
        <div className="mt-5">
          <h2>Nossos planos são feitos<br /> sob medida para você!</h2>
        </div>
    </div>
  );
}

export default Home;