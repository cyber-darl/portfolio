import React, { useEffect } from 'react';
import './LogoSlider.css'; 
import HighLevel from '../assets/Logos/HighLevel.png';
import Mondaycom from '../assets/Logos/monday-logo-x2.png';
import Webflow from '../assets/Logos/webflow.png';
import Woocommerce from '../assets/Logos/woocommerce.jpeg';
import Shopify from '../assets/Logos/Shopifylogo.png';
import Zapier from '../assets/Logos/zapier.png';
import Make from '../assets/Logos/make-logo.jpeg';
import ActiveCampaign from '../assets/Logos/ActiveCampaign.png';
import Klaviyo from '../assets/Logos/klaviyo-logo.jpeg';


const LogoSlider = () => {
  const logos = [
    { src: HighLevel, alt: "HighLevel logo"},
    { src: Mondaycom, alt: "Monday.com logo" },
    { src: Webflow, alt: "Webflow logo" },
    { src: Woocommerce, alt: "Woocommerce logo" },
    { src: Klaviyo, alt: "Klaviyo logo" },
    { src: Shopify, alt: "Shopify logo" },
    { src: Zapier, alt: "Zapier logo" },
    { src: Make, alt: "Make logo" },
    { src: ActiveCampaign, alt: "ActiveCampaign logo" },
 
  ];

  const handleLogoClick = (url) => {
    if (url) {
      window.open(url, '_blank');
    }
  };

  // Create duplicated logos for seamless animation (5 times as in original)
  const duplicatedLogos = [];
  for (let i = 0; i < 5; i++) {
    duplicatedLogos.push(...logos);
  }

  return (
    <div className="screenshots-container">
      <div className="left-gradient"></div>
      <div className="screenshots">
        {duplicatedLogos.map((logo, index) => (
          <img
            key={`${logo.alt}-${index}`}
            src={logo.src}
            alt={logo.alt}
            className="screenshots-img"
            onClick={() => handleLogoClick(logo.url)}
            style={{ cursor: logo.url ? 'pointer' : 'default' }}
          />
        ))}
      </div>
      <div className="right-gradient"></div>
    </div>
  );
};

export default LogoSlider;