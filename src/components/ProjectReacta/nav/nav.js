import React, { useState } from 'react';
import { Link } from "react-router-dom";
import "./navbar.css";


import { useTranslation } from 'react-i18next';

const Hero = () => {
  const { t, i18n } = useTranslation();
  const [selectedLanguage, setSelectedLanguage] = useState('en');

  const changeLanguage = (lang) => {
    setSelectedLanguage(lang);
    i18n.changeLanguage(lang);
  };

  return (
    <>
      <div>
        <nav
          style={{
            backgroundColor: 'white',
            height: '80px',
            display: 'flex',
            width: '100%',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '0 50px',
            direction: selectedLanguage === 'ar' ? 'rtl' : 'ltr',
          }}
        >
          <div>
            <img
              style={{ width: '100px' }}
              src="https://i.imgur.com/EC9WLYR.png"
              alt="Logo"
            />
          </div>

          <div
            style={{
              fontSize: '18px',
              color: 'black',
              display: 'flex',
              gap: '30px',
              textAlign: selectedLanguage === 'ar' ? 'right' : 'left',
            }}
          >
            <Link to="/" style={{ textDecoration: 'none' }}>
            <a
              style={{ color: 'black', textDecoration: 'none' }}
              onMouseEnter={(e) => (e.target.style.color = 'orange')}
              onMouseLeave={(e) => (e.target.style.color = 'black')}
            >
              {t('home')}
            </a></Link>
            <Link to="/aboutus" style={{ textDecoration: 'none' }}>
            <a
              href="#"
              style={{ color: 'black', textDecoration: 'none' }}
              onMouseEnter={(e) => (e.target.style.color = 'orange')}
              onMouseLeave={(e) => (e.target.style.color = 'black')}
            >
              {t('about')}
            </a></Link>
            <Link to="/contactus" style={{ textDecoration: 'none' }}>
            <a
              href=""
              style={{ color: 'black', textDecoration: 'none' }}
              onMouseEnter={(e) => (e.target.style.color = 'orange')}
              onMouseLeave={(e) => (e.target.style.color = 'black')}
            >
              {t('ContactUs')}
            </a></Link>

          </div>
          <div style={{ display: "flex", marginTop: "10px", gap: "5px" }}>
                  <Link to="/login">
                  <button className="login-btn">{t("login")}</button></Link>

                  <select
            value={selectedLanguage}
            onChange={(e) => changeLanguage(e.target.value)}
            style={{
              fontSize: '16px',
              color: 'white',
              backgroundColor: 'orange',
              border: 'none',
              height:"26px",
              position:"relative",
              top:"2px",
              padding: '1px 2px ',
              borderRadius: '5px',
              cursor: 'pointer',
            }}
          >
            <option value="en" style={{ color: 'black' }}>
              En
            </option>
            <option value="ar" style={{ color: 'black' }}>
            AR
            </option>
          </select>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Hero;
