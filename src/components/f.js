import {Link} from "react-router-dom";
import {useEffect} from "react";
import $ from "jquery";

function firsr(store){
    let fi = []
    for(let i = 0; i < 3; i++){
        let g2 = new Date(store[i].createdAt);
        const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

        fi[i] =
            <div className={"blog-posts linking " + (i == 0 ? " blog-f" : " ")}>
                <Link to={'/post/' + store[i]._id}> <span className="name-posts">{store[i].name}</span></Link>
                <span className="countSees"><i class="fa-solid fa-eye"> </i> {store[i].countSee}</span>
                <span className="time-posts">{g2.getDate() + " " + months[g2.getMonth()] }<br/>{ g2.getFullYear()} { " " + g2.getHours() + ":" + g2.getMinutes()}</span>
            </div>

    }
    return fi
}

export default firsr