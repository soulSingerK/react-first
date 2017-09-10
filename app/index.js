import React from 'react'
import { render } from 'react-dom'
import Hello from './components/hello'
import { AppContainer } from 'react-hot-loader'

render( 
  <AppContainer >
    <Hello/> 
  </AppContainer> , document.getElementById('app'))

if (module.hot) {
  module.hot.accept('./Components/hello', () => {
    const NewHello = require('./Components/hello').default;
    render( 
      <AppContainer>
        <NewHello />
      </AppContainer>,
      document.getElementById('app')
    )
  })
}