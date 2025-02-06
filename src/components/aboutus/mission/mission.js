import React from "react";
import { FixedSizeList as List } from "react-window";
import { useTranslation } from "react-i18next";
import '../../../i18n';
import "./mission.css";

const MissionItem = ({ index, style, missions }) => (
  <div style={style} className="mission-item">
    <p>{missions[index]}</p>
  </div>
);

const OurMission = () => {
  const { t } = useTranslation();
  const missions = t("missions", { returnObjects: true });

  return (
    <div className="our-mission">
      <img
        style={{ width: "170px", position: "relative", bottom: "30px", left: "180px" }}
        src="https://i.imgur.com/JYdXVQ1.jpeg"
        alt="Mission"
      />

      <h1 style={{ textAlign: "center", color: "#ec7a1e", position: "relative", bottom: "10px" }}>
        {t("missionTitle")}
      </h1>

      <p>{t("missionDescription")}</p>

      <List
        height={300}
        itemCount={missions.length}
        itemSize={50}
        width="100%"
        style={{ overflowY: "auto" }}
      >
        {({ index, style }) => <MissionItem index={index} style={style} missions={missions} />}
      </List>
    </div>
  );
};

export default OurMission;
