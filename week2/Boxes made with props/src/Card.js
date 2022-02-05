import React from 'react';

function Card(props) {

  return (

         <div className= "card" style={{width:props.width, backgroundColor:props.backgroundColor}}>
            <h2>{props.title}</h2>
            <h3>{props.subtitle}</h3>
            <hr />
            <h4>{props.description}</h4>


        </div>
  );
}

export default Card;
