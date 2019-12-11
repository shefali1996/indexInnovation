import React, { useEffect, useState } from "react";
import Blog from "../components/SelectedBlog/Blog";
import { I18n } from "react-redux-i18n";
import ReactHtmlParser from "react-html-parser";
import filter from "lodash/filter";
import toArray from "lodash/toArray";
import Header from "../components/Header/header";
import Footer from "../components/Footer/footer";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import isEqual from "lodash/isEqual";
function SelectedBlog(props) {
  const [currentBlog, setCurrentBlog] = useState(null);
  const [blogs, setBlogs] = useState(null);
  const [currIndex, setCurrIndex] = useState(null);
  useEffect(() => {
    let blogRoute = props.routeParams.route.split("_").join(" ");
    let allBlogs = toArray(I18n.t("blog.articles")).reverse();
    let filteredItem = filter(allBlogs, ["route", blogRoute]);
    let index = allBlogs.findIndex(curr => {
      return curr.title === filteredItem[0].title;
    });
    setCurrentBlog(filteredItem);
    setBlogs(allBlogs.reverse());
    setCurrIndex(index);
  }, []);

  useEffect(() => {
    let allBlogs = toArray(I18n.t("blog.articles")).reverse();
    if (!isEqual(blogs, allBlogs)) setBlogs(allBlogs);
  });
  useEffect(() => {
    let allBlogs = toArray(I18n.t("blog.articles"));
    if (blogs && !isEqual(blogs, allBlogs)) {
      setCurrentBlog([blogs[currIndex]]);
    }
  }, [blogs]);
  return (
    <div>
      <Header />
      <Blog blog={currentBlog} blogs={blogs} />
      <Footer />
    </div>
  );
}

function mapStateToProps(state) {
  return {
    i18n: state.i18n
  };
}
export default withRouter(connect(mapStateToProps)(SelectedBlog));
