import React, { Component } from 'react'
import { I18n } from 'react-redux-i18n'
import checkIcon from '../../assets/images/icons/check-feature.svg'

import './Pricing.scss' 
import {connect} from 'react-redux'
import Collapsible from 'react-collapsible';

class Pricing extends Component {
  state = {}

  render() {
    return (
      <div className="pricing-wrapper">
        <h2>{I18n.t('pricing.plans_pricing')}</h2>
        <p>{I18n.t('pricing.choose_plan')}</p>
        <div className="container pricing-plans">
          <div className="row">
            <div className="col-md-3">
              <div className="pricing-card">
                <h5 className="pricing-card-title">{I18n.t('pricing.starter')}</h5>
                <div  className="pricing-details">
                  <span className="price">${I18n.t('pricing.99')}</span>
                  <span className="pricing-unit">{I18n.t('pricing.usd')} / {I18n.t('pricing.month')}</span>
                </div>
                <ul className="plan-features">
                  <li><img src={checkIcon} alt="..." />{I18n.t('pricing.unlimited_members')}</li>
                  <li><img src={checkIcon} alt="..." />{I18n.t('pricing.upto_xxx')}</li>
                  <li><img src={checkIcon} alt="..." />{I18n.t('pricing.xx_teams')}</li>
                  <li><img src={checkIcon} alt="..." />{I18n.t('pricing.your_own_workspace')}</li>
                  <li><img src={checkIcon} alt="..." />{I18n.t('pricing.collect_analyse')}</li>
                  <li><img src={checkIcon} alt="..." />{I18n.t('pricing.performance_analytics')}</li>
                  <li className="feature-na"><img src={checkIcon} alt="..." />{I18n.t('pricing.advanced_audience')}</li>
                  <li className="feature-na"><img src={checkIcon} alt="..." />{I18n.t('pricing.custom_branding')}</li>
                  <li className="feature-na"><img src={checkIcon} alt="..." />{I18n.t('pricing.single_sign_on')}</li>
                  <li className="feature-na"><img src={checkIcon} alt="..." />{I18n.t('pricing.dedicated_manager')}</li>
                  <li className="feature-na"><img src={checkIcon} alt="..." />{I18n.t('pricing.sla_tech')}</li>
                  <button>{I18n.t('pricing.try_for_free')}</button>
                </ul>  
              </div>  
            </div>
            <div className="col-md-3">
              <div className="pricing-card most-popular">
              <h5 className="pricing-card-title">{I18n.t('pricing.professional')}</h5>
                <div  className="pricing-details">
                  <span className="price">${I18n.t('pricing.499')}</span>
                  <span className="pricing-unit">{I18n.t('pricing.usd')} / {I18n.t('pricing.month')}</span>
                </div>
                <ul className="plan-features">
                  <li><img src={checkIcon} alt="..." />{I18n.t('pricing.unlimited_members')}</li>
                  <li><img src={checkIcon} alt="..." />{I18n.t('pricing.upto_xxx')}</li>
                  <li><img src={checkIcon} alt="..." />{I18n.t('pricing.xx_teams')}</li>
                  <li><img src={checkIcon} alt="..." />{I18n.t('pricing.your_own_workspace')}</li>
                  <li><img src={checkIcon} alt="..." />{I18n.t('pricing.collect_analyse')}</li>
                  <li><img src={checkIcon} alt="..." />{I18n.t('pricing.performance_analytics')}</li>
                  <li><img src={checkIcon} alt="..." />{I18n.t('pricing.advanced_audience')}</li>
                  <li><img src={checkIcon} alt="..." />{I18n.t('pricing.custom_branding')}</li>
                  <li className="feature-na"><img src={checkIcon} alt="..." />{I18n.t('pricing.single_sign_on')}</li>
                  <li className="feature-na"><img src={checkIcon} alt="..." />{I18n.t('pricing.dedicated_manager')}</li>
                  <li className="feature-na"><img src={checkIcon} alt="..." />{I18n.t('pricing.sla_tech')}</li>
                  <button className="inverse">{I18n.t('pricing.try_for_free')}</button>
                </ul> 
              </div>
            </div>
            <div className="col-md-3">
              <div className="pricing-card">
                <h5 className="pricing-card-title">{I18n.t('pricing.business')}</h5>
                <div  className="pricing-details">
                  <span className="price">${I18n.t('pricing.999')}</span>
                  <span className="pricing-unit">{I18n.t('pricing.usd')} / {I18n.t('pricing.month')}</span>
                </div>
                <ul className="plan-features">
                  <li><img src={checkIcon} alt="..." />{I18n.t('pricing.unlimited_members')}</li>
                  <li><img src={checkIcon} alt="..." />{I18n.t('pricing.upto_xxx')}</li>
                  <li><img src={checkIcon} alt="..." />{I18n.t('pricing.xx_teams')}</li>
                  <li><img src={checkIcon} alt="..." />{I18n.t('pricing.your_own_workspace')}</li>
                  <li><img src={checkIcon} alt="..." />{I18n.t('pricing.collect_analyse')}</li>
                  <li><img src={checkIcon} alt="..." />{I18n.t('pricing.performance_analytics')}</li>
                  <li><img src={checkIcon} alt="..." />{I18n.t('pricing.advanced_audience')}</li>
                  <li><img src={checkIcon} alt="..." />{I18n.t('pricing.custom_branding')}</li>
                  <li><img src={checkIcon} alt="..." />{I18n.t('pricing.single_sign_on')}</li>
                  <li className="feature-na"><img src={checkIcon} alt="..." />{I18n.t('pricing.dedicated_manager')}</li>
                  <li className="feature-na"><img src={checkIcon} alt="..." />{I18n.t('pricing.sla_tech')}</li>
                  <button>{I18n.t('pricing.try_for_free')}</button>
                </ul>  
              </div>  
            </div>
            <div className="col-md-3">
              <div className="pricing-card">
                <h5 className="pricing-card-title">{I18n.t('pricing.enterprise')}</h5>
                <div  className="pricing-details-enterprise">
                  <span>{I18n.t('pricing.for_custom')} <span>{I18n.t('pricing.contact_us')}</span></span>
                </div>
                <ul className="plan-features">
                  <li><img src={checkIcon} alt="..." />{I18n.t('pricing.unlimited_members')}</li>
                  <li><img src={checkIcon} alt="..." />{I18n.t('pricing.upto_xxx')}</li>
                  <li><img src={checkIcon} alt="..." />{I18n.t('pricing.xx_teams')}</li>
                  <li><img src={checkIcon} alt="..." />{I18n.t('pricing.your_own_workspace')}</li>
                  <li><img src={checkIcon} alt="..." />{I18n.t('pricing.collect_analyse')}</li>
                  <li><img src={checkIcon} alt="..." />{I18n.t('pricing.performance_analytics')}</li>
                  <li><img src={checkIcon} alt="..." />{I18n.t('pricing.advanced_audience')}</li>
                  <li><img src={checkIcon} alt="..." />{I18n.t('pricing.custom_branding')}</li>
                  <li><img src={checkIcon} alt="..." />{I18n.t('pricing.single_sign_on')}</li>
                  <li><img src={checkIcon} alt="..." />{I18n.t('pricing.dedicated_manager')}</li>
                  <li><img src={checkIcon} alt="..." />{I18n.t('pricing.sla_tech')}</li>
                  <button>{I18n.t('pricing.try_for_free')}</button>
                </ul>  
              </div>  
            </div>
           
          </div>  
        </div>
        
        <div className="faq-wrapper">
          <h2 className="faq_heading">{I18n.t('pricing.faq')}</h2>
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <div className="faq">
                  
                  <Collapsible trigger={I18n.t('pricing.can_i_cancel')}>
                    <p>{I18n.t('pricing.our_goal')}</p>  
                  </Collapsible>
                </div>
              </div>
              <div className="col-md-6">
                <div className="faq">
                  <Collapsible trigger={I18n.t('pricing.payment_options')}>
                    <p>{I18n.t('pricing.payments_made_via')}</p>  
                  </Collapsible>
                </div>
              </div>
            </div>
            <div className="row mt-3">
              <div className="col-md-6">
                <div className="faq">
                  <Collapsible trigger={I18n.t('pricing.data_protection')}>
                    <p>{I18n.t('pricing.serious_secutiry')}</p>  
                  </Collapsible>
                </div>
              </div>
              <div className="col-md-6">
                <div className="faq">
                  <Collapsible trigger={I18n.t('pricing.more_ides')}>
                    <p>{I18n.t('pricing.dont_worry')}</p>  
                  </Collapsible>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="stay_in_touch_div">
                <h3 className="stay_in_touch">{I18n.t('pricing.stay_in_touch')}</h3> 
                <button className="btn_contact">{I18n.t('pricing.contact_us')}</button>
              </div>
            </div>
          </div>
        </div>  
      </div>  
    )
  }
}

// 
// ,
// ,
function mapStateToProps(state){
  return {
    i18n : state.i18n
  }
}
export default connect(mapStateToProps)(Pricing);