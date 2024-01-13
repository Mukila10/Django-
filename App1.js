import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios';

function App1() {
    const [data,setData]=useState([])
    useEffect(()=>{
    axios.get('http://127.0.0.1:8000/api/').then((res)=>{setData(res.data)})

  }
  ,[])
  return (

    <div>
      <ul>
      {data.map((x)=>{
        return (
          <li>
            <h1>{x.stu_name}</h1>
            <h3>{x.stu_dob}</h3>
          </li>
        )
      })}
    </ul> 
    </div>
  )
}

export default App1