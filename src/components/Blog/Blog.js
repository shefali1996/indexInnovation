import React, { Component } from "react";
import { I18n } from "react-redux-i18n";
// import checkIcon from '../../assets/images/icons/check-feature.svg'
import ReactHtmlParser from "react-html-parser";
import { withRouter } from "react-router-dom";
import "./Blog.scss";
import { connect } from "react-redux";
import toArray from "lodash/toArray";
import isEqual from "lodash/isEqual";
import RecentArticles from "./RecentArticle";
import { Link } from "react-router-dom";
import left_icon from "../../assets/images/icons/chevronb.svg";
import{Button} from "react-bootstrap"
class Blog extends Component {
  state = {
    blog: toArray(I18n.t("blog").articles).reverse(),
    start: 0,
    end: 3
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
    this.props.history.push(`/blog/${blogRoute}`);
  };
  onNextClick = start => {
    this.setState(
      {
        start: start + 3,
        end: this.state.end + 3
      },
      () => {
        window.scrollTo(0, 0);
      }
    );
  };

  render() {
    const { blog, start, end } = this.state;
    return (
      <div className="blog-wrapper blog-view">
        <div className="container blog">
          <div className="row">
            <div className="col-md-7 col-sm-12">
              <div className="blog-post">
                {/* {blog.slice(start, end).map(val => { */}
                  {blog.map(val => {
                  return (
                    <div className="blog-content">
                      <h2 className="blog-title"onClick={()=>this.handleClick(val.route)}>{val.title}</h2>
                      <img
                        src={val.image}
                        alt="banner"
                        onClick={() => this.handleClick(val.route)}
                      />
                      <div className="tag-user">
                      <div className="tag-container">
                        {toArray(val.tags).map(tag => (
                          <span className="tag">{tag}</span>
                        ))}
                        </div>
                        <div className="by">
                       {I18n.t('blog.by')}  {" "}{val.by}
                        </div>
                      </div>
                      <div className="content">
                        {ReactHtmlParser(val.excerpt)}{" "}
                        <Link to={`/blog/${val.route.split(" ").join("_")}`}>
                          {I18n.t("blog.read_more")}
                        </Link>
                      </div>
                    </div>
                  );
                })}
                {/* <div className="previous_article">
                  <span 
                  // onClick={() => this.onNextClick(start)}
                  >
                    {" "}
                    {I18n.t("blog.previous_articles")}
                    <img src={left_icon} />
                  </span>
                </div> */}
              </div>
            </div>
            <div className="col-md-1 col-sm-12"></div>

            <div className="col-md-4 col-sm-12 recent-article">
              <h3 className="mb-3"> {I18n.t("blog.recent_articles")}</h3>

              {blog.slice(0,3).map(val => (
                <RecentArticles blog={val} />
              ))}
                {/* <div className="see-all-container"><button className="see-all">SEE ALL ARTICLES</button></div> */}

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
