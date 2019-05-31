import React from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'
import Auth from './Components/Auth/Auth'
import Dashboard from './Components/Dashboard/Dashboard'
import Form from './Components/Form/Form'
import Nav from './Components/Nav/Nav'
import Post from './Components/Post/Post'

export default (
  <Switch>
    <Route exact path='/auth' component={Auth}/>
    <Route path='/form' component={Form}/>
    <Route path='/nav' component={Nav}/>
    <Route path='/post' component={Post}/>
    <Route exact path='/:id' component={Dashboard}/>
    <Route exact path='/' render={() => (
      <Redirect to='/auth'/>
    )}/>
  </Switch>
)