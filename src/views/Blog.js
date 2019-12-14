import React, { Component } from 'react'
import Header from '../components/Header/header'
import 'bootstrap/dist/css/bootstrap.min.css'
import Footer from '../components/Footer/footer'

import '../assets/css/all.css'
import Blog from '../components/Blog/Blog'

export default class BlogPage extends Component {
  
  componentDidMount(){
    window.scrollTo(0,0)
  }
  render() {
    return (
      <div>
        <Header />
        <Blog />
        <Footer />
      </div>
    )
  }
}