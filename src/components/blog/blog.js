import BG from "../bg";
import {connect, useStore} from "react-redux";
import {useEffect, useState} from "react";
import {svg} from "../svg";
import Footer from "./footer";
import {Link} from "react-router-dom";
function firsr(store, el){
    let fi = []
    for(let i = 0; i < el; i++){
        let g2 = new Date(store[i].createdAt);
        const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

        fi[i] =<Link to={'/post/' + store[i]._id}>
        <div className={"blog-posts linking " + (i == 0 ? " blog-f" : " ") + (i%12 == 0 ? " last" : " ")}>
                <span className="name-posts">{store[i].name}</span>
                <span className="countSees"><i class="fa-solid fa-eye"> </i> {store[i].countSee}</span>
                <span className="time-posts">{g2.getDate() + " " + months[g2.getMonth()] }<br/>{ g2.getFullYear()} { " " + g2.getHours() + ":" + g2.getMinutes()}</span>
            </div></Link>

    }
    return fi
}
const Blog = ({store}) =>{
    const svgEl = [svg.cube, svg.shar, svg.fr, svg.hf, svg.df, svg.shape, svg.circle, svg.clone, svg.lf]
    const names = [
        'DEVELOP', 'LEARN', 'REED', "EXPLORE", "DISCOVER"
    ]
    const [currentName, setCurrentName] = useState(names[0]);

    function setRandomName() {
        const index = Math.floor(Math.random() * names.length);
        let newName = names[index]
        if (newName == currentName) { setRandomName() }
        else { setCurrentName(newName) }
        return
    }

    useEffect(() => {
        setTimeout(() => {
            setRandomName()
        }, 1000);
    }, [currentName])


    return <><div className={"full-body" + ((!store.open)? " full " : " hide")} id="full-body">
        <span className="logo-blog">WELLFINE</span><br />
        <span className="start-blog">HERE YOU CAN {currentName} {svgEl[Math.floor(Math.random() * svgEl.length)]}</span>
        <div className="free">{(store.load)? firsr(store.posts, store.elem) : <><div className="blog-posts linking blog-f"></div><div className="blog-posts linking"></div><div className="blog-posts linking"></div></>}
        </div> <Footer /></div></>
}
const mapStateToProps = (store) => {
    return {
        store: store.blogReducer
    }
}
export default connect(mapStateToProps)(Blog)