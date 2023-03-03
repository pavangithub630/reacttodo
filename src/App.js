import './App.css';
import TodoDisplay from './components/TodoDisplay';
import TodoInput from './components/TodoInput';
import { useState } from 'react';

function App() {
  const [todoItems, setTodoItem] = useState([]);
  const handleGetData=(data)=>{

    setTodoItem(oldArray => [...oldArray, <TodoDisplay key={oldArray.length} todoItem={data}/>]);
    console.log(todoItems.length);
  }
  return (
    <div className='container'>

      <div className='center-container'>
        <TodoInput onGetData={handleGetData} />
      </div>
      <div >
      <h3 style={{marginLeft:30}}>Todo List</h3>
        {todoItems}
      </div>
    </div>
  );
}

export default App;
