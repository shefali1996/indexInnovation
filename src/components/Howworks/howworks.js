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
import {connect} from 'react-redux';

const ideateImg = [];
ideateImg['GB'] = ideateEN;
ideateImg['CN'] = ideateZH;
ideateImg['HK'] = ideateTR;

const engageImg = [];
engageImg['GB'] = engageEN;
engageImg['CN'] = engageZH;
engageImg['HK'] = engageTR;

const evaluateImg = [];
evaluateImg['GB'] = evaluateEN;
evaluateImg['CN'] = evaluateZH;
evaluateImg['HK'] = evaluateTR;


class Howworks extends Component {
  state = {}

  render() {
    return(
      <div className="howworks-container">
        <h2>{I18n.t('howworks.title')}</h2>
        <div className="howworks-item align-left item-ideate">
          <div className="howworks-text-wrapper">
            <div className="howwork-item-textgroup">
            <div className="description">
            <img src={checkIcon} alt="Right Mark" />
              <p>{I18n.t('howworks.ideate')}</p>
              </div>
              <div className="content">{I18n.t('howworks.harness')}</div>
            </div>
          </div>
          <div className="sample-img-wrapper">
            <img src={ideateImg[this.props.i18n.locale]} alt="" />
          </div>
        </div>

        <div className="howworks-item align-right item-engage">
          <img src={voteImg} className="vote-up-img" alt="Engage" />
          <div className="howworks-text-wrapper">
            <div className="howwork-item-textgroup">
            <div className="description">
            <img src={checkIcon} alt="Right Mark" />
              <p>{I18n.t('howworks.engage')}</p>
              </div>
              <div className="content">{I18n.t('howworks.easysearch')}</div>
            </div>
          </div>
          <div className="sample-img-wrapper">
            <img src={engageImg[this.props.i18n.locale]} alt="Engage" />
          </div>
        </div>

        <div className="howworks-item align-left item-evaluate">
          <div className="howworks-text-wrapper">
            <div className="howwork-item-textgroup">
            <div className="description">
            <img src={checkIcon} alt="Right Mark" />
              <p>{I18n.t('howworks.evaluate')}</p>
              </div>
              <div className="content">{I18n.t('howworks.prioritize')}</div>
            </div>
          </div>
          <div className="sample-img-wrapper">
            <img src={evaluateImg[this.props.i18n.locale]}  alt="Evaluate" />
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
export default connect(mapStateToProps)(Howworks);