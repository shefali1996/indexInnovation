import React, { Component } from 'react'
import { I18n } from 'react-redux-i18n'
import apertumImg from '../../assets/images/customer_logos/apertum.png'
import sportyImg from '../../assets/images/customer_logos/sporty.png'
import opennetImg from '../../assets/images/customer_logos/opennet.svg'
import quoteImg from '../../assets/images/icons/quote.svg'
import './TrustBy.scss'

export default class TrustBy extends Component {
  state = {}

  render() {
    return (
      <div className="trustby-wrapper">
        <h2>{I18n.t('trusty.title')}</h2>
        <div className="trusty-brand">
          <div className="trusty-brand-item apertum-img">
            <img src={apertumImg} />
          </div>
          <div className="trusty-brand-item opennet-img">
            <img src={opennetImg} />
          </div>
          <div className="trusty-brand-item sporty-img">
            <img src={sportyImg} />
          </div>
        </div>
        <div className="trusty-feedback">
          <div className="trusty-feedback-item">
            <div className="feedback-wrapper">
              <p>{I18n.t('trusty.identify')}</p>
            </div>
            <span>Sean Farmer, Position</span>
            <label>Apertum Online</label>
          </div>
          <div className="trusty-feedback-item">
            <div className="feedback-wrapper">
              <p>{I18n.t('trusty.beforeIDEX')}</p>
            </div>
            <span>Ben James, Position</span>
            <label>OpenNet</label>
          </div>
          <label className="feedback-quote"><img src={quoteImg} /></label>
        </div>
      </div>
    )
  }
}