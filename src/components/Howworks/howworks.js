import React, { Component } from 'react'
import { I18n } from 'react-redux-i18n'
import checkIcon from '../../assets/images/icons/check.svg'
import ideateEN from '../../assets/images/img/eng/1_en.svg'
import engageEN from '../../assets/images/img/eng/2_en.svg'
import evaluateEN from '../../assets/images/img/eng/3_en.svg'
import ideateZH from '../../assets/images/img/simplchinese/1_simch.svg'
import engageZH from '../../assets/images/img/simplchinese/2_simch.svg'
import evaluateZH from '../../assets/images/img/simplchinese/3_simch.svg'
import ideateTR from '../../assets/images/img/tradchinese/1_trch.svg'
import engageTR from '../../assets/images/img/tradchinese/2_trch.svg'
import evaluateTR from '../../assets/images/img/tradchinese/3_trch.svg'
import voteImg from '../../assets/images/icons/like.svg'
import './howworks.scss'

export default class Howworks extends Component {
  state = {}

  render() {
    return(
      <div className="howworks-container">
        <h2>{I18n.t('howworks.title')}</h2>
        <div className="howworks-item align-left item-ideate">
          <div className="howworks-text-wrapper">
            <img src={checkIcon} />
            <div className="howwork-item-textgroup">
              <p>{I18n.t('howworks.ideate')}</p>
              <span>{I18n.t('howworks.harness')}</span>
            </div>
          </div>
          <div className="sample-img-wrapper">
            <img src={ideateEN} />
          </div>
        </div>
        <div className="howworks-item align-right item-engage">
          <img src={voteImg} className="vote-up-img" />
          <div className="howworks-text-wrapper">
            <img src={checkIcon} />
            <div className="howwork-item-textgroup">
              <p>{I18n.t('howworks.engage')}</p>
              <span>{I18n.t('howworks.easysearch')}</span>
            </div>
          </div>
          <div className="sample-img-wrapper">
            <img src={engageEN} />
          </div>
        </div>
        <div className="howworks-item align-left item-evaluate">
          <div className="howworks-text-wrapper">
            <img src={checkIcon} />
            <div className="howwork-item-textgroup">
              <p>{I18n.t('howworks.evaluate')}</p>
              <span>{I18n.t('howworks.prioritize')}</span>
            </div>
          </div>
          <div className="sample-img-wrapper">
            <img src={evaluateEN} />
          </div>
        </div>
      </div>
    )
  }
}