import React, { Component } from 'react'
import '../styles/App.css'
import GetImageButton from './GetImageButton'
import GetImageForm from './GetImageForm'
import ImageDisplay from './ImageDisplay'


class App extends Component {
  render() {
    return (
      <div>
        <GetImageForm />
        <GetImageButton />
        <ImageDisplay />
      </div>

    )
  }
}

export default App
