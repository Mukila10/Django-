import React from "react";
import { useState, useEffect } from 'react';
import axios from 'axios';

function App2() {
    const[data,setData] = useState([]);
    const[formData,setFormData]=useState({stu_name:'',stu_dob:''});

    useEffect(()=>{
        fetchData();

    },[]);

    const fetchData =()=>{
        axios.get("http://127.0.0.1:8000/api/")
        .then((res)=>{
        setData(res.data);
    })
        .catch((err)=>{
            console.log(err.message);
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post("http://127.0.0.1:8000/api/", formData)
          .then((res) => {
            console.log('Data successfully submitted:', res.data);
            setData([...data, res.data]);
            setFormData({ stu_name: '', stu_dob: '' });
          })
          .catch((err) => {
            console.error('Error submitting data:', err);
    });
      };
    const handleInputChange = (e) => {
    const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
      };
return (
    <div>
        <form onSubmit={handleSubmit}>
            <input type='text' placeholder="add your name" name="stu_name"
            value={formData.stu_name} onChange={handleInputChange}></input>
            <input type='date' placeholder="dob" name="stu_dob" value={formData.stu_dob} onChange={handleInputChange}>
            </input>
            <button type='submit'>submit</button>
        </form>
    </div>
  )
}

export default App2