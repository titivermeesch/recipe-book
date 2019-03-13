import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import * as serviceWorker from './serviceWorker'

import App from './App'
import Ingredients from './components/ingredients/Ingredients'
import Recipes from './components/recipes/Recipes'
import DetailedRecipe from './components/recipes/DetailedRecipe'

import './index.css'

const routing = (
    <Router>
        <div>
            <Route path="/" exact component={App} />
            <Route path="/ingredients" exact component={Ingredients} />
            <Route path="/recipes" exact component={Recipes} />
            <Route path="/recipes/:id" component={DetailedRecipe} />
        </div>
    </Router>
)

ReactDOM.render(routing, document.getElementById('root'))
serviceWorker.unregister()
