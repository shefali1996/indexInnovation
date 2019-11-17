import React, { Component } from 'react'
import { I18n } from 'react-redux-i18n'
import bgImage from '../../assets/images/background/Circles.svg'
import notebookImage from '../../assets/images/background/Notebook.svg'
import './index.scss'

export default class HeadSection extends Component {
  state = {

  }

  render() {
    return (
      <div className="head-section">
        <img className="head-circle-img" src={bgImage} />
        <img className="head-notebook-img" src={notebookImage} />
        <div className="linear-bg"></div>
        <h2>{I18n.t('headSection.moveForward')}</h2>
        <p>{I18n.t('headSection.transform')}</p>
        <div className="exp-idex-btn">{I18n.t('headSection.expIDEX')}</div>
        <div className="idex-player">
          <div className="player-btn">
            <i class="fas fa-play"></i>
          </div>
        </div>
      </div>
    )
  }
}
