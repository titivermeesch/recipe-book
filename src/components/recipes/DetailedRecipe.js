import React, { Component } from 'react'
import axios from 'axios'

import TopNav from '../navigation/TopNav'

import './detailedrecipe.css'

class DetailedRecipe extends Component {
    constructor() {
        super()
        this.state = {
            recipes: [],
            recipeId: null
        }
    }

    componentDidMount() {
        const { match } = this.props
        if (match) {
            const recipeId = match.params.id
            axios
                .get('../../data/recipes.json')
                .then(response => {
                    this.setState({
                        recipes: response.data.recipes,
                        recipeId: recipeId
                    })
                })
                .catch(error => console.log(error))
        }
    }

    render() {
        const id = this.props.match.params.id
        const name = this.state.recipes.map(res => {
            if (res.id == id) {
                return <div>{res.name}</div>
            }
        })
        const ingredients = this.state.recipes.map(res => {
            if (res.id == id) {
                return res.ingredients.map(res => {
                    return (
                        <div>
                            {res.quantity} {res.name}
                        </div>
                    )
                })
            }
        })

        const steps = this.state.recipes.map(res => {
            if (res.id == id) {
                return res.steps.map(res => {
                    return (
                        <div className="step">
                            <div className="id">{res.id}</div>
                            <div className="text">{res.info}</div>
                        </div>
                    )
                })
            }
        })

        const persons = this.state.recipes.map(res => {
            if (res.id == id) {
                return <div>{res.persons}</div>
            }
        })

        return (
            <div>
                <TopNav />
                <div className="recipe-title">{name}</div>
                <div className="recipe-content-holder">
                    <div className="steps-holder">{steps}</div>
                    <div className="ingredients-holder">{ingredients}</div>
                </div>
            </div>
        )
    }
}

export default DetailedRecipe
