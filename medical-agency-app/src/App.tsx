import React from "react";
import Dashboard from "./components/Dashboard/Dashboard";
import { ThemeProvider } from "./context/ThemeContext";
import { LanguageProvider } from "./context/LanguageContext";
import "./styles/globals.css";
import "./styles/animations.css";

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <Dashboard />
      </LanguageProvider>
    </ThemeProvider>
  );
};

export default App;
