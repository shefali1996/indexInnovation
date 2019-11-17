import React, { Component } from 'react'
import { I18n, setLocale } from 'react-redux-i18n'
import logoImage from '../../assets/images/footer/logo.png'

import './footer.scss'

export default class Footer extends Component {
  state = {

  }

  render() {
    return (
      <div className="footer-wrapper">
        <div className="footer-content row">
          <div className="footer-address col-md-3 offset-md-1">
            <p>{I18n.t('footer.idex')}</p>
            <p>info@idexltd.com</p>
            <p>{I18n.t('footer.address1')}</p>
            <p>{I18n.t('footer.address2')}</p>
          </div>
          <div className="footer-logo col-md-2 offset-md-1">
            <img src={logoImage} />
            <p>IDEX</p>
            <a href="/blog" >{I18n.t('footer.blog')}</a>
            <div className="row footer-social">
              <ul align="left">
                <li><a class="fab fa-facebook-f" href="https://www.facebook.com/idexinnovation" target="_blank"></a></li>
                <li><a class="fab fa-linkedin-in" href="https://www.linkedin.com/company/idex-innovation" target="_blank"></a></li>
                <li><a class="fab fa-twitter" href="https://twitter.com/idex_ideas" target="_blank"></a></li>
                <li><a class="fab fa-weixin" href="https://wechat.com" target="_blank"></a></li>
              </ul>
            </div>
          </div>
          <div className="footer-fn col-md-3 offset-md-1">
            <p>{I18n.t('footer.turnIdea')}</p>
            <div className="footer-collect">{I18n.t('footer.startCollecting')}</div>
            <div className="footer-start-btn">{I18n.t('footer.getStarted')}</div>
          </div>
        </div>
        <div className="footer-copyright">
          &copy; 2019 - IDEX | All rights reserved
        </div>
      </div>
    )
  }
}