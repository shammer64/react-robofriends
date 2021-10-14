import React from 'react';
import Card from './Card';

class CardList extends React.Component {
  render() {
    return (
      <div>
        {this.props.robots.map((robot, i) => {
          return <Card key={i} 
            id={robot.id} 
            name={robot.name} 
            username={robot.username} 
            email={robot.email} />
        })}
      </div>
    )
  }
}

export default CardList;