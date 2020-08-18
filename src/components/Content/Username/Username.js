import React, { Component } from 'react'
import './Username.scss'
import ReactDOM from 'react-dom'

class Username extends Component {
  constructor(props) {
    super(props)
    this.state = {
      inputValue: ''
    }
  }

  updateValue = (e) => {
    console.log(e.target.value, 'text')
    this.setState({
      inputValue: e.target.value
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
    ReactDOM.render(nothing, document.getElementById('error'))
  }

  error = () => {
    console.log('error')
    const errorMessage = (
      <div className='Username-Error'>
        You must enter a username
      </div>
    )
    ReactDOM.render(errorMessage, document.getElementById('error'))
  }

  render() {
    return (
      <div>
        <input className='Username'
          placeholder='Username'
          text='text'
          value={this.state.inputValue}
          onChange={(e) => this.updateValue(e)}
          onBlur={(e) => this.updateValue(e)}></input>
        <div id='error'></div>
      </div>
    )
  }
}

export default Username
