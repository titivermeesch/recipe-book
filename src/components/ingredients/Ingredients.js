import React, { Component } from 'react'
import axios from 'axios'

import TopNav from '../navigation/TopNav'
import Ingredient from './Ingredient'

import './ingredient.css'

class Ingredients extends Component {
    constructor() {
        super()
        this.state = {
            ingredients: [],
            value: ''
        }
        this.handleSearch = this.handleSearch.bind(this)
    }

    componentWillMount() {
        axios
            .get('../../data/ingredients.json')
            .then(response => {
                this.setState({
                    ingredients: response.data.ingredients
                })
            })
            .catch(error => console.log(error))
    }

    handleSearch(event) {
        this.setState({ value: event.target.value })
        this.state.ingredients.map(ingredient => {
            if (ingredient.name.toLowerCase().includes(event.target.value)) {
                document.getElementById(ingredient.name).style.display = 'block'
            } else {
                document.getElementById(ingredient.name).style.display = 'none'
            }
        })
    }

    render() {
        const ingredients = this.state.ingredients
        let ingredientsBlock = ''
        if (ingredients.length > 0) {
            ingredientsBlock = ingredients.map(ingredient => {
                return (
                    <Ingredient
                        key={ingredient.id}
                        name={ingredient.name}
                        type={ingredient.type}
                        calories={ingredient.calories}
                        gras={ingredient.gras}
                        sucre={ingredient.sucre}
                        proteinnes={ingredient.proteinnes}
                        water={ingredient.water}
                    />
                )
            })
        }

        return (
            <div>
                <TopNav />
                <input
                    type="text"
                    placeholder="Rechercher un ingrédient"
                    className="ingredient-search"
                    value={this.state.valInput}
                    onChange={this.handleSearch}
                />
                <div className="ingredients">{ingredientsBlock}</div>
            </div>
        )
    }
}

export default Ingredients
