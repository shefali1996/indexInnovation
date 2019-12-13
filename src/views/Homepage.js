import React, { Component } from 'react'
import Header from '../components/Header/header'
import 'bootstrap/dist/css/bootstrap.min.css'
import Footer from '../components/Footer/footer'
import {connect} from 'react-redux'
import '../assets/css/all.css'
import HeadSection from '../components/HeadSection'
import Benefits from '../components/Benefits/benefits'
import Howworks from '../components/Howworks/howworks'
import TrustBy from '../components/TrustBy/Trustby'
import Resources from '../components/Resources/Resources'

class Homepage extends Component {
  state = {
  }

  render() {
    const {locale}=this.props.i18n
    return (
      <div>
        <Header />
        <HeadSection locale={locale}/>
        <Benefits />
        <Howworks />
        <TrustBy />
        <Resources />
        <Footer />
      </div>
    )
  }
}
 const mapStateToProps=(state)=>{
   return {
    i18n : state.i18n
   }
 }
 export default connect(mapStateToProps)(Homepage);