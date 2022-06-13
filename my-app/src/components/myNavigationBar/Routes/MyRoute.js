import React from 'react'
import Home from '../Pages/Home'
import About from '../Pages/About'
import Register from '../Pages/Register'
import Contact from '../Pages/Contact'
import {Route} from 'react'
export default function MyRoute() {
  return (
    <div>
      <Route exact path="/" component={Home}></Route>
      <Route path="/about" component={About}></Route>
      <Route path="/register" component={Register}></Route>
      <Route path="/contact" component={Contact}></Route>
    </div>
  )
}
