import React from "react";
import { useState, useEffect } from 'react';
import axios from 'axios';


function App3  () {
    const[data,setData] = useState([]);
    const[formData,setFormData]=useState({name:'',description:''});

    useEffect(()=>{
        fetchData();

    },[]);

    const fetchData =()=>{
        axios.get("http://127.0.0.1:8000/app/")
        .then((res)=>{
        setData(res.data);
        console.log(res.data)
    })
        .catch((err)=>{
            console.logp(err.message);
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post("http://127.0.0.1:8000/app/", formData)
          .then((res) => {
            console.log('Data successfully submitted:', res.data);
            setData([...data, res.data]);
            setFormData({ name: '', description: '' });
          })
          .catch((err) => {
            console.error('Error submitting data:', err);
          
          });
    };
    const handleInputChange = (e) => {
    const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
        console.log(formData)
      };
    const handleUpdate=(id,a,b)=>{
      console.log(id)
      
    const updateData=
    {
      name:a,
      description:b

    };
    console.log(updateData)
      axios.put(`http://127.0.0.1:8000/app2/1/`,updateData)
      .then((res) => {
      console.log('Data successfully submitted:', res.data);
      fetchData();
    })
      .catch((err)=>{
      console.log('error message;',err.data);
      });

    }

    const handleDelete=(id)=>{
      
      axios.delete(`http://127.0.0.1:8000/app2/${id}`)
      .then((res) => {
      console.log('Data successfully submitted:', res.data);
      fetchData();
    })
      .catch((err)=>{
      console.log('error message;',err.data);
      });
    }
return (
    <div>
        <form onSubmit={handleSubmit}>
            <input type='text' placeholder="add your name" name="name"
            value={formData.name} onChange={handleInputChange}></input>
            <input type='text' placeholder="description" name="description" 
             value={formData.description} onChange={handleInputChange}>
            </input>
            <button type='submit'>submit</button>
        </form>
        <ul>
          {data.map((x)=>{
            return(
              <li>
                <h1>{x.name}</h1>
                <h1>{x.description}</h1>

              </li>
            );
          })}
        </ul>

  
    {data.map((item)=>{
      return(
        <li key={item.id}>
          <h1>{item.name}</h1>
          <h2>{item.description}</h2>
          <h3>{item.data}</h3>
          <button onClick={()=>handleUpdate(item.id,formData.name,formData.description)}>update</button>
          <button onClick={()=>handleDelete(item.id)}>delete</button>

        </li> 
   )})}


  

        
  
  

    </div>
  )
}

export default App3