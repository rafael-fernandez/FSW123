import './styles.css'
import Store from './Store'
import TodoList from './TodoList'


function App() {

  return (

    <div className='week2'>
    
        <h1>List of To Do's</h1>  
        <ul> 
        <TodoList  text = {Store}/>   
        </ul>    
        <h4>FSW-123 Week2 "Adding Props Rafael Fernandez</h4>

   </div>

  );
  
}

export default App;
