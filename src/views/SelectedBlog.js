import React,{useEffect,useState} from 'react'
import Blog from "../components/SelectedBlog/Blog"
import { I18n } from "react-redux-i18n";
import ReactHtmlParser from "react-html-parser";

export default function SelectedBlog(props) {
    const [currentBlog,setCurrentBlog]=useState(null)
    useEffect(()=>{
        let route=props.routeParams.route.split('_').join(" ")
        console.log(I18n.t("blog"),'999999999');
    },[])
    return (
        <div>
            <Blog/>
        </div>
    )
}
