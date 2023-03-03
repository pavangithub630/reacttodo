import React,{useEffect} from 'react'


function TodoDisplay(props) {
  console.log(props.todoItem)
  return (
    <div className='container m-3 todo-display-item-div'>
      <div className=" border border-primary todo-display-inner-div " >
        <div className='todo-display-item-div-child1'>
        <p className='p-2 ' style={{marginLeft:20}}>
          {props.todoItem}
        </p></div>
        </div>
        
    </div>
  )
}



export default TodoDisplay
