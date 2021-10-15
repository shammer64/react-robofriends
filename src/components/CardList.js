import React from 'react';
import Card from './Card';

const CardList = ({robots}) => {
    return (
      <div>
        {robots.map((robot, i) => {
          return <Card robot={robot} key={i}/>
        })}
      </div>
    )
}

export default CardList;