import { useState,useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import Axios from 'axios';
import Header from '../src/components/Header';
import Sidebar from '../src/components/Sidebar';
import Post from '../src/components/Post';
import Members from '../src/components/Members';
function App() {
  const [data,setData] = useState([]);
  useEffect(()=>{
    Axios.get('http://localhost:8000/posts')
    .then((response)=>{
      setData(response.data);
    })
  },[])
    return (
    <div className="App">
      <Header/>
      <hr/>
      <div className='container'>

      <Sidebar />
      
      <div className='box'>
      
      <ul>
        {data.map((d)=>(
           
          <li key={d.id}><Post name={d.post_name} image={d.file_name} description={d.description}/></li>
        ))}
      </ul>
        <h1>No posts yet</h1>
      </div>
      
      <Members/>
      
      
      </div>
      
  </div>
)}

export default App;
