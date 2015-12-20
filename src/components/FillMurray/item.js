import React from 'react';

export default React.createClass({
  getInitialState() {
    return {
      src: '',
      loaded: false,
      error: false
    }
  },


  componentDidMount() {
    let [width, height] = this.randomDimensions(this.props.dimensions);


    let url = `https://www.fillmurray.com/${width}/${height}`;

    this.setState({
      src: url
    })
  },

  randomDimensions(array) {
    return [this.shuffle(array)[0], this.shuffle(array)[0]];
  },

  // knuth shuffle http://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
  shuffle(array) {
    let currentIndex = array.length, temporaryValue, randomIndex ;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  },

  imageLoaded() {
    this.setState({
      loaded: true
    })
  },

  imageErrored() {
    this.setState({
      error: 'Error loading image'
    })
  },

  render() {
    let loadedState = this.state.loaded;
    let className = '';

    if (loadedState) {
      return (
        <li className='murray__face'>
          <img
            src={this.state.src}
            onLoad={this.imageLoaded}
            onError={this.imageErrored}
            className={className}
            placeholder='BILL MURRAY'
            alt='Bill Murray'
          />
        </li>
      )
    }
    else {
      return (
        <li className='murray__face'>
          <div className='three-quarters-loader'></div>
          <img
            src={this.state.src}
            onLoad={this.imageLoaded}
            onError={this.imageErrored}
            placeholder='BILL MURRAY'
            alt='Bill Murray'
          />
          <p>{this.state.error}</p>
        </li>
      )
    }
  }
})
