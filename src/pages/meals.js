import * as React from 'react'
import Header from '../components/header'
import RecipeGrid from '../components/recipeGrid'
import { MealCards } from '../components/mealsUtils.js'

// Step 2: Define your component
const Meals = () => {
  return (
    <div style={{ background: '#C6E0E5' }}>
      <Header/>
      <RecipeGrid title="meal ideas" recipe={MealCards}/>
    </div>
  )
}

export const Head = () => <title>Meals</title>

// Step 3: Export your component
export default Meals
