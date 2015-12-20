import React from 'react';
import MurrayList from './list';

export default React.createClass({
  getInitialState() {
    return {
      images: this.createMurray()
    }
  },

  createMurray(number=0) {
    let array = []

    for (let i = 0; i < number; i++) {
      array.push(null);
    }

    return array;
  },

  moreMurray() {
    let currentImages = this.state.images;
    let moreMurray = this.createMurray(20);

    this.setState({
      images: currentImages.concat(moreMurray)
    })
  },

  lessMurray() {
    // why less murray?
    this.setState({
      images: this.createMurray()
    })
  },

  render() {
    return (
      <div>
        <h1 className='text-center'>Pictures of Bill</h1>
        <MurrayList images={this.state.images}/>
        <div className='flex-it center-it wrap-it'>
          <button className='btn-murray' onClick={this.moreMurray}>more murray</button>
          <button className='btn-murray' onClick={this.lessMurray}>less murray</button>
        </div>
      </div>
    )
  }
})
