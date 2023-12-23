import React from "react";
import "./i18n/i18n";
import { LanguageProvider } from "./contexts/LanguageContext";
import { ApiProvider } from "./contexts/ApiContext";
import { Router } from "./router/Router";
import OverlayComp from "./components/customizedComp/Overlay";

function App() {
  return (
    <LanguageProvider>
      <ApiProvider>
        <Router />
        <OverlayComp />
      </ApiProvider>
    </LanguageProvider>
  );
}

export default App;
