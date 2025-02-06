
import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { useTranslation } from "react-i18next";
import 
 {BsFillBellFill, BsFillEnvelopeFill, BsPersonCircle, BsSearch, BsJustify}
 from 'react-icons/bs'

const Hero = () => {
  const { t, i18n } = useTranslation();
  const [selectedLanguage, setSelectedLanguage] = useState("en");
  const [profileImage, setProfileImage] = useState("https://bootdey.com/img/Content/avatar/avatar1.png");
  const navigate = useNavigate();

  useEffect(() => {
    const storedProfile = JSON.parse(localStorage.getItem("studentProfile"));
    if (storedProfile && storedProfile.profileImage) {
      setProfileImage(storedProfile.profileImage);
    }
  }, []);}

function Header({OpenSidebar}) {
  return (
    <header className='header-dash'>
        <div className='menu-icons'>
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>



            </div>

            <BsJustify className='icon-dashboard' onClick={OpenSidebar}/>
        </div>
        <div className='header-left'>
            <BsSearch  className='icon-dashboard'/>
        </div>
        <div className='header-right'>
          
        <div className="dropdown">
              <button className="dropbtn">
                <ArrowDropDownIcon />
                <i className="fa fa-caret-down"></i>
              </button>
              <div className="dropdown-content">
                <Link to="/profileT" className="link-dropdown">
                  <a>My Profile</a>
                </Link>
                <Link to="/login">
                  <a>Logout</a>
                </Link>
              </div>
            </div>

        </div>

    </header>
  )
}

export default Header