import React, { Component } from 'react'
import { I18n } from 'react-redux-i18n'
import groupIcon from '../../assets/images/icons/group.svg'
import statIcon from '../../assets/images/icons/stats.svg'
import profitIcon from '../../assets/images/icons/profit.svg'
import './benefits.scss'
import {connect} from 'react-redux';

class Benefits extends Component {
  state = {

  }

  render() {
    return (
      <div className="benefits-section">
        <div className="benefits-item">
          <div>
            <img src={groupIcon} />
          </div>
          <p>{I18n.t('benefits.employee')}</p>
          <span>{I18n.t('benefits.engage')}</span>
        </div>
        <div className="benefits-item">
          <div>
            <img src={statIcon} />
          </div>
          <p>{I18n.t('benefits.continuous')}</p>
          <span>{I18n.t('benefits.stakeholder')}</span>
        </div>
        <div className="benefits-item">
          <div>
            <img src={profitIcon} />
          </div>
          <p>{I18n.t('benefits.high')}</p>
          <span>{I18n.t('benefits.crowdsource')}</span>
        </div>
      </div>
    )
  }
}


function mapStateToProps(state){
  return{
    i18n: state.i18n
  }
}
export default connect(mapStateToProps)(Benefits);