import React from 'react'
import {Container} from 'react-bootstrap'
import Footer from './components/Footer'
import Header from './components/Header'
import HomseScreen from './screens/HomseScreen'


import {BrowserRouter as Router, Route } from 'react-router-dom'
import ProductScreen from './screens/ProductScreen'


const App = () => {

  return (
    <Router>
    <Header/>
    <main className="py-3">
      <Container>
        <Route path='/' component={HomseScreen} exact/>
        <Route path='/product/:id' component={ProductScreen}/>
  
      </Container>
    
    </main>
    <Footer/>
   

    </Router>
  )
}

export default App
