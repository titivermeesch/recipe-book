import React, { Component } from 'react'

import TopNav from './components/navigation/TopNav'

import './App.css'

class App extends Component {
    render() {
        return (
            <div className="App">
                <TopNav />
                WELCOME ON THE RECIPE BOOK HOMEPAGE, THIS IS A RANDOM PROJECT
                CREATED BY TRISTAN VERMEESCH
            </div>
        )
    }
}

export default App
