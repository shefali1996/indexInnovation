import React, { Component } from 'react'
import { I18n } from 'react-redux-i18n'
// import checkIcon from '../../assets/images/icons/check-feature.svg'
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';

import './Blog.scss' 
import {connect} from 'react-redux'

class Blog extends Component {
  state = {}
  getBlogList(){
    return 
  }
  render() {
    return (
      <div className="blog-wrapper">
        <div className="container blog">
          <div className="row">
            <div className="col-md-9">
              <div className="blog-post">
                <h2>{I18n.t('blog.articles.1.title')}</h2>
                <img src={process.env.PUBLIC_URL + "/assets/images/blog/banner-1.jpg"} alt="banner" />
                { ReactHtmlParser(I18n.t('blog.articles.1.excerpt'))}
              </div>
              <div className="blog-post">
                <h2>{I18n.t('blog.articles.2.title')}</h2>
                { ReactHtmlParser(I18n.t('blog.articles.2.excerpt'))}
                <img src="../../assets/images/blog/banner-1.jpg" alt="banner" />
              </div>
              <div className="blog-post">
                <h2>{I18n.t('blog.articles.3.title')}</h2>
                { ReactHtmlParser(I18n.t('blog.articles.3.excerpt'))}
                <img src={"../../assets/images/blog/banner-1.jpg"} alt="banner" />
              </div>
            </div>
            
            <div className="col-md-3">
              <h3>{I18n.t('blog.recent_articles')}</h3>
              <div class="sidebar">
                <div class="blog-item">
                  <div class="date"></div>
                  <div class="author"></div>
                  <div class="post-title"></div>
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