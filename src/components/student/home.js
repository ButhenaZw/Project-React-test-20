import React from "react";
import { Link } from "react-router-dom"; 
import { motion } from "framer-motion";
import "./home.css";
import Nav from './navbar'
import Services from '../ProjectReacta/services/services'
import Activity from '../ProjectReacta/ac/Activty'
import { useTranslation } from "react-i18next";
import Footer from '../contactus/Home/footer/footer'

export const Button = ({ children, className, ...props }) => (
  <button className={`px-4 py-2 rounded-lg text-white font-bold ${className}`} {...props}>
    {children}
  </button>
);

export const Card = ({ children, className }) => (
  <div className={`rounded-lg shadow-md p-4 ${className}`}>{children}</div>
);

export const CardContent = ({ children }) => <div>{children}</div>;

const Homepage = () => {
  const { t, i18n } = useTranslation();

  return (
    <div className="bodya">
        <Nav/>
      <div className="homepage">
        <div style={{ backgroundColor: "#ff7900", height: "2px", width: "100%" }}></div>

        <section className="hero-section">
          <div>
            <img
              style={{ width: "450px", position: "relative", bottom: "0px" }}
              src="https://i.imgur.com/bayzpkS.jpeg"
              alt="Hero"
            />
          </div>
          <div>

            <h1 className="hero-title">{t("heroTitle")}</h1>
            <h4 className="hero-text">{t("heroText")}</h4>
            

          </div>
        </section>

        <motion.section 
          className="image-section" 
          initial={{ opacity: 0, y: 50 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.5 }}
        >
          <Card>
            <CardContent>
            </CardContent>
          </Card>
        </motion.section>
      </div>
      <Activity/>
      <Services/>
      <Footer/>
    </div>
  );
};

export default Homepage;
