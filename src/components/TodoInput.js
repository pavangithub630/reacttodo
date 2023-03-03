import React, { useState, useRef } from 'react'
import TodoDisplay from './TodoDisplay';

function TodoInput(props) {
    const inputRef = useRef(null);
    const [todoItem, setTodoItem] = useState('');
    let newTodo = "";
    // const handleChange=event=>{
    //     setTodoItem(event.target.value);
    //     console.log(todoItem);
    // }
    function handleClick() {
        newTodo = inputRef.current.value;
        console.log(newTodo);
        props.onGetData(newTodo) 
        inputRef.current.value="";
    }
    return (
        <div className='container'>
            <div className='m-3'>
                <h1>Todo List</h1>
            </div>
            <div className="input-group m-3">
                <input type="text" className="form-control" ref={inputRef} placeholder="Recipient's username"
                 aria-label="Recipient's username" aria-describedby="basic-addon2" />
                 
                <div className="input-group-append m-1">
                    <button className="btn btn-outline-secondary" type="button" onClick={handleClick}>Button</button>
                </div>
            </div>
        </div>
    )
}

export default TodoInput