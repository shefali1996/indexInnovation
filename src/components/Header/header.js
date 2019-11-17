import React, { Component } from 'react'
import ReactFlagsSelect from 'react-flags-select'
import logoImg from '../../assets/images/logo.png'
import { I18n, setLocale } from 'react-redux-i18n'

import './header.scss'
import 'react-flags-select/css/react-flags-select.css'
import 'react-flags-select/scss/react-flags-select.scss'

export default class Header extends Component {
  state = {

  }

  render() {
    return (
      <div className="header-wrapper">
        <div>
          <div className="header-logo-wrapper">
            <img src={logoImg} />
          </div>
        </div>
        <div>
          <div className="menu-group">
            <a href="#home" className="menu-item active">{I18n.t('header.home')}</a>
            <a href="#home" className="menu-item">{I18n.t('header.blog')}</a>
            <a href="#home" className="menu-item">{I18n.t('header.pricing')}</a>
          </div>
        </div>
        <div>
          <div className="lang-section">
            <ReactFlagsSelect countries={["GB", "CN", "HK"]} defaultCountry="GB" customLabels={{"GB": "English","CN": "简体中文","HK": "繁體中文"}} />
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