import axios from "axios"
import React from "react"
import {store} from "../../BLL/store";
import Footer from "./footer"
import BG from "../bg";
import {connect} from "react-redux";



class Post extends React.Component {
    name = ""
    def = async () => {
        const id = window.location.pathname.replace(/\/post/s, "").slice(1)
        console.log(id)
        const response = await axios.get('https://wellfine-webhosting-posts-lilp.onrender.com/posts/id/' + id)
        this.name = response.data.name
        return response
    }
    async componentDidMount(){
        let response = await this.def()
        if(document.getElementById("rootir") != null){
            let root = document.getElementById("rootir")
            root.innerHTML += response.data.text
        }
        if(document.getElementById("name") != null){
            let named = document.getElementById("name")
            named.innerHTML += response.data.name
        }
        if(document.getElementById("see") != null){
            let see = document.getElementById("see")
            see.innerHTML += response.data.countSee
        }
        if(document.getElementById("data") != null){
            const data = document.getElementById("data")
            var g2 = new Date(response.data.createdAt);
            const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
            var datas = g2.getDate() + " " + months[g2.getMonth()] + " " + g2.getFullYear() + " " + g2.getHours() + ":" + g2.getMinutes()
            data.innerHTML += datas
        }
    }

    render(){
        return(
<>
            <div className={"full-body" + ((!store.getState().firstReducer.open)? " full " : " hide")}>
                <div className="full-post">
                    <span className="logo-blog">WELLFINE</span><br />
                <span id="name"></span><br/><div className="fest">
                <i class="fa-solid fa-eye"></i> <span id="see"></span></div>
                <span id="data">   </span>

                <div id="rootir"></div>

            </div><Footer /></div></>

        )
    }
}
const mapStateToProps = (store) => {
    return {
        store: store.blogReducer
    }
}
export default connect(mapStateToProps)(Post)