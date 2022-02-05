import React from 'react';


function TodoList(props){

return(
  props.text.map((listItems, index) => {

    return(<li key = {index}>
    <input type="checkbox"></input>{listItems.text}</li>)
  })
);

}

export default TodoList


