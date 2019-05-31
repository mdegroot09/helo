import React, {Component} from 'react'
import {Link} from 'react-router-dom'

export default class Dashboard extends Component {
  constructor(){
    super()
    this.state = {
      username: '',
    }
  }

  render(){
    return(
      <>
        <h1>Other Shapes</h1>
        <h2>I'm an h2</h2>
        <div className='shape1'>Shape 1
          <div className='shape3'>Shape 3</div>
        </div>
        <div className='shape2'>Shape 2</div>
        {/* <div>
          <h4>1</h4>
          <h4>2</h4>
          <h4>3</h4>
        </div> */}
        <ul>
          <li>
            <ol>
              <li>Hi</li>
              <li>Hello</li>
            </ol>
          </li>
          <li>hey</li>
        </ul>
        <div>
          <p>div > p</p>
        </div>
        <span>div + span</span>
        <a href="google.com">Go to Google</a>
        <Link to='/stuff'>
          <button>Other Stuff</button>
        </Link>
      </>
    )
  }
}