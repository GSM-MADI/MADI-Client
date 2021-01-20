import axios from "axios";
import React from "react";
import info from "../../../assets/background/InfoApps.png";

const AppSummary: React.FC = () => {
  return (
    <div>
      <img src={info} alt="앱 요약" />
    </div>
  );
};

export default AppSummary;
