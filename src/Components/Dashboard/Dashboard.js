import React, {Component} from 'react'
import axios from 'axios'

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
          console.log(res.data)
          this.setState({username: res.data.username})
        }).catch(err => {
          console.log('err:', err)
        })
        this.render()
      }
    })
  }

  render(){
    return(
      <>
        <div>
          <h1>Dashboard</h1>
          <h3>Username: {this.state.username}</h3>
        </div>
        <img src="http://localhost:4200/favicon.ico" alt=""/>
      </>
    )
  }
}