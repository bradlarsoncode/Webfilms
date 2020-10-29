import React from 'react';
import { Link } from 'react-router-dom'


class SessionForm extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            email: "",
            password: ""
        };
        // this.renderErrors = this.renderErrors.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

      renderErrors() {
         let err = Array.from(this.props.errors);
        return (
            <ul>
                {err.map((error, id) => (
                    <li key={id}>
                        {error}
                    </li>
                ))}
            </ul>
        );
    }

    update(field){
        return e => {
            this.setState({[field]: e.currentTarget.value});
        };
    }

    handleSubmit(e){
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.processForm(user)
    }

    render(){
        return(
            <div id="signup-bg">
                
                <div>
                    <Link to="/" >
                        <img className="logosignup" src={window.logoUrl} />
                    </Link>
                </div>
                <Link to="/login" className="demologin">Sign In</Link>
                <div>
                    <hr className="hr1"/>
                </div>
                
                <img className="devices" src={window.devicesUrl} />
                <span className="content-top">STEP <strong className="strong">1</strong> OF <strong className="strong">1</strong></span><br/>
                <p className="finish">Finish setting up your account.</p>
                <br/>
                <p className="signupwords">Webfilms is personalized for you. Create </p><br/>
                    <p className="signupwords">a password to watch Webfilms on any</p><br/>
                <p className="signupwords">device at any time. </p>
                {/* <span className="content">Welcome Back!</span><br/>
                <span className="content">Joining Webfilms is easy.</span><br/>
                <span className="content">Enter your password and you'll be watching in no time</span> */}
                <form onSubmit={this.handleSubmit} >
                    <input type="hidden" name="authenticity_token" value="<%=form_authenticity_token%>"/>
                    {/* Please {this.props.formType} */}
                    {/* {this.renderErrors()}
                    <p>
                    
                    </p>
                    <label className="content">
                        Email:
                        <input type="text" value={this.state.email} onChange={this.update('email')}/>
                    </label>  
                    <p></p>
                    <label className="content">
                        Password:
                        <input type="password" value={this.state.password} onChange={this.update('password')}/>
                    </label>
                    <p></p>
                    <input classname="content" type="submit" value={this.props.formType}/> */}
                    <div>
                    <Link className="continue" to="/signup/regform">CONTINUE
                        {/* <button type="button" className="continue">CONTINUE</button> */}
                    </Link>
                    {/* <form action="/signup/regform">
                        <input className ="continue" type="submit" value ="CONTINUE"/>
                    </form> */}
                    </div>
                </form> 
                    
                    {/* <SignupForm className="signupfooter"/> */}
                    <div className="signupfooter">
                    <p className="footertop">Hiring? Call 1-267-269-5454</p>
                    <a href="https://linkedin.com/in/bradlarsoncode" className="footeritems">LinkedIn</a>
                    <a href="https://github.com/Arsoni5t/Webfilms" className="footeritems3">GitHub</a>
                    <a href="https://letterboxd.com/Bradlarson/" className="footeritems3">LetterBoxd</a>
                    <a href="https://bit.ly/3l7T3uJ" className="footeritems3">Corporate Policy</a>
                    {/* <div >
                        <p className="footeritems2">Cookie Preferences</p>
                        <p className="footeritems4">Corporate Information</p>
                    </div> */}
                   
                    </div>
                        
            </div>
           
        )
    }
}

export default SessionForm