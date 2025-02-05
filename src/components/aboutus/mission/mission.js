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
        src="https://media.discordapp.net/attachments/1331191768959418478/1335554146866036786/Screenshot_2-2-2025_131447_www.vecteezy.com.jpeg?ex=67a0973a&is=679f45ba&hm=c8293f178be37538b233e8c110ad1bfdef24570a0ac426436682649213e5ab7d&=&format=webp&width=331&height=301"
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
