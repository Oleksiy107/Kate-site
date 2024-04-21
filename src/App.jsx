import React from "react";
import AboutProject from "./Pages/AboutUs";
import MainPage from "./Pages/MainPage";
import UnitingGood from "./Pages/UnitingGood";
import { Routes, Route } from "react-router-dom";
import VoiceVolunteer from "./Pages/VoiceVolunteer";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/VoiceVolunteer" element={<VoiceVolunteer />} />
      <Route path="/UnitingGood" element={<UnitingGood />} />
      <Route path="/AboutProject" element={<AboutProject />} />
    </Routes>
  );
};

export default App;
