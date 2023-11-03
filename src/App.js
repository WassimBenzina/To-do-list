import {useState} from 'react';
import List from './components/List';
import 'bootstrap/dist/css/bootstrap.min.css';
import {data} from './components/Data'
import AddTask from './components/AddTask'
import background from "./assets/image.jpg";
function App() {
  
  const [tasks,setTasks]=useState(data);
  const [lastId, setLastId] = useState(3);
  const handledelete=(id)=> {
    setTasks(tasks.filter((elt)=> !elt.done ));
  } 
  const handleDone=(id)=>{
    setTasks(tasks.map((elt)=>{
      if(elt.id===id) {
        return {...elt,done:!elt.done};
      }
      else return elt;
    } ));
  }
  const handleAdd=(task)=>{
    const newlist=[...tasks,task];
    setLastId(lastId + 1);
    setTasks(newlist);
  }
  return (
    <div style={{ backgroundImage: `url(${background})` ,backgroundSize: 'cover',backgroundRepeat: 'no-repeat',border:"1px solid ",minHeight:"100vh"}}>
    <div className="App">
      <AddTask handleAdd={handleAdd} lastId={lastId} />
      <List tasks={tasks} handledelete={handledelete} handleDone={handleDone} />
    </div>
    </div>
  );
}

export default App;
