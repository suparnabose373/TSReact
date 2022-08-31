import { useState } from 'react';
import './App.css';
import Greet from "./components/Greet";
import {Person} from "./components/Person";
import {Heading} from "./components/Heading";
import {Oscar} from "./components/Oscar";
import {Counter} from "./components/Counter";
import { ThemeContextProvider } from "./components/context/ThemeContext";
import { UserContextProvider } from "./components/context/UserContext";

function App() {
  const [toggle, setToggle] = useState(false);
  const personName = {
    first: 'Bruce',
    last: 'Wayne'
  }

  const personList = [
    {
      first: 'Bruce',
      last: 'Wayne'
    },
    {
      first: 'Clark',
      last: 'Kent'
    },
    {
      first: 'Princess',
      last: 'Diana'
    },
  ]

  const handleToggle = () => {
    setToggle(!toggle);
  }

  return (
    <div className="App">
      <ThemeContextProvider><UserContextProvider>
      <Oscar><Heading styles={{border: '1px solid black', padding: '1rem'}}>COMPANY INC LTD</Heading></Oscar>
      <Greet name="Suparna" isLoggedIn={true} status="loading" 
      // value='' handleChange={(event) => {console.log(event.target.value)}}
      handleClick={(e, id) => {
        console.log("Button Clicked",e,id);
      }}/><br />
      <div><Counter /></div><br />
      <button onClick={handleToggle} > Toggle View </button>
      {/* If I pass anything other than status="loading" or "success" 
      typeScript will give a error. since this is declared in the Greet component*/}
      {toggle && <Person name={personName} names={personList}/>}
      </UserContextProvider></ThemeContextProvider>
    </div>
  );
}

export default App;
