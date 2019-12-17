import React from "react";
import { validate } from "@babel/types";
import toArray from "lodash/toArray";
import { Link } from "react-router-dom";
import { I18n } from "react-redux-i18n";

export default function RecentArticle({ blog }) {
  return (
    <div>
      <div className="recent-cards">
        <div className="date-by">
          <span className="date">{blog.date}</span>
          <span>|</span>
          <span className="by">
            {I18n.t("blog.by")} {blog.by}
          </span>
        </div>
        <Link
          to={`/blog/${blog.route.split(" ").join("_")}`}
          className="title-recent"
        >
          <div className="title">{blog.title}</div>
        </Link>
        <div className="tag-read">
          {toArray(blog.tags).length < 3 ? (
            toArray(blog.tags).map(tag => <div className="tag">{tag}</div>)
          ) : (
            <>
            
              <div className="tag">{toArray(blog.tags)[0]}</div>
              <div className="tag">+{toArray(blog.tags).length - 1} more </div>
            </>
          )}
          <Link
            to={`/blog/${blog.route.split(" ").join("_")}`}
            className="read"
          >
            {I18n.t("blog.read")}
          </Link>
        </div>
      </div>
    </div>
  );
}
