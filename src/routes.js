import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Auth from './Components/Auth/Auth'
import Dashboard from './Components/Dashboard/Dashboard'
import Form from './Components/Form/Form'
import Nav from './Components/Nav/Nav'
import Post from './Components/Post/Post'

export default (
  <Switch>
    <Route exact path='/' component={Dashboard}/>
    <Route exact path='/auth' component={Auth}/>
    <Route exact path='/form' component={Form}/>
    <Route exact path='/nav' component={Nav}/>
    <Route exact path='/post' component={Post}/>
  </Switch>
)