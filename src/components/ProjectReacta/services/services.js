import React from "react";
import "./services.css";
import myImage from "./Screenshot_29-1-2025_91755_www.figma.com.jpeg";
import { useTranslation } from "react-i18next";

export default function Services() {
  const { t } = useTranslation(); // Initialize translation

  return (
    <div id="services" style={{ fontFamily: "Arial, sans-serif",backgroundColor:"white" }}>
      <div style={{ display: "flex", marginTop: "20px" }}>
        <div style={{ position: "relative", bottom: "29px" }}>
          <h1
            className="header-text"
            style={{
              color: "#f8991f",
              width: "210px",
              backgroundColor:"white",
              fontSize: "2rem",
              position:"relative",
              left:"40px"
            }}
          >
            {t("ourServices")}
          </h1>
        </div>
        <div className="headers"></div>
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
          backgroundColor:"white",
          justifyContent: "space-between",
        }}
      >
        <div className="text-services">
          <h2 className="header-text" style={{ color: "#f8991f" }}>
            {t("academicPrograms")}
          </h2>
          <p  style={{ textAlign: "left", fontWeight: "bolder", whiteSpace: "pre-line" }}>
            {t("academicProgramsDesc")}
          </p>

          <h2 className="header-text" style={{ color: "#f8991f" }}>
            {t("coCurricularActivities")}
          </h2>
          <p  style={{ textAlign: "left", fontWeight: "bolder", whiteSpace: "pre-line" }}>
            {t("coCurricularActivitiesDesc")}
          </p>

          <h2 className="header-text" style={{ color: "#f8991f" }}>
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

      <div className="headers"></div>
    </div>
  );
}
