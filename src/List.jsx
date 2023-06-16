import React from "react";
import {useState} from "react"
import DeleteIcon from '@mui/icons-material/Delete';

const List = (propse) => {
    
    var t = false;
    const [line,setline] = useState(true);
    const deleteitem = () => {   
        setline(false);
    }
     return (
        <>
            <div className="item">
                <span className="deletebtn" style={{backgroundColor: line ? "red" : "#1aa0b8"}}><DeleteIcon onClick={deleteitem}/></span>
                <li style={{textDecoration: line ? "line-through" : "none"}}>{propse.text}</li>
            </div>
        </>
    ) 
}

export default List;