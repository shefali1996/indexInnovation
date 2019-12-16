import React, { Component } from "react";
import ReactFlagsSelect from "react-flags-select";
import logoImg from "../../assets/images/logo.png";
import { I18n, setLocale } from "react-redux-i18n";
import { Link, withRouter } from "react-router-dom";
import "./header.scss";
import "react-flags-select/css/react-flags-select.css";
import "react-flags-select/scss/react-flags-select.scss";
import { connect } from "react-redux";
import ModalForm from "../ModalForm/ModalForm";
import {
  Experiment,
  Variant,
  emitter,
  experimentDebugger
} from "@marvelapp/react-ab-test";
experimentDebugger.enable();
emitter.defineVariants('Test-Addl-Info',['tryFree','expIDEX','getStarted'],  [33,33,33])
class Header extends Component {
  state = {
    mobileHeader: false,
    show: false
  };
  handleClick = () => {
    this.setState(prevState => ({
      mobileHeader: !prevState.mobileHeader
    }));
  };
  onclick (e) {
    console.log(emitter.getActiveVariant("Test-Addl-Info'"),'dddddddddddddd')
    emitter.emitWin('Test-Addl-Info')

  }
  handelShowModal = () => {
    this.onclick()
    this.setState(prevState => ({
      show: true
    }));
  };
  handleLogoClick = () => {
    console.log('44444444444');
    
    if (window.location.pathname === "/") {
      window.scrollTo(0, 0);
    } else {
      this.props.history.push("/");
    }
  };
  render() {
    const { mobileHeader } = this.state;
    console.log(111111111111111,emitter.getActiveVariant("Test-Addl-Info'"),'dddddddddddddd')
    return (
      <>
        <ModalForm
          show={this.state.show}
          handleCloseModal={() => {
            this.setState({
              show: false
            });
          }}
        />
        <div className={(!mobileHeader && "hide-header ") + " header-wrapper"}>
          <div className="header-logo-wrapper">
            <i
              className="fa fa-times-thin fa-2x"
              aria-hidden="true"
              onClick={this.handleClick}
            ></i>

            <img src={logoImg} onClick={this.handleLogoClick} alt="IDEX Logo" />
          </div>
          <div className="menu">
            <div className="menu-group">
              <Link
                to="/"
                className={
                  (window.location.pathname === "/" && "active ") + " menu-item"
                }
              >
                {I18n.t("header.home")}
              </Link>

              <Link
                to="/blog"
                className={
                  (window.location.pathname === "/blog" && "active ") +
                  " menu-item"
                }
              >
                {I18n.t("header.blog")}
              </Link>
              <Link
                to="/pricing"
                className={
                  (window.location.pathname === "/pricing" && "active ") +
                  " menu-item"
                }
              >
                {I18n.t("header.pricing")}
              </Link>
            </div>
            <div className="lang-section">
              <ReactFlagsSelect
                countries={["GB", "CN", "HK"]}
                defaultCountry="GB"
                customLabels={{ GB: "English", CN: "简体中文", HK: "繁體中文" }}
                onSelect={val => {
                  this.props.dispatch(setLocale(val));
                }}
              />
            </div>
            <Experiment ref="ab-more-info" name="Test-Addl-Info">
              <Variant name="tryFree">
                <div className="trial-btn" onClick={this.handelShowModal}>
                  {I18n.t("header.tryFree")}
                </div>
              </Variant>
              <Variant name="expIDEX">
                <div className="trial-btn" onClick={this.handelShowModal}>
                  {I18n.t("headSection.expIDEX")}
                </div>
              </Variant>
              <Variant name="getStarted">
                <div className="trial-btn" onClick={this.handelShowModal}>
                  {I18n.t("footer.getStarted")}
                </div>
              </Variant>
            </Experiment>
          </div>
        </div>
        <div
          className={(mobileHeader && "hide-header ") + " mobile-small-header"}
        >
          <div className="header-logo-wrapper">
            <i
              class="fa fa-bars"
              aria-hidden="true"
              onClick={this.handleClick}
            ></i>
            <img src={logoImg} alt="IDEX Logo" />
          </div>
          <div className="trial-btn-mobile" onClick={this.handelShowModal}>
            {I18n.t("header.tryFree")}
          </div>
        </div>
      </>
    );
  }
}

function mapStateToProps(state) {
  return {
    i18n: state.i18n
  };
}
export default withRouter(connect(mapStateToProps)(Header));

// We want to add a 'play listener to record every instance a user sees a variant.
emitter.addPlayListener("Test-Addl-Info", function(experimentName, variantName) {
  console.log(`Displaying experiment ${experimentName} variant   ${variantName}`);
  // Perform any necessary operations to send experiment data to server or analytics provider.
  });
  // The win listener is only called when the Win condition is met, in this instance, when the Learn More button is pressed.
  emitter.addWinListener("Test-Addl-Info", function(experimentName, variantName) {
    console.log(`Variant ${variantName} of experiment ${experimentName} was clicked`);
    // Perform any necessary operations to send experiment data to server or analytics provider.
  });