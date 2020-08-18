import React, { Component } from 'react'
import './Header.scss'
import PropTypes from 'prop-types'

class Header extends Component {
  static propTypes = {
    title: PropTypes.string,
    subTitle: PropTypes.string,
  }

  constructor(props) {
    super(props)

    this.state = {

    }
  }

  render() {
    const { title, subTitle } = this.props

    return (
      <div className='Header'>
        <div className='Header-title'>{title}</div>
        <div className='Header-subTitle'>{subTitle}</div>
      </div>
    )
  }
}

export default Header
