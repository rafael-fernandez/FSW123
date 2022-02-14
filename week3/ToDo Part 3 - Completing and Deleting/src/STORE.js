import {v4 as uuidv4} from 'uuid';

const listOfTodos = [
    {
        id: uuidv4(), 
        text: "Complete Cerego", 
        isCompleted: false
    },

    {
        id: uuidv4(), 
        text: "Complete weekly", 
        isCompleted: false
    },

    {
        id: uuidv4(), 
        text: "Read articles", 
        isCompleted: false
    },

    {
        id: uuidv4(), 
        text: "Complete projects", 
        isCompleted: false
    },

      {
        id: uuidv4(), 
        text: "Complete Slack", 
        isCompleted: false
    },

       {
        id: uuidv4(), 
        text: "Week completed", 
        isCompleted: false
    }

   

]

export default listOfTodos;