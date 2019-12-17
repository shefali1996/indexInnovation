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
import play_icon from "../../assets/images/icons/play-flat.svg";
import ModalForm from "../ModalForm/ModalForm";
import thumbnail from "../../assets/images/background/videoThumbnail.jpg";
import {
  Experiment,
  Variant,
  emitter,
  experimentDebugger
} from "@marvelapp/react-ab-test";
import availableBtn, { variantArr } from "../../utils";
import Mixpanel from "mixpanel"
var mixpanel=Mixpanel.init("e3547c5407fd5dbe484a8a3261b0b8f7")
experimentDebugger.enable();
emitter.defineVariants(
  "Middle-test",
  ["tryFree", "expIDEX", "getStarted"],
  [33, 33, 33]
  );
class HeadSection extends Component {
  state = {
    play: false,
    show: false,
    showThubnail: true
  };
  handelShowModal = () => {
    this.onclick()
    this.setState(prevState => ({
      show: true
    }));
  };
  onclick(e) {
    emitter.emitWin("Middle-test");
  }
  handlePlayClick = () => {
    this.setState(prevState => ({
      play: !prevState.play,
      showThubnail: false
    }));
  };
  componentWillMount() {
    if (!localStorage.getItem('PUSHTELL-Middle-test')) {            
      emitter.setActiveVariant("Middle-test", availableBtn()[0].name);
    }
  }
  render() {    
    return (
      <div className="head-section">
        <ModalForm
          show={this.state.show}
          handleCloseModal={() => {
            this.setState({
              show: false
            });
          }}
        />

        <img className="head-circle-img" src={bgImage} alt="head-circle-img" />
        <img
          className="head-notebook-img"
          src={notebookImage}
          alt="head-notebook-img"
        />
        <div className="linear-bg"></div>
        <h2>{I18n.t("headSection.moveForward")}</h2>
        <p>{I18n.t("headSection.transform")}</p>
        <Experiment ref="ab-more-info" name="Middle-test">
          {variantArr.map(val => {
            return (
              <Variant name={val.name}>
                <div className="exp-idex-btn" onClick={this.handelShowModal}>
                  {I18n.t(val.content)}
                </div>
              </Variant>
            );
          })}

        </Experiment>
        <div className="idex-player-container">
          <div className="idex-player">
            <ReactPlayer
              className="react-player"
              url={this.props.locale === "GB" ? Eng_video : Chinese_video}
              width="100%"
              height="100%"
              controls
              config={{
                file: {
                  attributes: {
                    controlsList: "nodownload"
                  }
                }
              }}
              playing={this.state.play}
              onPause={this.handlePlayClick}
              // light={thumbnail}
            />
            {this.state.showThubnail && (
              <img
                style={{ width: "100%", height: "100%" }}
                src={thumbnail}
                className="play-icon"
                onClick={this.handlePlayClick}
              />
            )}
            {!this.state.play && (
              <img
                style={{ position: "absolute" }}
                src={play_icon}
                className="play-icon"
                onClick={this.handlePlayClick}
              />
            )}
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
emitter.addPlayListener("Test-Addl-Info", function(
  experimentName,
  variantName
) {
  console.log(
    `Displaying experiment ${experimentName} variant   ${variantName}`
  );
  // Perform any necessary operations to send experiment data to server or analytics provider.
});
// The win listener is only called when the Win condition is met, in this instance, when the Learn More button is pressed.
emitter.addWinListener("Middle-test", function(experimentName, variantName) {
  console.log(
    `Variant ${variantName} of experiment ${experimentName} was clicked`,
    "99999999999"
  );
  mixpanel.track(experimentName+ "  " +variantName,{
    name:experimentName,
    variant:variantName
  })
  // Perform any necessary operations to send experiment data to server or analytics provider.
});