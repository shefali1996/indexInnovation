import React, { Component } from "react";
import ReactFlagsSelect from "react-flags-select";
import logoImg from "../../assets/images/logo.png";
import { I18n, setLocale } from "react-redux-i18n";
import { Link } from "react-router";
import "./header.scss";
import "react-flags-select/css/react-flags-select.css";
import "react-flags-select/scss/react-flags-select.scss";
import { connect } from "react-redux";
// import ModalForm from '../ModalForm/ModalForm'

class Header extends Component {
  state = {
    mobileHeader: false
  };
  handleClick = () => {
    this.setState(prevState => ({
      mobileHeader: !prevState.mobileHeader
    }));
  };
  render() {
    const { mobileHeader } = this.state;
    return (
      <>
        <div className={(!mobileHeader && "hide-header ") + " header-wrapper"}>
          <div className="header-logo-wrapper">
            <i
              className="fa fa-times-thin fa-2x"
              aria-hidden="true"
              onClick={this.handleClick}
            ></i>

            <img src={logoImg} alt="IDEX Logo" />
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
            <div className="trial-btn">{I18n.t("header.tryFree")}</div>
          </div>
        </div>
          <div
            className={
              (mobileHeader && "hide-header ") + " mobile-small-header"
            }
          >
            <div className="header-logo-wrapper">
              <i
                class="fa fa-bars"
                aria-hidden="true"
                onClick={this.handleClick}
              ></i>
              <img src={logoImg} alt="IDEX Logo" />
            </div>
            <div className="trial-btn-mobile">{I18n.t("header.tryFree")}</div>
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
export default connect(mapStateToProps)(Header);
