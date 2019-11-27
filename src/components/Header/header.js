import React, { Component } from 'react'
import ReactFlagsSelect from 'react-flags-select'
import logoImg from '../../assets/images/logo.png'
import { I18n , setLocale} from 'react-redux-i18n'
import './header.scss'
import 'react-flags-select/css/react-flags-select.css'
import 'react-flags-select/scss/react-flags-select.scss'
import {connect} from 'react-redux';

class Header extends Component {
  state = {

  }
  render() {
    console.log(this.props.i18n.locale);
    return (
      <div className="header-wrapper">
        <div>
          <div className="header-logo-wrapper">
            <img src={logoImg} alt="IDEX Logo" />
          </div>
        </div>
        <div>
          <div className="menu-group">
            <a href="#home" className="menu-item active">{I18n.t('header.home')}</a>
            <a href="#howitworks" className="menu-item">{I18n.t('header.howitworks')}</a>
            <a href="#testimonials" className="menu-item">{I18n.t('header.testimonials')}</a>
            <a href="#blog" className="menu-item">{I18n.t('header.blog')}</a>
            <a href="#contactus" className="menu-item">{I18n.t('header.contactus')}</a>
            <a href="#pricing" className="menu-item">{I18n.t('header.pricing')}</a>
          </div>
        </div>
        <div>
          
          <div className="lang-section">
            <ReactFlagsSelect countries={["GB", "CN", "HK"]}
             defaultCountry="GB"
              customLabels={{"GB": "English","CN": "简体中文","HK": "繁體中文"}}
              onSelect={val => { this.props.dispatch(setLocale(val)) }}
             />
          </div>
        </div>
        <div>
          <div className="trial-btn">
            {I18n.t('header.tryFree')}
          </div>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state){
  return {
    i18n : state.i18n
  }
}
export default connect(mapStateToProps)(Header);