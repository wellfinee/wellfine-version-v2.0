import { useState } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
const Strelka = () => {
    return <svg xmlns="http://www.w3.org/2000/svg" width="3vw" height="3vw" viewBox="0 0 24 24" fill="none">
<path d="M6 12H18M6 12L11 7M6 12L11 17" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
}
const Header = ({store}) =>  {
    return<div className={"header"+ ((!store.open) ? " full " : " hidert")}>
    <span className="logo">WELLFINE /</span>
    <div  className="zalet"></div>
    <Link to="/#home" className="link home">HOME<Strelka /></Link>
    <Link to="/blog" className="link blog">BLOG<Strelka /></Link>
    <Link to="/#about" className="link blog">ABOUT ME<Strelka /></Link>
    <Link to="/#why" className="link why">WHY ME?<Strelka /></Link>
    <Link to="/#partnership" className="link partnership">PARTNERSHIP<Strelka /></Link>
    <Link to="/#contacts" className="link contacts">CONTACTS<Strelka /></Link>
     </div>
}
const mapStateToProps = (store) => {
    return {
      store: store.firstReducer
    }
  }
  export default connect(mapStateToProps)(Header)