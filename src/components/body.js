import { Link } from "react-router-dom";
import { useEffect } from "react";
import $ from 'jquery';
import { connect } from "react-redux";
import {set} from "./../BLL/first"
import { useDispatch } from "react-redux";
import Context from "./cont"
import About from "./about"
import Whyme from "./whyme"
import Background from "./bg"
import Fi from "./fi"
import Partnership from "./part"
import Marquee from "./mark"
import Contact from "./contact.js"

const FullBody = ({store}) =>  {
  useEffect(()=> {
    const full = document.querySelector(".full-body")
    const handleScroll = (event) => {
      let elem = document.querySelector(".logo-body")
      elem.setAttribute("style", "transform: translateY(10vw) translateX(-"+ (150.2+(document.querySelector(".full-body").scrollTop/10))+"vw)")
    };

    full.addEventListener('scroll', handleScroll);

return () => {full.removeEventListener('scroll', handleScroll)}

  }, [])
    return<>

    <div className={"full-body" + ((!store.open)? " full " : " hide")} id="full-body">
      <Fi />
      <Context />
      <Marquee />
      <About />
      <Whyme />
      <Partnership />
      <Contact />
    </div>
    </>
}

  const mapStateToProps = (store) => {
    return {
      store: store.firstReducer
    }
  }
  export default connect(mapStateToProps)(FullBody)