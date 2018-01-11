import React from 'react'
import Home from './home/home'
import About from './about/about'

const routes = [
  {
    url: '/',
    title: 'Home',
    component: Home
  },
  {
    url: '/about',
    title: 'About',
    component: About
  }
]

export default routes
