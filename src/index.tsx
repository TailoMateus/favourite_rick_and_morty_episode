import React from 'react'
import ReactDOM from 'react-dom'
import Home from './components/Home'
import './index.css'
import { StoreProvider } from './redux/Store'

ReactDOM.render(
  <StoreProvider><Home /></StoreProvider>,
  document.getElementById('root')
)