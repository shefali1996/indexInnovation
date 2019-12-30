import React, { useEffect, useState } from "react";
import { I18n } from "react-redux-i18n";
import ReactHtmlParser from "react-html-parser";
import toArray from "lodash/toArray";
import RecentArticles from "../Blog/RecentArticle";
import "./blog.scss";
import left_icon from "../../assets/images/icons/chevronb.svg";
import { OverlayTrigger, Tooltip } from "react-bootstrap";
import QrCode from "../../assets/images/customer_logos/qrcode.jpg";
import {
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton,

} from "react-share";
import { Helmet } from "react-helmet";

export default function Blog({ blog, blogs, handleNextClick, currIndex }) {
  const socialIcons = () => {
    return (
      <div className="social-media-icon">
        <span style={{ fontSize: "12px" }}>{I18n.t("blog.share")}:</span>
        <span>
          <FacebookShareButton
            url={window.location.href}
            quote={blog[0].title}
            // picture={blog[0].image}
          >
            <a>
              <i className="fab fa-facebook-f" style={{color:"#007bff"}}></i>
            </a>
          </FacebookShareButton>
        </span>
        <span>
          <LinkedinShareButton url={window.location.href} title={blog[0].title}>
            <a href="#" rel="noopener noreferrer">
              <i className="fab fa-linkedin-in"></i>
            </a>
          </LinkedinShareButton>
        </span>
        <span>
          <TwitterShareButton title={blog[0].title} url={window.location.href}>
            <a href="#" rel="noopener noreferrer" >
              <i className="fab fa-twitter"></i>
            </a>
          </TwitterShareButton>
        </span>
        <span>
          <OverlayTrigger
            key={"top"}
            placement={"top"}
            overlay={
              <Tooltip id={`tooltip-top`}>
                <img src={QrCode} width="150px" height="150px" />
              </Tooltip>
            }
          >
            <a
              rel="noopener noreferrer"
              target="_blank"
              style={{ color: "#007bff" }}
            >
              <i className="fab fa-weixin"></i>
            </a>
          </OverlayTrigger>
        </span>
      </div>
    );
  };
  const [isScroll, setIsScroll] = useState(false);

  const handleScroll = event => {
    let top =
      document.querySelector(".desktop") &&
      document.querySelector(".desktop").getBoundingClientRect().top;
    let bottom =
      document.querySelector(".desktop") &&
      document.querySelector(".desktop-container").getBoundingClientRect()
        .bottom;

    let parentTop =
      document.querySelector(".desktop") &&
      document.querySelector(".desktop-container").getBoundingClientRect().top;
    if (bottom < 250) {
      setIsScroll(false);
    } else if (top < 99) {
      setIsScroll(true);
    } else if (parentTop > 100) {
      setIsScroll(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="selected-blog">
      {blog && (
        <Helmet>
          <meta charSet="utf-8" />
          <title>{blog[0].title}</title>
          {/* <link rel="canonical" href="https://silly-goldwasser-40964e.netlify.com" /> */}
          <meta property="og:image" content={"PUBLIC_URL%" + blog[0].image} />
          <meta
            property="og:image:secure_url"
            content={"PUBLIC_URL%" + blog[0].image}
          />
        </Helmet>
      )}
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
                          {I18n.t("blog.by")} :{" "}
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
                            <div className="prev-next">
                              <span>
                                {currIndex > 0 && (
                                  <span onClick={() => handleNextClick("prev")}>
                                    <img
                                      src={left_icon}
                                      style={{ transform: "rotate(180deg)" }}
                                    />
                                    <span>
                                      {I18n.t("blog.previous_articles")}
                                    </span>
                                  </span>
                                )}
                              </span>
                              <span>
                                {currIndex < blogs.length - 1 && (
                                  <span onClick={() => handleNextClick("next")}>
                                    <span>
                                      {I18n.t("blog.next_article")}{" "}
                                      <img src={left_icon} />{" "}
                                    </span>
                                  </span>
                                )}
                              </span>
                            </div>
                          </div>
                          <div className="col-md-1 col-sm-12"></div>

                          <div className="col-md-1 col-sm-12 desktop-container">
                            <div
                              className={
                                "desktop " + (isScroll && "make-fixed")
                              }
                            >
                              {socialIcons()}
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
              </div>
            </div>

            <div className="col-md-12 col-sm-12 recent-article">
              <h3 className="mb-3">{I18n.t("blog.recent_articles")}</h3>
              <div className="row">
                {blogs &&
                  blogs.slice(0, 3).map(val => (
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
