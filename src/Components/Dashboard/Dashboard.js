import React, {Component} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'

export default class Dashboard extends Component {
  constructor(){
    super()
    this.state = {
      username: '',
    }
    this.componentWillMount = this.componentWillMount.bind(this)
  }

  componentWillMount(){
    // if not logged in, reroute to login screen, otherwise render axios call
    axios.get('/auth/checkForSession').then(res => {
      if(!res.data.user){
        this.props.history.push('/auth')
      } else {
        let {id} = this.props.match.params
        axios.get(`/api/dashboard/${id}`).then(res => {
          this.setState({username: res.data.username})
        }).catch(err => {
          console.log('err:', err)
        })
        this.render()
      }
    })
  }

  addId = (e) => {
    let arr = document.getElementsByClassName('blueBox')
    let button = document.getElementsByClassName('displayFloat')
    if (arr[0].id){
      arr[0].id = '' 
      button[0].innerText = 'Show'
    } else {
      arr[0].id = 'display' 
      button[0].innerText = 'Hide'
    }
    console.log('arr[0]:', arr[0])
  }

  render(){
    return(
      <>
        <h1>Dashboard</h1>
        <h3>Username: {this.state.username}</h3>
        <img className='reactLogo' src="http://localhost:4200/favicon.ico" alt=""/>
        <div>
          <div className='boxModel'></div>
          <div className='boxModel blueBox'></div>
        </div>
        <button onClick={(e) => this.addId(e)} className='displayFloat' id=''>Show</button>
        <Link to='/shapes'>
          <button >Other Shapes</button>
        </Link>
      </>
    )
  }
}