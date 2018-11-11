import React from 'react';
import logo from "../logo.svg";
import "../App.css"

class Navigation extends React.Component {
    render() {
        return (
            <div className="navbar">
                <nav className="navbar navbar-inverse navbar-static-top">
                    <div className="container">
                        <div className="navbar-header">
                            <a class="navbar=-brand" href="/"><img src={logo} className="App-logo" alt="logo" /></a>
                        </div>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="nav navbar-nav navbar-right">
                        <li className="nav-item">
                            <a className="nav-link" href="/">About <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/skills">Skills</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/portfolio">Portfolio</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/experience">Experience</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/references">References</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/blog">Blog</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/calendar">Portfolio</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/contact">Contact</a>
                        </li>
                    </ul>
                </div>
                </div>
                </nav>
            </div>


        )
    }
}

export default Navigation;