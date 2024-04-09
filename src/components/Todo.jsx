import { useEffect, useRef, useState } from 'react'
import './CSS/Todo.css'
import TodoItems from './TodoItems';

let count = 0;
const Todo = () => {
  const [todos, setTodos] = useState([]);
  const inputRef = useRef(null);
  const add = () => {
    setTodos([...todos, {no:count++,text:inputRef.current.value,display:""}])
    inputRef.current.value = "";
    localStorage.setItem("todos_count", count)
  }

  //when todos get updated then this function gets executed
  useEffect(()=>{
    setTimeout(()=>{
      console.log(todos);
      //create local storage to store our todos
      //to store into local storage, we have to sonvert todos into string
      localStorage.setItem("todos",JSON.stringify(todos));
    },100)

  }, [todos])

  useEffect(()=>{
    setTodos(JSON.parse(localStorage.getItem("todos")));
    count = localStorage.getItem("todos_count");
  }, [])

  

  

  return (
    <div className='todo'>
      <div className="todo-header">To-Do List</div>
      <div className="todo-add">
        <input ref={inputRef} type="text" placeholder='Add Yout task' className='todo-input'></input>
        <div onClick={()=>{add()}} className="todo-add-btn">ADD</div>
      </div>

      <div className="todo-list">
        {todos.map((item, index)=>{
          return <TodoItems key={index} no={item.no} display={item.display} text={item.text}></TodoItems>
        })}
      </div>
    </div>
  )
}

export default Todo
