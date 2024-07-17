import { useState } from 'react'

import './App.css'
import { Header } from './components/Header'
import { MainArticle } from './components/MainArticle'
import { NewContainer } from './components/NewContainer'
import { Article } from './components/Article'
import { ArticlesContainer } from './components/ArticlesContainer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <main className='px-4 pt-6'>
      <Header></Header>
      <div className='lg:flex lg:gap-8'>
      <MainArticle></MainArticle>
      <NewContainer></NewContainer>
      </div>
      <ArticlesContainer/>
      
      
    </main>
  )
}

export default App
