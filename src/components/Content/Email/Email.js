import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import './Email.scss'

class Email extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: ''
    }
  }

  validateEmail = (e) => {
    const email = e.target.value
    if (email === '') {
      this.error()
      return
    }
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const validate = re.test(String(email).toLowerCase());
    if (!validate) {
      this.invalid()
    }
  }

  updateEmail = (e) => {
    console.log(this.state, 'state')
    this.setState({
      email: e.target.value
    })
    if (e.target.value === '') {
      this.error()
    }
    if (e.target.value !== '') {
      this.fixed()
    }
  }

  fixed = () => {
    console.log('fixed')
    const nothing = (
      <div></div>
    )
    ReactDOM.render(nothing, document.getElementById('emailError'))
  }

  invalid = () => {
    console.log('invalid')
    const errorMessage = (
      <div className='Email-Error'>
        You have entered an invalid email address
      </div>
    )
    ReactDOM.render(errorMessage, document.getElementById('emailError'))
  }

  error = () => {
    console.log('error')
    const errorMessage = (
      <div className='Email-Error'>
        You must enter an email address
      </div>
    )
    ReactDOM.render(errorMessage, document.getElementById('emailError'))
  }

  render() {
    return (
      <div>
        <input className='Email'
          type='text'
          placeholder='Email Address'
          value={this.state.email}
          onChange={(e) => this.updateEmail(e)}
          onBlur={(e) => this.validateEmail(e)}></input>
        <div className='Email-Example'>Example email - example@gmail.com</div>
        <div id='emailError'></div>
      </div>
    )
  }
}

export default Email
