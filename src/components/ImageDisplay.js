import React, {Component} from 'react'

export default class ImageDisplay extends Component {

  render () {
    console.log('yolo photos', this.props.photos)
    let photosArray = this.props.photos
    let photoCard = photosArray.map((imgURL) => {
      return (
        <li key={imgURL.id}>
          <img src={imgURL.img_src} />
        </li>
      )
    })
    return (
      <div className="imgDisplay">
        <ul>
          <li>{photoCard}</li>
        </ul>
      </div>
    )
  }

}
