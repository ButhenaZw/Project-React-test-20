import React from "react";
import { useTranslation } from "react-i18next";
import './partner.css';
import '../../../i18n';


const partners = [
  { name: "SimplonLine", logo: "https://avatars.githubusercontent.com/u/14060406?v=4" },
  { name: "Coach Amro", logo: "https://i.imgur.com/iaAtw6U.jpeg" },
  { name: "Coach Leen", logo: "https://i.imgur.com/yagnn1P.jpeg" },
  { name: "Orange JO", logo: "https://i.imgur.com/Et6zokb.png" },
];

const PartnersSection = () => {
  const { t } = useTranslation();

  return (
    <div className="partners" style={{ position: "relative", top: "280px" }}>
      <h2 className="partners-title">{t('partnersSection.title')}</h2>  
      <p className="partners-text">{t('partnersSection.text')}</p>
      <div className="partners-grid">
        {partners.map((partner, index) => (
          <div key={index} className="partner-card">
            <img src={partner.logo} alt={partner.name} />
            <p>{partner.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PartnersSection;
