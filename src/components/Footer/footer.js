import React, { Component } from "react";
import { I18n } from "react-redux-i18n";
import logoImage from "../../assets/images/footer/logo.png";
import ModalForm from "../ModalForm/ModalForm";
import "./footer.scss";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { OverlayTrigger, Tooltip } from "react-bootstrap";
import QrCode from "../../assets/images/customer_logos/qrcode.jpg";
import availableBtn ,{variantArr}from "../../utils";
import {
  Experiment,
  Variant,
  emitter,
  experimentDebugger
} from "@marvelapp/react-ab-test";
import ReactGA from 'react-ga';


let trackingId="UA-154780234-1"
ReactGA.initialize(trackingId);
ReactGA.set({ dimension14: "Sports" });

experimentDebugger.enable();
emitter.defineVariants(
  "Footer-test",
  ["Try-It-For-Free", "Experience-IDEX", "Get-Started"],
  [33, 33, 33]
);

class Footer extends Component {
  state = {
    show: false
  };
  handleClick = () => {
    this.setState(prevState => ({
      mobileHeader: !prevState.mobileHeader
    }));
  };

  handelShowModal = () => {
    this.onclick()
    this.setState(prevState => ({
      show: true
    }));
  };
  onclick(e) {    
    emitter.emitWin("Footer-test");
  }
  componentWillMount(){
 
    if(!localStorage.getItem('PUSHTELL-Footer-test')){
    emitter.setActiveVariant('Footer-test', availableBtn()[0].name)
    }
  }
  socialMediaIcon = () => {
    return (
      <div className="icons">
        <Link to="/blog">{I18n.t("footer.blog")}</Link>
        <div className="row footer-social">
          <ul align="left">
            <li>
              <a
                href="https://www.facebook.com/idexinnovation"
                rel="noopener noreferrer"
                target="_blank"
              >
                <i className="fab fa-facebook-f"></i>
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/company/idex-innovation"
                rel="noopener noreferrer"
                target="_blank"
              >
                <i className="fab fa-linkedin-in"></i>
              </a>
            </li>
            <li>
              <a
                href="https://twitter.com/idex_ideas"
                rel="noopener noreferrer"
                target="_blank"
              >
                <i className="fab fa-twitter"></i>
              </a>
            </li>
            <li>
              <OverlayTrigger
                key={"top"}
                placement={"top"}
                overlay={
                  <Tooltip id={`tooltip-top`}>
                    <img src={QrCode} width="150px" height="150px" />
                  </Tooltip>
                }
              >
                <a rel="noopener noreferrer" target="_blank">
                  <i className="fab fa-weixin"></i>
                </a>
              </OverlayTrigger>
            </li>
          </ul>
        </div>
      </div>
    );
  };
  render() {
    return (
      <div className="footer-wrapper">
        <ModalForm
          show={this.state.show}
          handleCloseModal={() => {
            this.setState({
              show: false
            });
          }}
        />
        <div className="footer-content row">
          <div className="footer-address col-md-3 offset-md-1">
            <p>{I18n.t("footer.idex")}</p>
            <p>info@idexltd.com</p>
            <p>{I18n.t("footer.address1")}</p>
            <p>{I18n.t("footer.address2")}</p>
            {this.socialMediaIcon()}
          </div>
          <div className="footer-logo col-md-2 offset-md-1">
            <img src={logoImage} alt=" " />
            <p>IDEX</p>
            {this.socialMediaIcon()}
          </div>
          <div className="footer-fn col-md-3 offset-md-1">
            <p>{I18n.t("footer.turnIdea")}</p>
            <div className="footer-collect">
              {I18n.t("footer.startCollecting")}
            </div>
            {/* <div className="footer-start-btn" onClick={this.handelShowModal}>{I18n.t('footer.getStarted')}</div> */}
            <Experiment ref="ab-more-info" name="Footer-test">
              {variantArr.map(val => {
                return (
                  <Variant name={val.name}>
                    <div
                      className="footer-start-btn"
                      onClick={this.handelShowModal}
                    >
                      {I18n.t(val.content)}
                    </div>
                  </Variant>
                );
              })}
            </Experiment>
          </div>
        </div>
        <div className="footer-copyright">
          &copy; 2019 - IDEX | All rights reserved
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
export default connect(mapStateToProps)(Footer);
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
emitter.addWinListener("Footer-test", function(experimentName, variantName) {
  ReactGA.event({
    category:variantName ,
    action: experimentName,
  });
  // Perform any necessary operations to send experiment data to server or analytics provider.
});