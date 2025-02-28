import './App.css';
import Header from "./components/header.js"
import FullBody from "./components/body.js"
import { Route, Routes} from "react-router-dom"
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import $ from 'jquery';
import Login from "./components/login"
import Blog from "./components/blog/blog";
import React from ".";
import Post from "./components/blog/post"
import Text from "./components/text"
import {svg} from "./components/svg";
import Background from "./components/bg";
function App() {
  const { pathname, hash, key } = useLocation();
  useEffect(() => {
    setTimeout(()=>{
      $("#preloader").css("opacity", "0")
    }, 4000)
    setTimeout(()=>{
      $("#preloader").css("display", "none")
    }, 5000)
    $(document).ready(function(){
      $("body").mousemove(function(event){
          $("#coursor").css("left", event.pageX)
          $("#coursor").css("top", event.pageY)
      })
      $(".linking, a").mouseover(function(event){
        $("#coursor").css("width", "2vw")
        $("#coursor").css("height", "2vw")
        $("#coursor").css("transform", "translateX(-22px) translateY(-22px)")
    })
    $(".linking, a").mouseout(function(event){
      $("#coursor").css("width", "4vw")
      $("#coursor").css("height", "4vw")
      $("#coursor").css("transform", "translateX(-45px) translateY(-45px)")
  })
  })

    // if not a hash link, scroll to top
    if (hash === '') {
      window.scrollTo(0, 0);
    }
    // else scroll to id
    else {
      setTimeout(() => {
        const id = hash.replace('#', '');
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({behavior: 'smooth'});
        }
      }, 0);
    }
  }, [pathname, hash, key]);


  useEffect(() => {

  }, []);

  return (
    <div className={"App" + (window.screen.width / window.screen.height < 1 ? " mobile" : "")}>
          <div id="coursor"></div>
          <div className="preloader" id="preloader">
            <div className="cont"><div className="preloader-text"><span><Text /></span></div>
              <span className="pre-text">Web developer {svg.df} Web designer</span>
            </div>
          </div>
      <Routes>
        <Route path="/" element={<FullBody />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/post/:id" element={<Post />}/>
        <Route path="/auth/:code" element={<Login />}/>
      </Routes>
     <Header />
      <Background />
    </div>
  );
}

export default App;
