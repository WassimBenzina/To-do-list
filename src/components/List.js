import SingleTask from './SingleTask'

function List({tasks,handledelete,handleDone}){
return(
    <div style={{display:"flex",justifyContent:"space-around"}}>
        {
            tasks.map((elt)=>
            (<SingleTask task={elt} handledelete={handledelete} handleDone={handleDone} />)
        )}
    </div>
);
}
export default List;