import './App.css'
import List from './List';
import ListItem from './ListItem';

function App() {
  const animals = [];
  const flowers = ["SunFlow", "Roses", "Blackrsose", "PinkRose"];
  // const flowers = [];

  return (
    
    <div className='flex'>
      <div>
      <h1>Animals: </h1>
      <List animals={animals} />
      </div>

      <div>
        <span> Flowers: </span>
        <ListItem flowers={flowers} />
      </div>
    </div>
    
  )
}

export default App

