import $ from "jquery";
import {set} from "../BLL/first";
import {useDispatch} from "react-redux";

const BG = () => {
    const dispatch = useDispatch()
    return <><div className='filter'></div>
    <span className="but linking" style={{zIndex: "1000",position: "fixed", top: "0vw", right: "1.4vw", fontSize: "2vw"}}>
    <div id="nav-icon3" onClick={() => {$('#nav-icon3').toggleClass('open')
        dispatch(set())}}>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
</div>
    </span></>
}

export default BG