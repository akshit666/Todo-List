import React, { createContext, useState } from 'react';
import './style.css';
import ListItems from './list_items';
export const Global=createContext()
export default function Todo() {
  const [data, setData] = useState('');
  const [todos, setTodos] = useState([]);
  // const [color,setColor]=useState("white")

  const addItems = (e) => {
    e.preventDefault();
    if (data !== '') { 
      setTodos([...todos, { text: data, completed: false }]);
      setData('');
    }
  };

  const completeTodo = (index) => {
    const updatedTodos = [...todos];
    updatedTodos[index].completed = !updatedTodos[index].completed;
    setTodos(updatedTodos);
  };

  const deleteTodo = (index) => {
    const updatedTodos = [...todos];
    updatedTodos.splice(index, 1) ;
    setTodos(updatedTodos);
  };
  
  // function togglebtn(){
  //   setColor(color=="white"?"black":"white")
  // }
  return (
    <> 
    <Global.Provider >
      <div className='Main'>
        <div className='Header'>
          <h1>My Todos</h1>
        </div>
        <div>
          <form onSubmit={addItems}>
            <input
              type='text'
              placeholder='What would you like to do?'
              value={data}
              onChange={(e) => setData(e.target.value)}
            />
            <br /> <br />
            <button type="submit">Add</button>
          </form>
          <div>
            <div className='secondContainer'>
              <h3 className='h3'>Todo List</h3>
              <ListItems arr={todos} completeTodo={completeTodo} deleteTodo={deleteTodo} />
             
            </div>
          </div>
        </div>
      </div>
      </Global.Provider>
    </>
  );
}