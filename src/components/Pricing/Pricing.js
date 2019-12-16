import React, { Component } from 'react'
import { I18n } from 'react-redux-i18n'
import checkIcon from '../../assets/images/icons/check-feature.svg'

import './Pricing.scss' 
import {connect} from 'react-redux'
import Collapsible from 'react-collapsible';
import ContacUsModal from "./ContactUsModal"
import ModalForm from "../ModalForm/ModalForm"
class Pricing extends Component {
  state = {
  show:false,
  subject:"",
  showtryModal:false
  }
  handelShowModal=(sub)=>{ 
    let subject =""
    if(sub==="plan"){
      subject='Plans & Pricing Enquiry'
    }   else{
      subject=" Enterprise Pricing Enquiry "
    }
    this.setState(prevState => ({
      show: true,
      subject
    }))
  }
  handeShowTryModal=()=>{
this.setState({
  showtryModal:true
})
  }
  render() {        
    return (
      <div className="pricing-wrapper">
      <ModalForm show={this.state.showtryModal}
      handleCloseModal={() => {
        this.setState({
          showtryModal: false
        })
      }}
      />
        <h2>{I18n.t('pricing.price1.plans_pricing')}</h2>
        <p>{I18n.t('pricing.price1.choose_plan')}</p>
        <div className="container pricing-plans">
          <div className="row">
            <div className="col-md-3">
              <div className="pricing-card">
                <h5 className="pricing-card-title">{I18n.t('pricing.price1.starter')}</h5>
                <div  className="pricing-details">
                  <span className="price">${I18n.t('pricing.price1.99')}</span>
                  <span className="pricing-unit">{I18n.t('pricing.price1.usd')} / {I18n.t('pricing.price1.month')}</span>
                </div>
                <ul className="plan-features">
                  <li><img src={checkIcon} alt="..." />{I18n.t('pricing.price1.unlimited_members')}</li>
                  <li><img src={checkIcon} alt="..." />{I18n.t('pricing.price1.upto_xxx')}</li>
                  <li><img src={checkIcon} alt="..." />{I18n.t('pricing.price1.xx_teams')}</li>
                  <li><img src={checkIcon} alt="..." />{I18n.t('pricing.price1.your_own_workspace')}</li>
                  <li><img src={checkIcon} alt="..." />{I18n.t('pricing.price1.collect_analyse')}</li>
                  <li><img src={checkIcon} alt="..." />{I18n.t('pricing.price1.performance_analytics')}</li>
                  <li className="feature-na"><img src={checkIcon} alt="..." />{I18n.t('pricing.price1.advanced_audience')}</li>
                  <li className="feature-na"><img src={checkIcon} alt="..." />{I18n.t('pricing.price1.custom_branding')}</li>
                  <li className="feature-na"><img src={checkIcon} alt="..." />{I18n.t('pricing.price1.single_sign_on')}</li>
                  <li className="feature-na"><img src={checkIcon} alt="..." />{I18n.t('pricing.price1.dedicated_manager')}</li>
                  <li className="feature-na"><img src={checkIcon} alt="..." />{I18n.t('pricing.price1.sla_tech')}</li>
                  <button onClick={this.handeShowTryModal}>{I18n.t('pricing.price1.try_for_free')}</button>
                </ul>  
              </div>  
            </div>
            <div className="col-md-3">
              <div className="pricing-card most-popular">
              <div className="popular"><span>
              {I18n.t('pricing.price2.most_popular')}
                </span></div>

              <h5 className="pricing-card-title">{I18n.t('pricing.price2.professional')}</h5>
                <div  className="pricing-details">
                  <span className="price">${I18n.t('pricing.price2.499')}</span>
                  <span className="pricing-unit">{I18n.t('pricing.price2.usd')} / {I18n.t('pricing.price2.month')}</span>
                </div>
                <ul className="plan-features">
                  <li><img src={checkIcon} alt="..." />{I18n.t('pricing.price2.unlimited_members')}</li>
                  <li><img src={checkIcon} alt="..." />{I18n.t('pricing.price2.upto_xxx')}</li>
                  <li><img src={checkIcon} alt="..." />{I18n.t('pricing.price2.xx_teams')}</li>
                  <li><img src={checkIcon} alt="..." />{I18n.t('pricing.price2.your_own_workspace')}</li>
                  <li><img src={checkIcon} alt="..." />{I18n.t('pricing.price2.collect_analyse')}</li>
                  <li><img src={checkIcon} alt="..." />{I18n.t('pricing.price2.performance_analytics')}</li>
                  <li><img src={checkIcon} alt="..." />{I18n.t('pricing.price2.advanced_audience')}</li>
                  <li><img src={checkIcon} alt="..." />{I18n.t('pricing.price2.custom_branding')}</li>
                  <li className="feature-na"><img src={checkIcon} alt="..." />{I18n.t('pricing.price2.single_sign_on')}</li>
                  <li className="feature-na"><img src={checkIcon} alt="..." />{I18n.t('pricing.price2.dedicated_manager')}</li>
                  <li className="feature-na"><img src={checkIcon} alt="..." />{I18n.t('pricing.price2.sla_tech')}</li>
                  <button className="inverse" onClick={this.handeShowTryModal}>{I18n.t('pricing.price2.try_for_free')}</button>
                </ul> 
              </div>
            </div>
            <div className="col-md-3">
              <div className="pricing-card">
                <h5 className="pricing-card-title">{I18n.t('pricing.price3.business')}</h5>
                <div  className="pricing-details">
                  <span className="price">${I18n.t('pricing.price3.999')}</span>
                  <span className="pricing-unit">{I18n.t('pricing.price3.usd')} / {I18n.t('pricing.price3.month')}</span>
                </div>
                <ul className="plan-features">
                  <li><img src={checkIcon} alt="..." />{I18n.t('pricing.price3.unlimited_members')}</li>
                  <li><img src={checkIcon} alt="..." />{I18n.t('pricing.price3.upto_xxx')}</li>
                  <li><img src={checkIcon} alt="..." />{I18n.t('pricing.price3.xx_teams')}</li>
                  <li><img src={checkIcon} alt="..." />{I18n.t('pricing.price3.your_own_workspace')}</li>
                  <li><img src={checkIcon} alt="..." />{I18n.t('pricing.price3.collect_analyse')}</li>
                  <li><img src={checkIcon} alt="..." />{I18n.t('pricing.price3.performance_analytics')}</li>
                  <li><img src={checkIcon} alt="..." />{I18n.t('pricing.price3.advanced_audience')}</li>
                  <li><img src={checkIcon} alt="..." />{I18n.t('pricing.price3.custom_branding')}</li>
                  <li><img src={checkIcon} alt="..." />{I18n.t('pricing.price3.single_sign_on')}</li>
                  <li className="feature-na"><img src={checkIcon} alt="..." />{I18n.t('pricing.price3.dedicated_manager')}</li>
                  <li className="feature-na"><img src={checkIcon} alt="..." />{I18n.t('pricing.price3.sla_tech')}</li>
                  <button onClick={this.handeShowTryModal}>{I18n.t('pricing.price3.try_for_free')}</button>
                </ul>  
              </div>  
            </div>
            <div className="col-md-3">
              <div className="pricing-card">
                <h5 className="pricing-card-title">{I18n.t('pricing.price4.enterprise')}</h5>
                <div  className="pricing-details-enterprise">
                  <span>{I18n.t('pricing.price4.for_custom')} <span>{I18n.t('pricing.price4.contact_us')}</span></span>
                </div>
                <ul className="plan-features">
                  <li><img src={checkIcon} alt="..." />{I18n.t('pricing.price4.unlimited_members')}</li>
                  <li><img src={checkIcon} alt="..." />{I18n.t('pricing.price4.upto_xxx')}</li>
                  <li><img src={checkIcon} alt="..." />{I18n.t('pricing.price4.xx_teams')}</li>
                  <li><img src={checkIcon} alt="..." />{I18n.t('pricing.price4.your_own_workspace')}</li>
                  <li><img src={checkIcon} alt="..." />{I18n.t('pricing.price4.collect_analyse')}</li>
                  <li><img src={checkIcon} alt="..." />{I18n.t('pricing.price4.performance_analytics')}</li>
                  <li><img src={checkIcon} alt="..." />{I18n.t('pricing.price4.advanced_audience')}</li>
                  <li><img src={checkIcon} alt="..." />{I18n.t('pricing.price4.custom_branding')}</li>
                  <li><img src={checkIcon} alt="..." />{I18n.t('pricing.price4.single_sign_on')}</li>
                  <li><img src={checkIcon} alt="..." />{I18n.t('pricing.price4.dedicated_manager')}</li>
                  <li><img src={checkIcon} alt="..." />{I18n.t('pricing.price4.sla_tech')}</li>
                  <button onClick={this.handelShowModal}>{I18n.t('pricing.price4.contact_us')}</button>
                </ul>  
              </div>  
            </div>
           
          </div>  
        </div>
        
        <div className="faq-wrapper">
          <h2 className="faq_heading">{I18n.t('pricing.price4.faq')}</h2>
          <div className="container">
            <div className="row">
              <div className="col-md-6 col-xs-12">
                <div className="faq">
                  
                  <Collapsible trigger={I18n.t('pricing.price4.can_i_cancel')}>
                    <p>{I18n.t('pricing.price4.our_goal')}</p>  
                  </Collapsible>
                </div>
              </div>
              <div className="col-md-6">
                <div className="faq">
                  <Collapsible trigger={I18n.t('pricing.price4.payment_options')}>
                    <p>{I18n.t('pricing.price4.payments_made_via')}</p>  
                  </Collapsible>
                </div>
              </div>
            </div>
            <div className="row mt-3">
              <div className="col-md-6">
                <div className="faq">
                  <Collapsible trigger={I18n.t('pricing.price4.data_protection')}>
                    <p>{I18n.t('pricing.price4.serious_secutiry')}</p>  
                  </Collapsible>
                </div>
              </div>
              <div className="col-md-6">
                <div className="faq">
                  <Collapsible trigger={I18n.t('pricing.price4.more_ides')}>
                    <p>{I18n.t('pricing.price4.dont_worry')}</p>  
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
                <h3 className="stay_in_touch">{I18n.t('pricing.price4.stay_in_touch')}</h3> 
              

                  <ContacUsModal show={this.state.show}
                  subject={this.state.subject}
                    handleCloseModal={() => {
                      this.setState({
                        show: false
                      })
                    }}/>
                
                <button className="btn_contact"  onClick={()=>this.handelShowModal('plan')}>{I18n.t('pricing.price4.contact_us')}</button>
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