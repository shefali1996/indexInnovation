import React, { Component } from "react";
import { I18n, language } from "react-redux-i18n";
import bgImage from "../../assets/images/background/Circles.svg";
import notebookImage from "../../assets/images/background/Notebook.svg";
import "./index.scss";
import { connect } from "react-redux";
import VideoPlayer from "../VideoPlayer/VideoPlayer";
import Eng_video from "../../assets/videos/video_english_normal_speed.mp4";
import Chinese_video from "../../assets/videos/video_chinese_normal_speed.mp4";
import logo from "../../assets/images/logo.png";
import ReactPlayer from "react-player";

class HeadSection extends Component {
  state = {};

  render() {
    return (
      <div className="head-section">
        <img className="head-circle-img" src={bgImage} alt="head-circle-img" />
        <img
          className="head-notebook-img"
          src={notebookImage}
          alt="head-notebook-img"
        />
        <div className="linear-bg"></div>
        <h2>{I18n.t("headSection.moveForward")}</h2>
        <p>{I18n.t("headSection.transform")}</p>
        <div className="exp-idex-btn">{I18n.t("headSection.expIDEX")}</div>
        <div className="idex-player-container">
        <div className="idex-player">
          <ReactPlayer
            className="react-player"
            url={this.props.locale === "GB" ? Eng_video : Chinese_video}
            width="100%"
            height="100%"
            controls
          />
        </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    i18n: state.i18n
  };
}
export default connect(mapStateToProps)(HeadSection);
