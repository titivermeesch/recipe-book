import React, { Component } from 'react'
import axios from 'axios'

import TopNav from '../navigation/TopNav'
import Recipe from './Recipe'

import './recipe.css'

class Recipes extends Component {
    constructor() {
        super()
        this.state = {
            recipes: [],
            value: ''
        }
        this.handleSearch = this.handleSearch.bind(this)
    }

    componentWillMount() {
        axios
            .get('../../data/recipes.json')
            .then(response => {
                this.setState({
                    recipes: response.data.recipes
                })
            })
            .catch(error => console.log(error))
    }

    handleSearch(event) {
        this.setState({ value: event.target.value })
        this.state.recipes.map(recipe => {
            if (recipe.name.toLowerCase().includes(event.target.value)) {
                document.getElementById(recipe.name).style.display = 'block'
            } else {
                document.getElementById(recipe.name).style.display = 'none'
            }
        })
    }

    render() {
        const recipes = this.state.recipes
        let recipesBlock = ''
        if (recipes.length > 0) {
            recipesBlock = recipes.map(recipe => {
                return (
                    <Recipe
                        id={recipe.id}
                        name={recipe.name}
                        ingredients={recipe.ingredients}
                        persons={recipe.persons}
                    />
                )
            })
        }

        return (
            <div>
                <TopNav />
                <input
                    type="text"
                    placeholder="Rechercher une recette"
                    className="recipes-search"
                    value={this.state.valInput}
                    onChange={this.handleSearch}
                />
                <div className="recipes">{recipesBlock}</div>
            </div>
        )
    }
}

export default Recipes
