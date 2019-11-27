import React, { Component } from 'react'
import { I18n } from 'react-redux-i18n'
import './Pricing.scss' 
import {connect} from 'react-redux'

class Pricing extends Component {
  state = {}

  render() {
    return (
      <div className="pricing-wrapper">
        <h2>Pricing & Plans</h2>
        <p>Choose the plan that best suits your needs.</p>
        <div class="container row">
          <div className="col-md-3">
            <div className="card">
              <div className="card-body">
                <h5 class="card-title">STARTER</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card">
              <div className="card-body">
                <h5 class="card-title">PROFESSIONAL</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card">
              <div className="card-body">
                <h5 class="card-title">BUSINESS</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card">
              <div className="card-body">
                <h5 class="card-title">ENTERPRISE</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              </div>
            </div>
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
export default connect(mapStateToProps)(Pricing);