import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function SingleTask({task,handledelete,handleDone}){
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const deleteTask=()=>{
        handledelete(task.id);
    }
    const doneTask=()=>{
        handleDone(task.id);
    }
    return (
        <>
          {['Light'].map((variant) => (
            <Card
              bg={variant.toLowerCase()}
              key={variant}
              text={variant.toLowerCase() === 'light' ? 'dark' : 'white'}
              style={{ width: '18rem' }}
              className="mb-2"
            >
             
              <Card.Body >
                <Card.Title style={{textDecoration: task.done ? 'line-through' : 'none',cursor: 'pointer',}}>{task.text}</Card.Title>
                <Card.Text>
                <div style={{display:"flex",flexDirection:"column",gap:"20px"}}>
                <div style={{display:"flex",gap:"15px"}}>
                <Form.Check aria-label="option 1" onClick={doneTask} checked={task.done} />
                <span>done</span>
                </div>
                <span>{task.date.getDate()}</span>
                <span>{months[task.date.getMonth()]}</span>
                <span>{task.date.getFullYear()}</span>
                <Button variant="danger" style={{width:"30%"}} onClick={deleteTask}>Delete</Button>
                </div>
                </Card.Text>
              </Card.Body>
            </Card>
          ))}
        </>
      );
}
export default SingleTask;