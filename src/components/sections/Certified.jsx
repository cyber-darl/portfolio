import React from 'react';
import './Certified.css';
import { items } from '../../constants';
import TitleHeader from '../TitleHeader';

const Certified = () => {


  const [active, setActive] = React.useState(null);

  return (
    <div className="certified">
      <TitleHeader
          title='Certifications'
        />
      
      <div className="grid">
        {items.map((item) => (
          <div
            key={item.id}
            className={`box ${active === item.id ? 'active' : ''}`}
            onMouseEnter={() => setActive(item.id)}
            onMouseLeave={() => setActive(null)}
            tabIndex="0"
          >
            <div className="img-box">
              <img 
                src={item.image} 
                alt={item.title}
              />
            </div>
          <div className="text-box">
  <h3>{item.title}</h3>
  <p>{item.text}</p>
  <p className="issuer">{item.issuer}</p>
  <a href={item.link} className="verify-link" target="_blank" rel="noopener noreferrer">
    {item.verifyText}
  </a>
</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Certified;