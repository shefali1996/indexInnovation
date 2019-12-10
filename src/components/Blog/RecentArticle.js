import React from "react";
import { validate } from "@babel/types";
import toArray from "lodash/toArray";
import {Link} from "react-router"
export default function RecentArticle({ blog }) {
  return (
      <div>
    <div className="recent-cards">
      <div className="date-by">
        <span className="date">{blog.date}</span>
        <span>|</span>
        <span className="by">By <span>{blog.by}</span></span>
      </div>
      <div className="title">{blog.title}</div>
      <div className="tag-read">
        {toArray(blog.tags).map(tag => (
          <div className="tag">{tag}</div>
        ))}
        <Link className="read">Read</Link>
      </div>
    </div>
    </div>
  );
}
