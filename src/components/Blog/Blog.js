import React, { Component } from "react";
import { I18n } from "react-redux-i18n";
// import checkIcon from '../../assets/images/icons/check-feature.svg'
import ReactHtmlParser from "react-html-parser";
import { withRouter } from "react-router";
import "./Blog.scss";
import { connect } from "react-redux";
import toArray from "lodash/toArray";
import isEqual from "lodash/isEqual";
import RecentArticles from "./RecentArticle";
class Blog extends Component {
  state = {
    blog: toArray(I18n.t("blog").articles).reverse()
  };
  componentDidUpdate(props) {
    if (!isEqual(this.state.blog, toArray(I18n.t("blog").articles).reverse())) {
      this.setState({
        blog: toArray(I18n.t("blog").articles).reverse()
      });
    }
  }
  handleClick = route => {
    let blogRoute = route.split(" ").join("_");
    this.props.router.push(`/blog/${blogRoute}`);
  };

  render() {
    const { blog } = this.state;
    return (
      <div className="blog-wrapper">
        <div className="container blog">
          <div className="row">
            <div className="col-md-7 col-sm-12">
              <div className="blog-post">
                {blog.map(val => {
                  return (
                    <div className="blog-content">
                      <h2>{val.title}</h2>
                      <img
                        src={val.image}
                        alt="banner"
                        onClick={() => this.handleClick(val.route)}
                      />
                      <div className="tag-user">
                        {toArray(val.tags).map(tag => (
                          <div className="tag">{tag}</div>
                        ))}
                        <div className="by">
                          By: <span>{val.by}</span>
                        </div>
                      </div>
                      <div className="content">
                        {ReactHtmlParser(val.excerpt)}{" "}
                        <a href="#">{I18n.t("blog.read_more")}</a>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="col-md-1 col-sm-12"></div>

            <div className="col-md-4 col-sm-12 recent-article">
              <h3 className="mb-3">Recent articles</h3>

              {blog.map(val => (
                <RecentArticles blog={val} />
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    i18n: state.i18n
  };
}
export default withRouter(connect(mapStateToProps)(Blog));
