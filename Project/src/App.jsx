import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./page/Homepages";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HelpCenter from "./page/HelpCenter";
import PrivacyPolicy from "./page/PrivacyPolicy";
import TermsAndConditions from "./page/TermsAndConditions";
import GetStarted from "./page/GetStarted";
import GetStartedNow from "./page/GetStartedNow";
;

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/help" element={<HelpCenter />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/terms" element={<TermsAndConditions />} />
          <Route path="/getstarted" element={<GetStarted />} />
          <Route path="/getstartednow" element={<GetStartedNow />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
