import React, { useState } from "react";
import titleMainPage from "../JSON/TitleBrieflt";

export default function FirstItem() {
  const [titleItem, setTitleItem] = useState(titleMainPage[0]);
  return (
    <div className="AboutBox">
      <h2 className="AboutBox__title">{titleItem.title}</h2>
    </div>
  );
}
