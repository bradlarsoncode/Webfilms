import React from 'react';
import {Link} from 'react-router-dom'
import LoginPage from '../login/login_form'
import Enjoy from './enjoy'
// import Footer from './../browse/browse_footer'


class Splash extends React.Component {


    render(){
        return(
            <div className="blackbg">
                <div className="banner">
                    <img className="logo" src={window.logoUrl}/>
                    
                    <Link to="/login" >
                        <input className="sign-in-button"
                            type="submit" value="Sign In" />
                    </Link>
                    <h1 className="unlimited">Unlimited movies, films,<br />
                        flicks, and more</h1>
                
                            <form className="sign-up">
                                {/* <input type="email"/> */}
                                        <Link to="/signup">
                                            <button className="free">TRY 30 DAYS FREE     ></button>
                                        </Link>
                            </form>
                    <p className="ready">Ready to watch? Click below to create or restart your membership.</p>
                    <h2 className="watch-anywhere">Watch anywhere. Cancel anytime.</h2>   
                </div>
                <div>
                    <Enjoy />
                    
                </div>
             
                <div className="splashfooter">
                    <p className="loginfootertop">Hiring? Call 1-267-269-5454</p>
                    <p className="loginfooteritems">FAQ</p>
                    <p className="loginfooteritems3">Help Center</p>
                    <p className="loginfooteritems3">Terms of Use</p>
                    <p className="loginfooteritems3">Privacy</p>
                    <div >
                        <p className="loginfooteritems2">Cookie Preferences</p>
                        <p className="loginfooteritems4">Corporate Information</p>
                    </div>

                </div>
            </div>
            
        )
    }
}

export default Splash