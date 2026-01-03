import React, { useEffect } from 'react';
import './LogoSlider.css'; // We'll extract the CSS separately

const LogoSlider = () => {
  const logos = [
    { src: "https://viraldistributors.com/wp-content/uploads/2025/09/daisy-logo-1.png", alt: "Daisy logo", url: "https://viraldistributors.com/shop/?product_brand=daisy" },
    { src: "https://viraldistributors.com/wp-content/uploads/2025/09/bog-logo.png", alt: "BOG logo", url: "https://viraldistributors.com/shop/?product_brand=bog" },
    { src: "https://viraldistributors.com/wp-content/uploads/2025/09/caldwell-logo-new.png", alt: "Caldwell logo", url: "https://viraldistributors.com/shop/?product_brand=caldwell" },
    { src: "https://viraldistributors.com/wp-content/uploads/2025/09/crosman-logo.png", alt: "Crosman logo", url: "https://viraldistributors.com/shop/?product_brand=crosman" },
    { src: "https://viraldistributors.com/wp-content/uploads/2025/09/logo-GAMO.png", alt: "Gamo logo", url: "https://viraldistributors.com/shop/?product_brand=gamo" },
    { src: "https://viraldistributors.com/wp-content/uploads/2025/09/download-6.png", alt: "MTM Case Gard logo", url: "https://viraldistributors.com/shop/?product_brand=mtm" },
    { src: "https://viraldistributors.com/wp-content/uploads/2025/09/Estwing-Nav-Logo.png.webp", alt: "Estwing logo", url: "https://viraldistributors.com/shop/?product_brand=estwing" },
    { src: "https://viraldistributors.com/wp-content/uploads/2025/09/knipex-logo.png", alt: "Knipex logo", url: "https://viraldistributors.com/product-category/sports-outdoor/" },
    { src: "https://viraldistributors.com/wp-content/uploads/2025/09/download-7.png", alt: "SOG logo", url: "https://viraldistributors.com/product-category/sports-outdoor/" },
    { src: "https://viraldistributors.com/wp-content/uploads/2025/09/download-8.png", alt: "CTA logo", url: "https://viraldistributors.com/shop/?product_brand=cta" },
    { src: "https://viraldistributors.com/wp-content/uploads/2025/09/download-9.png", alt: "flexzilla logo", url: "https://viraldistributors.com/shop/?product_brand=flexzilla" },
    { src: "https://viraldistributors.com/wp-content/uploads/2025/09/Lucas-Oil-Logo-White_v2.png", alt: "Lucas Oil logo", url: "https://viraldistributors.com/wp-content/uploads/2025/09/daisy-logo-1.png" },
    { src: "https://viraldistributors.com/wp-content/uploads/2025/09/download-11.png", alt: "No spill cans logo", url: "https://viraldistributors.com/shop/?product_brand=no-spill-inc" },
    { src: "https://viraldistributors.com/wp-content/uploads/2025/09/ptlogo-shine.webp", alt: "Performance tool logo", url: "https://viraldistributors.com/product-category/sports-outdoor/" },
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