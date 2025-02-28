import {useEffect, useMemo, useState, useRef} from "react";

function useOnScreen(ref: RefObject) {

  const [isIntersecting, setIntersecting] = useState(false)

  const observer = useMemo(() => new IntersectionObserver(
      ([entry]) => setIntersecting(entry.isIntersecting)
  ), [ref])


  useEffect(() => {
    observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return isIntersecting
}
const Partnership = () => {
  const ref = useRef(null)
  const isVisible = useOnScreen(ref)
  return <>
    <span id="partnership" className={"animate__animated animate__bounce bg-part " + (isVisible && " anim")}><span className="anim-el">P</span><span className="anim-el">A</span><span className="anim-el">R</span><span className="anim-el">T</span><span className="anim-el">N</span><span className="anim-el">E</span><span className="anim-el">R</span><span className="anim-el">S</span><span className="anim-el">H</span><span className="anim-el">I</span><span className="anim-el">P</span></span>
    <span ref={ref}></span>
    <div className="section">
    <span className={"part-text"}>SALES!</span>
    <span className="font"><br /><br />Find two clients, you get the money for the third site completely<br /> <br />But keep in mind, in this case,
      regardless of whether I get the money or not, I am... <br/><br />1. I'm not responsible for the time<br/>2. You undertake the entire collection of information</span></div>
    <div className="section right">
    <span className="part-text">SOME FEE</span>
    <span className="font"><br /><br />Find a client, get 10% of the revenue for the site<br /><br />But keep in mind, in this case,
regardless of whether I get the money or not, I am...<br /><br />1. I'm responsible for the time<br />2. I'm undertake the entire collection of information <br />3. You make a commitment to the client's contact with me</span>
    </div></>
}
export default Partnership