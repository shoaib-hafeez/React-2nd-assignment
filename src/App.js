import logo from './logo.svg';
import './App.css';
import Smbutton from './components/Smbutton';
import Card from './components/Card';
import { useState } from "react";


  export default function App() {
    const [inp, setinp] =useState([])
    const [inputdata, setInputdata] =useState({
      name: "",
      rollNo: ""
    })
  
    function handle (e){
      setInputdata({...inputdata,[e.target.name]:e.target.value})
  
    }
    let {name,rollNo}=inputdata
    function addVal(){
      setinp([...inp,{name,rollNo}])
      console.log(inputdata)
      console.log(inp)
      setInputdata({name:"", rollNo:""})
  
    }
  const cardObj =[{
    id:101,
    name: "shoaib",
    Age: 19,
    Institute: "Jawan pakistan",
    isActive: true
  },
  {
    id:102,
    name: "shoaib hafeez",
    Age: 19,
    Institute: "Jawan pakistan",
    isActive: false
  },
 
  {
    id:103,
    name: "yasir",
    Age: 16,
    Institute: "Jawan pakistan",
    isActive: true
  },
  {
    id:104,
    name: "arsal",
    Age: 16,
    Institute: "Jawan pakistan",
    isActive: false
  }]
  return (
    <div>
      {cardObj.map((x,i)=>{
        return(<div key ={i}>
          <Card id={x.id} name ={x.name} age={x.Age} institute = {x.Institute} isActive = {x.isActive==true}/>
          </div>)
      }

      )}
       <h1>Components</h1>
      <Smbutton buttonClick ={() => console.log("shoaib hafeez")} buttonValue = "Add"/>
      <Smbutton buttonClick ={() =>console.log("shoaib4 hafeez")} buttonValue = "Delete"/>
      <Smbutton buttonClick ={() => console.log("shoaib3 hafeez")} buttonValue = "Edit"/>
      <Smbutton buttonClick ={() =>console.log("shoaib2 hafeez")} buttonValue = "Clear"/>
      <Smbutton buttonClick ={() => console.log("shoaib1 hafeez")} buttonValue = "Save"/>
      
      <div className='app'>
        <input type='text' name='name' value={inputdata.name} onChange={handle} placeholder='Enter Your Name'/> <br/><br/>
        <input type='text' name='rollNo' value={inputdata.rollNo} onChange={handle} placeholder='RollNUM'/><br/><br/>

        <button onClick={addVal}>Add</button> <br/>
        <table border={1} width="30%" cellPadding={10}>
          <tbody>

          <tr>
            <th>Name</th>
            <th>RollNUM</th>
          </tr>

          {
            inp.map((x,i)=>{
              return (<tr key ={i}>
                <td>{x.name}</td>
                <td>{x.rollNo}</td>
              </tr>
            )
            })
          }
          </tbody>
        </table>

      </div>
    </div>
    
  
  );
}
