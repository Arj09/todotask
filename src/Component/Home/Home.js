import React, { useState } from "react";
import './Home.css'

export const Home = ()=>{
    const [data , setData] = useState([])
    const [task, setTask] = useState()
    const [deleteCount, setdeleteCount] = useState(0)
  
    const [Iscomplete, setIscomplete] = useState()

    const handleSumbit = (e)=>{
        e.preventDefault();
        setData( data=>([...data, task]))
        setTask('')
    }
    const totaltask = data.length

    const handleAllclear =()=>{
        setData([])
        console.log(data)
    }
    const handleDelete = (e)=>{
        if(e.target.value){
            let arr = data;
            arr.splice(e.target.value, 1);
            setData([...arr]);
            setdeleteCount(deleteCount +1)
        }
        


    }
    console.log(Iscomplete)

    console.log(data)

    return(
        <>
        <div className="title">Todo Application</div>
        <form className="action" onSubmit={handleSumbit}>
                <input className="inputtask" placeholder="Today, i eat apple"  value={task} onChange={(e)=>setTask(e.target.value)} required />
                <button >Add Task</button>
        </form>
        <div className="task">
                <div className="totaltask"> {deleteCount} task complete</div>
                <div className="completetask">Total task : {totaltask} </div>

        </div>
        
        <div className="data">
        <button className="clear" onClick={handleAllclear}> Clear Completed</button>
            {
                data.map((data, index)=>{
                    return(
                        <ul className="items" key={index}>
                            
                            <li style={{width: '70%'}} className="item">{data}</li>
                            <li style={{width: '20%'}}   className="item" ><input   type="checkbox"  value={index} onChange={handleDelete}   /></li>
                        </ul>
                    )
                })
            }
        </div>
       
        
        
        </>
    )
}