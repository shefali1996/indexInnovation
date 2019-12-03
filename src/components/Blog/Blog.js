import React, { Component } from 'react'
import { I18n } from 'react-redux-i18n'
// import checkIcon from '../../assets/images/icons/check-feature.svg'
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';

import './Blog.scss' 
import {connect} from 'react-redux'
import Banner1 from '../../assets/images/blog/banner-1.jpg'
import Banner2 from '../../assets/images/blog/banner-2.jpg'
import Banner3 from '../../assets/images/blog/banner-3.jpg'

class Blog extends Component {
  state = {}
  
  render() {
    return (
      <div className="blog-wrapper">
        <div className="container blog">
          <div className="row">
            <div className="col-md-9">
              <div className="blog-post">
                <h2>{I18n.t('blog.articles.1.title')}</h2>
                <img src={Banner1} alt="banner" />
                { ReactHtmlParser(I18n.t('blog.articles.1.excerpt'))} <a href="#">{I18n.t('blog.read_more')}</a>
              </div>
              <div className="blog-post">
                <h2>{I18n.t('blog.articles.2.title')}</h2>
                <img src={Banner2} alt="banner" />
                <div className="tagsandauthor">
                  <span className="tags">
                    <span className="tag">Innovations</span>
                  </span>
                  <span className="author"></span>
                </div>  
                { ReactHtmlParser(I18n.t('blog.articles.2.excerpt'))} <a href="#">{I18n.t('blog.read_more')}</a>
              </div>
              <div className="blog-post">
                <h2>{I18n.t('blog.articles.3.title')}</h2>
                <img src={Banner3} alt="banner" />
                { ReactHtmlParser(I18n.t('blog.articles.3.excerpt'))} <a href="#">{I18n.t('blog.read_more')}</a>
              </div>
            </div>
            
            <div className="col-md-3">
              <h3>{I18n.t('blog.recent_articles')}</h3>
              <div class="sidebar">
                <div class="blog-item">
                  <div class="date"></div>
                  <div class="author"></div>
                  <div class="post-title">{this.props}</div>
                  <div class="readmore">{I18n.t('blog.read_more')}</div>
                </div>
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
export default connect(mapStateToProps)(Blog);