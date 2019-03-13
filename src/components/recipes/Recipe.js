import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { Pie } from 'react-chartjs-2'

import './recipe.css'

class Recipe extends Component {
    constructor() {
        super()
        this.state = {
            ingredients: []
        }
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

    render() {
        const { name, ingredients, id, persons } = this.props
        let calories = 0

        const ingredientsList = ingredients.map(recipeIngredient => {
            return this.state.ingredients.map(ingredient => {
                if (
                    recipeIngredient.name.toLowerCase() ===
                    ingredient.name.toLowerCase()
                ) {
                    if (isNaN(recipeIngredient.quantity)) {
                        if (recipeIngredient.quantity == '') {
                            calories = calories
                        }
                        if (recipeIngredient.quantity.includes('g')) {
                            const temp = recipeIngredient.quantity.substring(
                                0,
                                recipeIngredient.quantity.length - 1
                            )
                            calories += (ingredient.calories * temp) / 100
                        }
                    } else {
                        calories +=
                            ingredient.calories * recipeIngredient.quantity
                    }
                    return (
                        <div>
                            {recipeIngredient.quantity} {recipeIngredient.name}
                        </div>
                    )
                }
            })
        })

        return (
            <Link to={`/recipes/${id}`} className="recipe-styler" id={name}>
                <div className="name">{name}</div>
                <div>{ingredientsList}</div>
                <div className="calories">{calories} Cal</div>
                <div className="persons">{persons}</div>
            </Link>
        )
    }
}

export default Recipe
