import React from "react";
import "./services.css";
import myImage from "./Screenshot_29-1-2025_91755_www.figma.com.jpeg";
import { useTranslation } from "react-i18next";

export default function Services() {
  const { t } = useTranslation();

  return (
    <div id="services" style={{position:"relative",top:"100px", fontFamily: "Arial, sans-serif",backgroundColor:"white" }}>
      <div style={{ display: "flex", marginTop: "20px" }}>
        <div style={{ position: "relative", bottom: "29px" }}>
          <h1
            className="header-text"
            style={{
              color: "black",
              width: "100%",
              backgroundColor:"white",
              fontSize: "2rem",
              position:"relative",
              left:"500px"
            }}
          >
            {t("ourServices")}
          </h1>
        </div>
        <div className="headers3"></div>
        <div className="header1"></div>
      </div>

      <div
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          padding: "0px",
          borderRadius: "8px",
          lineHeight: "1.6",
          display: "flex",
          flexWrap: "wrap",
          gap: "160px",
          position:"relative",
          top:"60px",
          backgroundColor:"white",
          justifyContent: "space-between",
        }}
      >
        <div className="text-services">
          <h2 className="header-text" style={{ color: "#ff7900" }}>
            {t("academicPrograms")}
          </h2>
          <p  style={{ textAlign: "left", fontWeight: "bolder", whiteSpace: "pre-line" }}>
            {t("academicProgramsDesc")}
          </p>

          <h2 className="headerl-text" style={{ color: "#ff7900" }}>
            {t("coCurricularActivities")}
          </h2>
          <p  style={{ textAlign: "left", fontWeight: "bolder", whiteSpace: "pre-line" }}>
            {t("coCurricularActivitiesDesc")}
          </p>

          <h2 className="header-text" style={{ color: "#ff7900" }}>
            {t("educationalTechnology")}
          </h2>
          <p  style={{ textAlign: "left", fontWeight: "bolder", whiteSpace: "pre-line" }}>
            {t("educationalTechnologyDesc")}
          </p>
        </div>

        <div className="img-services" style={{ position: "relative", top: "90px" }}>
          <img src={myImage} alt="Description" width={330} />
        </div>
      </div>

    </div>
  );
}
