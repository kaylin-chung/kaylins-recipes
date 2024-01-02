import * as React from 'react'
import Header from '../components/header'
import PhotoGrid from '../components/photogrid'

// Step 2: Define your component
const IndexPage = () => {
  return (
    <div>
      <Header/>
      <PhotoGrid/>
    </div>
  )
}

// You'll learn about this in the next task, just copy it for now
export const Head = () => <title>Home Page</title>

// Step 3: Export your component
export default IndexPage