import { use } from "react";
import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';

export default function TodoList(){
    let [todos,setTodos]=useState([{task : "sample-task",id:uuidv4(),isDone:false}]);
    let [newTodo,setNewTodo]=useState("");

    let addNewTask=()=>{
       // console.log("we have to add new task in todo");
       setTodos((prevTodos)=>{
            return[...todos,{task:newTodo,id:uuidv4(),isDone:false}];
       });
       setNewTodo("");
    };

    let updateTodoValue=(event)=>{
       //console.log(event.target.value);
       setNewTodo(event.target.value);
    };
    let deleteTodo=(id)=>{
       setTodos((prevTodos)=>todos.filter((prevTodos)=>prevTodos.id!=id));
    };
    let markAllDone=()=>{
        //updating arrays use map  function
        setTodos((prevTodos)=>
            prevTodos.map((todo)=>{
            return{
                ...todo,
                isDone:true,
            };
          })
        ); 
    };
    let markAsDone =(id)=>{
        setTodos((prevTodos)=>
            prevTodos.map((todo)=>{
            if(todo.id==id){
            return{
                ...todo,
                isDone:true,
            };
        }else{
            return todo;
        }
          })
        ); 
    };
    return(
        <div>
            <input 
             placeholder="add a task"
             value={newTodo} 
             onChange={updateTodoValue}
             ></input>
            <br></br> <br></br>
            <button onClick={addNewTask}>Add Task</button>
            <br></br>
            <br></br>
            <br></br>
            
            <hr></hr>
        <h4>Tasks Todo</h4>
        <ul>
            {todos.map((todo)=>(
                   <li key={todo.id}>
                    <span style={todo.isDone ? {textDecoration:"line-through"}:{}}>
                        {todo.task}</span>
                    &nbsp;&nbsp;&nbsp;
                    <button onClick={()=>deletedTodo(todo.id)}>delete</button>
                    <button onClick={()=>markAsDone(todo.id)}>mark As Done</button>
                    </li>
                ))
            }
        </ul>
        <br></br>
        <button onClick={markAllDone}>mark All as Done</button>
        </div>
        );
}