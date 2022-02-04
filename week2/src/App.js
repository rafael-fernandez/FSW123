
import Card from './Card'
import "./Card.css";





function App() {

  return (

  <div className ="Boxes">

  <Card
  title = 'Title 1'
  subtitle = 'Sub Title 1'
  description = 'Hello World 1'
  backgroundColor = 'red'
  width = '300px'

/>

  <Card
  title = 'Title 2'
  subtitle = 'Sub Title 2'
  description = 'Hello World 2'
  backgroundColor = 'orange'
  width = '300px'

/>

  <Card
  title = 'Title 3'
  subtitle = 'Sub Title 3'
  description = 'Hello World 3'
  backgroundColor = 'yellow'
  width = '300px'

/>

  <Card
  title = 'Title 4'
  subtitle = 'Sub Title 4'
  description = 'Hello World 4'
  backgroundColor = 'green'
  width = '300px'

/>
 <> <h4>FSW-123 Week2 "Boxes Made with Props" Rafael Fernandez</h4></>
  </div>

  );
  
}

export default App;
