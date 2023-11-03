import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {useState} from 'react';

function AddTask({handleAdd,lastId}){
    const [newTask, setNewTask] = useState({
      id: "",
      text: "",
      done: false,
      date: "",
    });
    const handleChange = (e) => {
        setNewTask({
          ...newTask,
          text: e.target.value,
          date: new Date(),
          id:lastId
        });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        if (newTask.text.trim() !== "") {
            handleAdd(newTask);
            setNewTask({
            id: "",
            text: "",
            done: false,
            date: "",
          });
        }
      };

    return(
        <div style={{minHeight:"30vh"}}>
            <div style={{display:"flex",flexDirection:"column",width:"50%",margin:"auto",marginTop:"3%"}}>
            <Form.Control type="text"
          placeholder="Enter your task"
          value={newTask.text}
          onChange={handleChange}/>
            <Button variant="primary" style={{width:"6%",marginTop:"3%"}} type="submit" onClick={handleSubmit}>Add</Button>
            </div>
        </div>
    );
}
export default AddTask;


  





  