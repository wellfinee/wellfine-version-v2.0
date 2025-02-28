import f from "./f";
import {connect} from "react-redux";

const Fi = ({store}) => {
    return <div id="home">
        <span className="logo-body">WELLFINE WELLFINE WELLFINE</span>
        {(store.load)? f(store.posts) : <><div className="blog-posts linking blog-f"></div><div className="blog-posts linking"></div><div className="blog-posts linking"></div></>}
    </div>
}
const mapStateToProps = (store) => {
    return {
        store: store.firstReducer
    }
}
export default connect(mapStateToProps)(Fi)