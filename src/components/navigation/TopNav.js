import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import './TopNav.css'

class TopNav extends Component {
    render() {
        return (
            <div className="topnav">
                <Link to="/" className="link">
                    Home
                </Link>
                <hr />
                <Link to="/recipes" className="link">
                    Recipes
                </Link>
                <hr />
                <Link to="/ingredients" className="link">
                    Ingredients
                </Link>
            </div>
        )
    }
}

export default TopNav
