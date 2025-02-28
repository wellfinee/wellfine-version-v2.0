import React from 'react';
import { connect} from 'react-redux';
import { addSend} from "../BLL/auth";
import DOMPurify from 'dompurify';
import { store} from "../BLL/store";
import EditTool from "./edit"
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

function createMarkup(html) {
    return {
        __html: DOMPurify.sanitize(html)
    }
}

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",

            code: window.location.pathname.replace(/\/auth/s, "").slice(1),
        }
    }
    setTextEmail(text){
        this.setState({
            email: text
        })
    }
    setTextPassword(text){
        this.setState({
            password: text
        })
    }
    sendEmail(email, password, code){
        store.dispatch(addSend({email: email,password: password, code: code}))
    }

    render(){
        return (
            <div className="full-body">
                {(!store.getState().authRes.auth || store.getState().authRes.code == 401 || store.getState().authRes.code == 100) ? <>
                    <span className='name-auth'>Wellfine/</span>
                    <input type="email" onChange={(e) => this.setTextEmail(e.target.value)} value={this.state.email} placeholder="" autofocus />
                    <input type="password" onChange={(e) => this.setTextPassword(e.target.value)} value={this.state.password} placeholder="" autofocus />
                    {(store.getState().authRes.code == 401 ) ? <span className='error'>Error</span> : " "}
                    <button onClick={() => this.sendEmail(this.state.email, this.state.password, this.state.code)} className='button-auth'>Sign in</button> </>:<>
                    <span className='name-auth'>Wellfine/</span>
                    <EditTool />
                    {(store.getState().createRes.currect) ? <span className='success'>Create</span> : " "}
                    {(!store.getState().createRes.currect) ? <span className='error'>Error</span> : " "}
                </>
                }

            </div>
        )}
}

const mapStateToProps = store => {
    return {
        store: store
    };
};

export default connect(mapStateToProps)(App);
/*eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjb2RlIjoid2VsbGZpbmUucmVib290LnRlY2hub2xvZ3kub3JnIn0.MIXOwkMmw7saqCikG8vkkuWRTwepe8CYY6aa0He-bhg*/