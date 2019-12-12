import React, { Component } from 'react'
import { I18n } from 'react-redux-i18n'
import apertumImg from '../../assets/images/customer_logos/apertum.png'
import sportyImg from '../../assets/images/customer_logos/sporty.png'
import opennetImg from '../../assets/images/customer_logos/opennet.svg'
import quoteImg from '../../assets/images/icons/quote.svg'
import './TrustBy.scss'
import {connect} from 'react-redux';
import Apertum_logo from "../../assets/images/Apertum.svg"
import OpenNet_logo from "../../assets/images/Opennet.svg"

class TrustBy extends Component {
  state = {}

  render() {
    return (
      <div className="trustby-wrapper">
        <h2>{I18n.t('trusty.title')}</h2>
        <div className="trusty-brand">
          <div className="trusty-brand-item apertum-img">
            <img src={apertumImg} alt="Apertum" />
          </div>
          <div className="trusty-brand-item opennet-img">
            <img src={opennetImg} alt="Open Net"/>
          </div>
          <div className="trusty-brand-item sporty-img">
            <img src={sportyImg} alt="Sporty"/>
          </div>
        </div>
        <div className="trusty-feedback">
          <div className="trusty-feedback-item">
            <div className="feedback-wrapper">
              <p>{I18n.t('trusty.identify')}</p>
            </div>
            <span>Sean Farmer, Position</span>
            <label><img src={Apertum_logo}/></label>
            <label className="feedback-quote"><img src={quoteImg} alt="..." /></label>

          </div>
          <div className="trusty-feedback-item">
            <div className="feedback-wrapper">
              <p>{I18n.t('trusty.beforeIDEX')}</p>
            </div>
            <span>Ben James, Position</span>
            <label><img src={OpenNet_logo}/></label>
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
export default connect(mapStateToProps)(TrustBy);