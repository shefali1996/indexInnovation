import React, { Component } from 'react'
import Header from '../components/Header/header'
import 'bootstrap/dist/css/bootstrap.min.css'
import Footer from '../components/Footer/footer'

import '../assets/css/all.css'
import HeadSection from '../components/HeadSection'
import Benefits from '../components/Benefits/benefits'

export default class Homepage extends Component {
  state = {

  }

  render() {
    return (
      <div>
        <Header />
        <HeadSection />
        <Benefits />
        <Footer />
      </div>
    )
  }
}