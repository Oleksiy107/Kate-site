import React from "react";
import Header from "../Header/Header";
import FourInterview from "../VoiceVolunteerItem/FourInterview";
import FirstItem from "../VoiceVolunteerItem/FirstItem";

import Navigate from "../VoiceVolunteerItem/navigate/Navigate";
import SecondItem from "../VoiceVolunteerItem/SecondItem";
import ThreeInterview from "../VoiceVolunteerItem/ThreeInterview";

function VoiceVolunteer() {
  return (
    <>
      <Header />
      <Navigate />
      <FirstItem />
      <SecondItem />
      <ThreeInterview />
      <FourInterview />
    </>
  );
}
export default VoiceVolunteer;
