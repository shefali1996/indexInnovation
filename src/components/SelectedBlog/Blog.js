import React from "react";
import { I18n } from "react-redux-i18n";
import ReactHtmlParser from "react-html-parser";
import toArray from "lodash/toArray";
import RecentArticles from "../Blog/RecentArticle";
import "./blog.scss";
export default function Blog({ blog, blogs }) {
  const socialIcons = () => {
    return (
      <div className="social-media-icon">
        <span style={{ fontSize: "12px" }}>Share:</span>
        <span>
          <a
            href="https://www.facebook.com/idexinnovation"
            rel="noopener noreferrer"
            target="_blank"
          >
            <i className="fab fa-facebook-f"></i>
          </a>
        </span>
        <span>
          <a
            href="https://www.linkedin.com/company/idex-innovation"
            rel="noopener noreferrer"
            target="_blank"
          >
            <i className="fab fa-linkedin-in"></i>
          </a>
        </span>
        <span>
          <a
            href="https://twitter.com/idex_ideas"
            rel="noopener noreferrer"
            target="_blank"
          >
            <i className="fab fa-twitter"></i>
          </a>
        </span>
        <span>
          <a
            href="https://wechat.com"
            rel="noopener noreferrer"
            target="_blank"
          >
            <i className="fab fa-weixin"></i>
          </a>
        </span>
      </div>
    );
  };
  return (
    <div className="selected-blog">
      <div className="blog-wrapper">
        <div className="container blog">
          <div className="row">
            <div className="col-md-12 col-sm-12">
              <div className="blog-post">
                {blog &&
                  blog.map(val => {
                    return (
                      <div className="blog-content">
                        <h2>{val.title}</h2>
                        <div className="by">
                          <span> By:</span>{" "}
                          <span className="author">{val.by}</span>
                          <span>|</span>
                          <span>{val.date}</span>
                        </div>
                        <div className="mobile">{socialIcons()}</div>
                        <img src={val.image} alt="banner" />
                        <div className="tag-user">
                          {toArray(val.tags).map(tag => (
                            <div className="tag">{tag}</div>
                          ))}
                        </div>
                        <div className="content-social row">
                          <div className="full-content col-md-10">
                            <div>{ReactHtmlParser(val.content)} </div>
                          </div>
                          <div className="col-md-1 col-sm-12"></div>

                          <div className="col-md-1 col-sm-12">
                            <div className="desktop">{socialIcons()}</div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
              </div>
            </div>

            <div className="col-md-12 col-sm-12 recent-article">
              <h3 className="mb-3">Recent articles</h3>
              <div className="row">
                {blogs &&
                  blogs.map(val => (
                    <div className="col-md-4 col-sm-12">
                      <RecentArticles blog={val} />
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
