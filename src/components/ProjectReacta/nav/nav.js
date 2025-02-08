import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { useTranslation } from 'react-i18next';
import useDarkMode from 'use-dark-mode';
import { FaSun, FaMoon } from 'react-icons/fa';
import "./navbar.css";

const Hero = () => {
  const { t, i18n } = useTranslation();
  const [selectedLanguage, setSelectedLanguage] = useState('en');
  const darkMode = useDarkMode(false);

  // Update the body's class for dark mode with the new class name 'dark-mode'
  React.useEffect(() => {
    if (darkMode.value) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }, [darkMode.value]);

  const changeLanguage = (lang) => {
    setSelectedLanguage(lang);
    i18n.changeLanguage(lang);
  };

  return (
    <nav
      style={{
        backgroundColor: darkMode.value ? '#1a1a1a' : 'white',
        color: darkMode.value ? 'white' : 'black',
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
          display: 'flex',
          gap: '30px',
          textAlign: selectedLanguage === 'ar' ? 'right' : 'left',
        }}
      >
        <Link to="/" style={{ textDecoration: 'none', color: darkMode.value ? 'white' : 'black' }}>
          {t('home')}
        </Link>
        <Link to="/aboutus" style={{ textDecoration: 'none', color: darkMode.value ? 'white' : 'black' }}>
          {t('about')}
        </Link>
        <Link to="/contactus" style={{ textDecoration: 'none', color: darkMode.value ? 'white' : 'black' }}>
          {t('ContactUs')}
        </Link>
      </div>

      <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
        <Link to="/login">
          <button className="login-btn" style={{ backgroundColor: darkMode.value ? 'gray' : '#ff7900' }}>
            {t("login")}
          </button>
        </Link>

        <select
          value={selectedLanguage}
          onChange={(e) => changeLanguage(e.target.value)}
          style={{
            fontSize: '16px',
            color: 'white',
            backgroundColor: '#ff7900',
            border: 'none',
            height: "26px",
            padding: '2px 5px',
            borderRadius: '5px',
            cursor: 'pointer',
          }}
        >
          <option value="en" style={{ color: 'black' }}>En</option>
          <option value="ar" style={{ color: 'black' }}>AR</option>
        </select>

        <button
          onClick={darkMode.toggle}
          style={{
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            fontSize: '20px',
            color: darkMode.value ? 'yellow' : 'black',
          }}
        >
          {darkMode.value ? <FaSun /> : <FaMoon />}
        </button>
      </div>
    </nav>
  );
};

export default Hero;
