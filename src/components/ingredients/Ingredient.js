import React, { Component } from 'react'
import { Pie } from 'react-chartjs-2'

import './ingredient.css'

class Ingredient extends Component {
    render() {
        const {
            name,
            type,
            calories,
            gras,
            sucre,
            proteinnes,
            water
        } = this.props

        const data = {
            labels: ['Gras', 'Sucre', 'Proteinnes', 'Eau'],
            datasets: [
                {
                    backgroundColor: 'rgba(179,181,198,0.2)',
                    borderColor: 'rgba(179,181,198,1)',
                    pointBackgroundColor: 'rgba(179,181,198,1)',
                    pointBorderColor: '#fff',
                    data: [gras, sucre, proteinnes, water]
                }
            ]
        }

        const options = {
            legend: {
                display: false
            }
        }

        return (
            <div className="ingredient-styler" id={name}>
                <div className="name">
                    {name} <span className="type">{type}</span>
                </div>
                <Pie data={data} options={options} />
                <div className="calories">{calories} Cal/100g</div>
            </div>
        )
    }
}

export default Ingredient
