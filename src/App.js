import './App.css';
import image1 from './452140-PG1YNB-36.jpg';
import image2 from './time-organization-concept-with-planner-close-up.jpg';
import { List } from './List';

function App() {
  return (
    <div className="App">
      <div className='container'>
      <img src={ image2 } width='300px' alt='image1'/>
      </div>
      <div className='container'>
      <h1>To Do List</h1>
      </div>
      <List/>
      <div className='container'>
      <img src={ image1 } width='300px' alt='image2'/>
      </div>
      
    </div>
  );
}

export default App;
