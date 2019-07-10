import React from "react";
import "./App.css";
import Header from "./components/header/header";
import MatchesSection from "./components/matchesSection/matchesSection";

function App() {
  return (
    <div className="App">
      <Header />
      <MatchesSection />
      <div className="footer">
        <p>FooTV 2019 - SCOREBAT API - by FMTURATI</p>
      </div>
    </div>
  );
}

export default App;
