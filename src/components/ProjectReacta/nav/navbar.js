import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import "./navbar.css";
import { Link } from "react-router-dom";

export default function Navbar() {
  const { t } = useTranslation();
  const [hovered, setHovered] = useState(null);

  const linkStyle = (isHovered) => ({
    textDecoration: "none",
    color: isHovered ? "#ffcc00" : "black",
    transition: "color 0.3s ease, transform 0.3s ease",
    transform: isHovered ? "scale(1.1)" : "scale(1)",
  });

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        fontFamily: "Arial",
        fontSize: "17px",
        width: "100%",
        margin: "0",
        color: "black",
      }}
    >
      <div>
        <img
          style={{ width: "150px", position: "relative", bottom: "0px" }}
          src="https://i.imgur.com/6ea69Lb.png"
          alt="Logo"
        />
      </div>

      <div>
        <nav
          style={{
            textAlign: "center",
            display: "flex",
            paddingTop: "30px",
            justifyContent: "center",
            gap: "40px",
            width: "100%",
          }}
        >
          {["home", "about", "services", "contact"].map((item, index) => (
            <a
              key={index}
              href={`#${item}`}
              style={linkStyle(hovered === index)}
              onMouseEnter={() => setHovered(index)}
              onMouseLeave={() => setHovered(null)}
            >
              {t(item)}
            </a>
          ))}
        </nav>
      </div>

      <div style={{ display: "flex", marginTop: "10px", gap: "5px" }}>
        <Link to="/login">
        <button className="login-btn">{t("login")}</button></Link>
       <Link to="/signup"> <button
          className="signup-btn"
          style={{
            border: "1px solid white",
            borderRadius: "10px",
            height: "36px",
            width: "80px",
          }}
        >
          {t("signup")}
        </button></Link>
      </div>
    </div>
  );
}
