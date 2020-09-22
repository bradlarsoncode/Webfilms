import React from "react";
import ReactDOM from "react-dom";
// import configureStore from './store/store'
import { login, logout, signup } from "./util/session_api_util";

document.addEventListener("DOMContentLoaded", () => {
    const root = document.getElementById('root')
    // const store = configureStore();
    window.login = login
    window.logout = logout 
    window.signup = signup
    // ReactDOM.render(<Root store = {store}/>, root)
    ReactDOM.render(<h1>The Internet</h1>, root)
})