import { useRef, useState } from 'react';
import './App.css';

function App() {
  const [todoList, setTodoList] = useState([]);
  const itemRef = useRef();
  const onAddHandler = (event) => {
    event.preventDefault();
    setTodoList( (prevState) => ([...prevState, itemRef.current.value]))
  }
  return (
    <div className="centered list">
      <h1> Todo List</h1>
      <form className="centered list__form" onSubmit={onAddHandler}>
        <label htmlFor="item"> Nuevo Item </label>
        <input id="item" ref={itemRef} />
        <button type="submit"> Agregar </button>
      </form>
      <ul className="centered list__items">
        {todoList.map((item, index) => <li key={index}> {item} </li>)}
      </ul>
    </div>
  );
}

export default App;
