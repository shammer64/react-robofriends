import React from 'react';

class Card extends React.Component {
  render() {
    const robot = this.props;
    return (
      <div className='bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
        <img alt='robot' src={`https://robohash.org/${robot.id}?200x200`} />
        <h2 className='tc'>{robot.name}</h2>
        <p className='tc'>{robot.email}</p>
      </div>
    )
  }
}

export default Card;