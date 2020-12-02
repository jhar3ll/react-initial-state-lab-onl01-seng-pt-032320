// your ImageSlider code here!
import React, { Component } from 'react';

class ImageSlider extends Component {
  state = {
      currentSlideIndex: 0
  }

    render() { 
        const slideText = `I am on slide ${this.state.currentSlideIndex}`

        return (
            <div>
                {slideText}
            </div>
        )
    }
}
 
export default ImageSlider;