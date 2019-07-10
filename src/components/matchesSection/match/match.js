import React from "react";
import moment from "moment";
import "./match.css";
import goalIcon from "../../../static/img/goal-icon.png";
import highlightIcon from "../../../static/img/highlights-icon.png";

const Match = props => {
  const { title, thumbnail, videos, date, competition } = props.match;

  return (
    <div className="match-card">
      <img src={thumbnail} alt="Thumbnail" className="match-card--img" />

      <p
        onClick={() => props.setPopup(videos[0].embed)}
        className="match-card--title"
      >
        {title.replace(" - ", " x ")}
      </p>
      <div>
        <p className="match-competition-name">{competition.name}</p>
      </div>
      <p>
        {videos
          ? videos.map((video, index) => {
              return (
                <a
                  onClick={() => {
                    props.setPopup(video.embed);
                  }}
                  key={index}
                  className="match-videos-link"
                >
                  <img
                    alt="Icons"
                    src={video.title[1] === "-" ? goalIcon : highlightIcon}
                    className="match-videos-icon"
                  />{" "}
                  <small>{video.title}</small>
                </a>
              );
            })
          : "No videos"}
      </p>
      <div className="match-date">
        <p>{moment(date).format("LL")}</p>
      </div>
    </div>
  );
};

export default Match;
