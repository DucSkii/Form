import React, { Component } from 'react'
import './Content.scss'
import Username from './Username/Username'
import Email from './Email/Email'
import Password from './Password/Password'

class Content extends Component {

  constructor(props) {
    super(props)

    this.state = {

    }
  }

  render() {
    return (
      <div className='base'>
        <Username />
        <Email />
        <Password />
      </div>
    )
  }
}

export default Content
