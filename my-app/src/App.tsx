import React, { useEffect, useState } from 'react'
import TodoItem from './components/TodoItem'
import AddTodo from './components/AddTodo'
import { getTodos, addTodo, updateTodo, deleteTodo } from './API'

const App: React.FC = () => {
  const [todos, setTodos] = useState<ITodo[]>([])

  useEffect(() => {
    fetchTodos()
  }, [])

  const fetchTodos = (): void => { 
    getTodos()
    .then(({ data: { todos } }: ITodo[] | any ) => setTodos(todos))
    .catch((err:Error) => console.log(err))

  }
  
  const handleSaveTodo = (e: React.FormEvent, formData: ITodo):void => {
    e.preventDefault();
    addTodo(formData)

  }




}
























// import React from 'react';
// import logo from './logo.svg';
// import './API.ts';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.tsx</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
