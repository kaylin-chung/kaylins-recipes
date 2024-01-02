import * as React from 'react'
import Header from '../components/header'
import RecipeGrid from '../components/recipeGrid'
import { SnackCards } from '../components/snacksUtils.js'

// Step 2: Define your component
const Snacks = () => {
  return (
    <div style={{ background: '#C6E0E5' }}>
      <Header/>
      <RecipeGrid title="snack ideas" recipe={SnackCards}/>
    </div>
  )
}

export const Head = () => <title>Snacks</title>

// Step 3: Export your component
export default Snacks
