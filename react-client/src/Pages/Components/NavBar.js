import React from 'react'
import { Link } from "react-router-dom";

export default function NavBar() {
    return (
        <div class="d-flex flex-column flex-md-row p-3 px-md-4 mb-3 navbar-light border-bottom shadow-sm">
        <h5 class="my-0 mr-md-auto font-weight-normal">Go-Py</h5>
        <nav class="my-2 my-md-0 mr-md-3">
        <Link className="btn btn-outline-secondary m-1" to={"/"}>Home</Link>
        <Link className="btn btn-outline-secondary m-1" to={"/about"}>About</Link>
        <Link className="btn btn-outline-secondary m-1" to={"/sign-in"}>Login</Link>
        <Link className="btn btn-outline-secondary m-1" to={"/sign-up"}>Sign up</Link>
        </nav>        
      </div>
    )
}
