import './App.css';

import Fullchart from "./component/Fullchart"
import axios from 'axios'
import {useState,useEffect} from 'react'

import SearchIcon from '@material-ui/icons/Search';
import TextField from '@material-ui/core/TextField';


function App() {
  const[search,setSearch] = useState('');
  const[array,setArray] = useState([]);
  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users").then(res => setArray (res.data)).catch(err => console.log(err)) 
}, [])
const filterRobots = array.filter((robot) =>
robot.name.toLowerCase().includes(search.toLowerCase())||robot.email.includes(search)
);
  return (
    <div className="App">
      <header className="App-header">
       
        <h3>
        RoBoFriends
        </h3>
        <TextField
        
        id="input-with-icon-textfield"
        onChange={(e)=>setSearch(e.target.value)}
        InputProps={{
          startAdornment: (
            
              <SearchIcon />
            
          ),
        }}
      />
      
      
       </header>
        <Fullchart cardDataArray={filterRobots} />
        
     
    </div>
  );
}


export default App;
