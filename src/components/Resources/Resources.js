import React, { Component } from "react";
import { I18n } from "react-redux-i18n";
import ContactForm from "../ContactForm/ContactForm";
import "./Resources.scss";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import toArray from "lodash/toArray";
import isEqual from "lodash/isEqual";
import ReactHtmlParser from "react-html-parser";

class Resources extends Component {
  state = { isError: false, blog: toArray(I18n.t("blog").articles).reverse() };
  sendDataToChild = data => {
    this.setState({
      isError: data
    });
  };
  componentDidUpdate(props) {
    if (!isEqual(this.state.blog, toArray(I18n.t("blog").articles).reverse())) {
      this.setState({
        blog: toArray(I18n.t("blog").articles).reverse()
      });
    }
  }
  handleSeeAllClick = () => {
    this.props.history.push("/blog");
  };

  handleTitleClick=(route)=>{
    let blogRoute = route.split(" ").join("_");
    this.props.history.push(`/blog/${blogRoute}`);
  }
  render() {
    return (
      <div
        className={
          "resource-wrapper " + (this.state.isError && "resource-wrapper-error")
        }
      >
        <h2>{I18n.t("resource.title")}</h2>
        <p>{I18n.t("resource.learn")}</p>
        <div className="trusty-articles">
          {this.state.blog.slice(0, 3).map(val => (
            <div className="trusty-articles-item">
              <div className="article-head">
                <span>
                  {val.date} | {I18n.t("resource.by")}{" "}
                </span>
                <span className="article-author">{val.by}</span>
              </div>
              <p className="article-title" onClick={()=>this.handleTitleClick(val.route)}>{val.title}</p>
              <div className="article-content">
                {ReactHtmlParser(val.excerpt)}
              </div>
            </div>
          ))}
        </div>
        <div className="all-article-btn" onClick={this.handleSeeAllClick}>
          {I18n.t("resource.articles")}
        </div>
        <ContactForm sendDataToChild={this.sendDataToChild} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    i18n: state.i18n
  };
}
export default withRouter(connect(mapStateToProps)(Resources));
