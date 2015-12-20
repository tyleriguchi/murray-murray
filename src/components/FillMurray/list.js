import React from 'react';
import Murray from './item';

const DIMENSIONS = [200, 300, 400, 500, 600, 700, 800, 900, 1000];

export default React.createClass({
  render() {
    return (
      <ul className='murray__list'>
        {this.props.images.map( (item, index) => {
          return <Murray dimensions={DIMENSIONS} key={index}/>
        })}
      </ul>
    )
  }
})
