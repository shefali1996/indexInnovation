import React, { Component } from 'react'
import { I18n } from 'react-redux-i18n'
import ContactForm from '../ContactForm/ContactForm'
import './Resources.scss' 
import {connect} from 'react-redux'

class Resources extends Component {
  state = {}

  render() {
    return (
      <div className="resource-wrapper">
        <h2>{I18n.t('resource.title')}</h2>
        <p>{I18n.t('resource.learn')}</p>
        <div className="trusty-articles">
          <div className="trusty-articles-item">
            <div className="article-head">
              <span>22 Oct 2019 | {I18n.t('resource.by')} </span>
              <span className="article-author">Zijin</span>
            </div>
            <p className="article-title">10 Steps from Idea to Profit</p>
            <div className="article-content">Tmall and Taobao have delivered the largest-ever – in both scale and reach – 6.18 Mid-Year Shopping Festival for Alibaba Group, connecting a record number of brands with the largest source of untapped consumption growth in China: the country’s hundreds of still-developing cities.

            Over 200,000 brands participated in 6.18 this year, said Alibaba. Apart from offering discounts and perks in their Tmall and Taobao stores, brands tapped Juhuasuan, Alibaba’s dedicated flash-sale and group-buying platform, to introduce deals exclusive to the festival. During 6.18, Juhuasuan saw 4,700 featured products top RMB 1 million ($145,000) in sales. There were 180 products that each took in over RMB 10 million on the platform, according to Juhuasuan.</div>
          </div>
          <div className="trusty-articles-item">
            <div className="article-head">
              <span>22 Oct 2019 | {I18n.t('resource.by')} </span>
              <span className="article-author">Zijin</span>
            </div>
            <p className="article-title">10 Steps from Idea to Profit</p>
            <div className="article-content">Tmall and Taobao have delivered the largest-ever – in both scale and reach – 6.18 Mid-Year Shopping Festival for Alibaba Group, connecting a record number of brands with the largest source of untapped consumption growth in China: the country’s hundreds of still-developing cities.

            Over 200,000 brands participated in 6.18 this year, said Alibaba. Apart from offering discounts and perks in their Tmall and Taobao stores, brands tapped Juhuasuan, Alibaba’s dedicated flash-sale and group-buying platform, to introduce deals exclusive to the festival. During 6.18, Juhuasuan saw 4,700 featured products top RMB 1 million ($145,000) in sales. There were 180 products that each took in over RMB 10 million on the platform, according to Juhuasuan.</div>
          </div>
          <div className="trusty-articles-item">
            <div className="article-head">
              <span>22 Oct 2019 | {I18n.t('resource.by')} </span>
              <span className="article-author">Zijin</span>
            </div>
            <p className="article-title">10 Steps from Idea to Profit</p>
            <div className="article-content">Tmall and Taobao have delivered the largest-ever – in both scale and reach – 6.18 Mid-Year Shopping Festival for Alibaba Group, connecting a record number of brands with the largest source of untapped consumption growth in China: the country’s hundreds of still-developing cities.

            Over 200,000 brands participated in 6.18 this year, said Alibaba. Apart from offering discounts and perks in their Tmall and Taobao stores, brands tapped Juhuasuan, Alibaba’s dedicated flash-sale and group-buying platform, to introduce deals exclusive to the festival. During 6.18, Juhuasuan saw 4,700 featured products top RMB 1 million ($145,000) in sales. There were 180 products that each took in over RMB 10 million on the platform, according to Juhuasuan.</div>
          </div>
        </div>
        <div className="all-article-btn">{I18n.t('resource.articles')}</div>
        <ContactForm />
      </div>
    )
  }
}

function mapStateToProps(state){
  return {
    i18n : state.i18n
  }
}
export default connect(mapStateToProps)(Resources);