import React, { Component } from 'react'
import './Password.scss'
import classnames from 'classnames'
import ReactDOM from 'react-dom'

class Password extends Component {
  constructor(props) {
    super(props)

    this.state = {
      password: '',
      passwordShown: false,
      passwordConfirm: '',
    }
  }

  updatePasswordConfirm = (e) => {
    this.setState({
      passwordConfirm: e.target.value,
    })
  }

  updatePassword = (e) => {
    console.log(this.state, 'state')
    this.setState({
      password: e.target.value,
    })
  }

  togglePasswordShown = () => {
    console.log(this.state)
    const { passwordShown } = this.state
    this.setState({
      passwordShown: !passwordShown
    })
  }

  correctPassword = () => {
    const correct = (<div></div>)
    ReactDOM.render(correct, document.getElementById('confirm'))
  }

  incorrectPassword = () => {
    const errorMessage = (
      <div className='Password-Incorrect'>The passwords do not match, please enter same password</div>
    )
    ReactDOM.render(errorMessage, document.getElementById('confirm'))
  }

  checkCorrect = () => {
    const { password, passwordConfirm } = this.state
    console.log('checked')
    if (password !== passwordConfirm) {
      console.log('incorrectPassword')
      this.incorrectPassword()
    } else if (password === passwordConfirm) {
      console.log('correctPassword')
      this.correctPassword()
    }
  }

  checkNothing = () => {
    const { password, passwordConfirm } = this.state
    if (password === '' && passwordConfirm === '') {
      console.log('nothing')
      return null
    } else if (password !== '' && passwordConfirm !== '') {
      this.checkCorrect()
    }
  }
  // if i click from one password box to the other error pops
  render() {
    const { password, passwordShown, passwordConfirm } = this.state
    const toggleClassName = classnames('Password-Icon', {
      'Password-Icon-False': passwordShown
    })
    return (
      <div className='Password'>
        <input className='Password-First'
          placeholder='Password'
          type={passwordShown ? 'type' : 'password'}
          value={password}
          id='passwordField'
          onChange={(e) => this.updatePassword(e)}
          onBlur={this.checkNothing}></input>
        <input className='Password-Confirm'
          placeholder='Confirm Password'
          type={passwordShown ? 'type' : 'password'}
          value={passwordConfirm}
          id='confirmPasswordField'
          onChange={(e) => this.updatePasswordConfirm(e)}
          onBlur={this.checkNothing}></input>
        <i className={toggleClassName}
          onClick={this.togglePasswordShown}>Press</i>
        <div id='confirm'></div>
      </div>
    )
  }
}

export default Password
