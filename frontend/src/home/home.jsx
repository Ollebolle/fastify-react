import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './home.sass'


export default class Live extends Component {
  render() {
    return (
      <div>
        <h1>Home</h1>
        <Link to="/about">About</Link>
      </div>
    )
  }
}

