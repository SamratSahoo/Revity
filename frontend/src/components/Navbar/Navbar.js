import React, { Component } from 'react';
import { MenuItems } from "./MenuItems"
import { Button } from "../Button"
import './Navbar.css'
import { withRouter } from 'react-router-dom';

class Navbar extends Component {
    state = { clicked: false }


    handleClick = () => {
        this.setState({ clicked: !this.state.clicked })
    }

    changeHistory = () => {
        this.props.history.push('/login');
    }

    render() {
        return(
            <nav className="NavbarItems">
                <h1 className="navbar-logo">Revity</h1>
                <div className="menu-icon" onClick={this.handleClick}>
                    <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
                </div>
                <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
                    {MenuItems.map((item, index) => {
                        return (
                            <li key={index}>
                                <a className={item.cName} href={item.url}>
                                {item.title}
                                </a>
                            </li>
                        )
                    })}
                </ul>
                <Button onClick={this.changeHistory.bind(this)}>Register</Button>
            </nav>
        )
    }
}

export default withRouter(Navbar)