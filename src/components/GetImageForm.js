import React, {Component} from 'react'
import GetImageButton from './GetImageButton'
import ImageDisplay from './ImageDisplay'

const API_KEY = 'wyZ7PWq6tSshMVLh353C0q3PCRfWLDHilRP0kdiU'

export default class GetImageForm extends Component {
  constructor (props) {
    super(props)
    this.state = {
      rover: 'Curiosity',
      camera: 'fhaz',
      images: [],
      sol: ''
    }
    this.handleRover = this.handleRover.bind(this)
    this.handleCamera = this.handleCamera.bind(this)
    this.fetchRoverImage = this.fetchRoverImage.bind(this)
  }

  handleRover (event) {
    // setState is asynchronous
    this.setState(
      {
      value: event.target.value
      },
      () => {
      console.log(this.state)
      }
    )
  }

  handleCamera (event) {
    this.setState(
      {
      value: event.target.value
      },
      () => {
      console.log(this.state)
      }
    )
  }

  fetchRoverImage (event) {
    this.setState(
      {
        camera: this.state.camera,
        rover: this.state.rover,
        sol: this.state.sol
      }
    )

    let cam = this.state.camera
    let rove = this.state.rover
    let num = this.state.sol

    let imageUrl = `https://api.nasa.gov/mars-photos/api/v1/rovers/${rove}/photos?sol=${num}&camera=${cam}&api_key=${API_KEY}`

    fetch(imageUrl)
    .then(results => results.json())
    .then(data => {
      this.setState({
        image: data[i].img_src
      })
    })
  }

  render () {



    return (
      <div>
        <label htmlFor="rover">Rover</label>
        <select onChange={this.handleRover} id="rover" value={this.state.value}>
          <option value="Curiosity">Curiosity</option>
          <option value="Opportunity">Opportunity</option>
          <option value="Spirit">Spirt</option>
        </select>
        <label htmlFor="camera">Camera Type</label>
        <select onChange={this.handleCamera} id="rover" value={this.state.value}>
          <option value="fhaz">FHAZ (Front Hazard)</option>
          <option value="rhaz">RHAZ (Rear Hazard)</option>
          <option value="navcam">NAVCAM (Navigation Cam)</option>
        </select>
        <label htmlFor="sol">Martian Sol: 1000-2000</label>
        <input type="number" onChange={this.handleSol} max="2000" min="1000" value={this.state.value}/>
        <h1>Oh HAI!</h1>
        <GetImageButton />
        <ImageDisplay />
      </div>
    )
  }

}
