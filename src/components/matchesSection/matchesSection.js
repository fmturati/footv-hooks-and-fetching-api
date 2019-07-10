import React, { useState, useEffect } from "react";
import axios from "axios";
import Match from "./match/match";
import "./matchesSection.css";
import Loader from "../loader/loader";
import ReactHtmlParser from "react-html-parser";
import closeIcon from "../../static/img/close-icon.png";

const MatchesSection = props => {
  const [data, getData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showDetails, setPopup] = useState();

  useEffect(async () => {
    const request = await axios.get("https://www.scorebat.com/video-api/v1/");
    const data = await request.data;
    getData(data);
    setLoading(false);
  }, []);

  const showMatches = data.map((match, index) => {
    return (
      <div className="" key={index}>
        <Match match={match} showDetails={showDetails} setPopup={setPopup} />
      </div>
    );
  });

  return (
    <div style={{ position: "relative" }}>
      <div className="main-title">
        <h1>Watch the Highlights and Goals for the last games!</h1>
      </div>
      {loading ? (
        <div className="loading-screen">
          <Loader />
        </div>
      ) : (
        <div className="container">{showMatches}</div>
      )}

      {showDetails && (
        <div className="match-bg center-elements">
          <div className="match-popup">
            <div
              onClick={() => setPopup(null)}
              className="match-popup-close-button"
            >
              <img src={closeIcon} />
            </div>
            <div>{ReactHtmlParser(showDetails)}</div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MatchesSection;
