import React, { Component } from 'react'
import Header from '../components/Header/header'
import 'bootstrap/dist/css/bootstrap.min.css'
import Footer from '../components/Footer/footer'

import '../assets/css/all.css'
import Pricing from '../components/Pricing/Pricing'

export default class PricingPage extends Component {
  state = {

  }

  render() {
    return (
      <div>
        <Header />
        <Pricing />
        <Footer />
      </div>
    )
  }
}