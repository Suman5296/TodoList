import React, { useState } from "react";
import "./App.css";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import Tooltip from "@mui/material/Tooltip";
import List from './List.jsx';

function App() {
  const [list,setlist] = useState('');
  const [newitem,setnewitem] = useState([])



  const listEvent = (event) =>{ 
    setlist(event.target.value);
  }
  const Addlist = () =>{
    setnewitem((prev)=>{
      return [...prev,list]
    })
    setlist('')
  }

  return (
    <>
      <div className="main_div">

        <h1>ToDo List</h1>

        <div className="inputField">
        <input placeholder="Enter Your ToDos" type="text" className="input" value={list} onChange={listEvent}/>
        
        <Tooltip title="Add" arrow>
          <Button className="Add"  onClick={Addlist}>
            <AddIcon />
          </Button>
        </Tooltip>

        <hr />
        </div>
          
        <div className="todolist">
          <ul>
            {newitem.map((val,index)=>{
              return <List text={val} key={index}/>
            })}
          </ul>
        </div>
      </div>
    </>
  );
}

export default App;


