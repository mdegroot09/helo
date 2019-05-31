import React from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'
import Auth from './Components/Auth/Auth'
import Dashboard from './Components/Dashboard/Dashboard'
import Shapes from './Components/Shapes/Shapes.js'
import Stuff from './Components/Stuff/Stuff.js'
import Post from './Components/Post/Post'

export default (
  <Switch>
    <Route exact path='/auth' component={Auth}/>
    <Route path='/shapes' component={Shapes}/>
    <Route path='/stuff' component={Stuff}/>
    <Route path='/post' component={Post}/>
    <Route exact path='/:id' component={Dashboard}/>
    <Route exact path='/' render={() => (
      <Redirect to='/auth'/>
    )}/>
  </Switch>
)