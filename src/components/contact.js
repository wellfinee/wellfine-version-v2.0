import {useEffect} from "react";

const Contact = () => {
    useEffect(()=>{
        const full = document.querySelector(".full-body")
        const handleScroll = (event) => {
            let elem = document.querySelector(".contact")
            let math = (-((document.querySelector(".contact").offsetTop - full.scrollTop)/60-5))
            elem.setAttribute("style", "transform: translateY("+ ((math >= -5) ? math: -5)+"vw)")
        };

        full.addEventListener('scroll', handleScroll);

        return () => {full.removeEventListener('scroll', handleScroll)}
    },[])
    return <>
    <div className="fristail"></div>
        <div className="fristail-bg"></div>
        <div  className="contact"><span style={{fontSize: " 8vw",marginLeft:" 5vw" , marginTop: "35vw", float: "left", textDecoration: "underline", width: "95vw", textAlign: "left"}}>GET TOUCH</span> <span className="cont-textil">Are you ready to plunge into this <b>adventure</b>?</span>
        <a href="https://t.me/HardToImbue"  className="telegram"><i className="fa-brands fa-telegram" style={{color: "#ffffff;"}}></i></a>
            <a className="link-out" href="mailto:mihailovmikael24@gmail.com?subject=your title&body=TThe message">
                <i style={{transform:" translate(-1vw, 0.5vw);"}} className="fa-solid fa-at"> </i> <button id="btnOutlook">mihailovmikael24@gmail.com</button>
            </a>
            <span id="contacts" className="end">WELLFINE</span>
        </div>
    </>
}
export default Contact