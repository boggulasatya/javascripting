import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';
import TodoItem from './components/TodoItem';
function App() {
  const [items, setItems] = useState([]);
  useEffect(() => {
   fetch('http://localhost:8080/todos')
     .then(res => res.json())
     .then(data => {
      console.log(data);
       setItems([...data])
  })
  }, [])


  // const toDoItemComponentsArr = [];
  // for (const item of items) {
  //   toDoItemComponentsArr.push(<TodoItem key={item.id} task={item.task}/>)
  // }
  // const toDoItemComponentsArr = items.map((item) => {
  //   return <TodoItem key={item.id} id={item.id} task={item.task}/>
  // })
  const onDeleteItem = (id) => {
    console.log(`Deleting item with id: ${id}`);
  console.log('Current items:', items); // Log the current items state
  console.log(typeof id);
    setItems(prevItems  => prevItems.filter(item => item.id !== id));
  }
  const toDoItemComponentsArr = items.map((item) => {
    return <TodoItem key={item.id} id={item.id} task={item.task} onDelete={onDeleteItem}/>
  })

  return (
    <div className="App">
      <ul>
        {toDoItemComponentsArr}
        
      </ul>
    </div>
  );
  
}
export default App;