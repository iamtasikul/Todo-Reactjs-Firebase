import React,{useState,useEffect} from 'react';
import Todo from "./Todo";
import { Button ,FormControl,Input,InputLabel} from '@material-ui/core';
import db from './firebase';

import './App.css';
function App() {
  const [todos,setTodos]=useState([]);
  const [input, setInput] = useState('');

  //when the app loads, we need to listen to the database and fetch new todos as the get added/removed
  useEffect(() => {
    //this code here..fires when the app.js loads
    db.collection('todos').onSnapshot(snapshot=>{
    //console.log((snapshot.docs.map(doc=>doc.data().todo)));
      setTodos(snapshot.docs.map(doc=>doc.data().todo))
    })
  }, []);

  const addTodo=(event)=>{
    //this will fire off when we click the button
    event.preventDefault(); // will stop refresh
    console.log("addtodo initialized");
    setTodos([...todos,input]);
    setInput('');//clear up the input result after add todo button
  }

  return (
    <div className="App">
      <h1>Todo App</h1>
      <FormControl>
      <InputLabel>Write Your TODO</InputLabel>
      <Input value={input} onChange={event=>setInput(event.target.value)}/>
      </FormControl>
      <Button disabled={!input} variant="contained" color="secondary" type="submit" onClick={addTodo}>Add Todo</Button>
      
      <ul>
        {todos.map(todo=>(
          <Todo text={todo}/>
        //<li>{todo}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
