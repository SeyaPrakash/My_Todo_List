import React from 'react';
import { ListBox1, ListBox2, ListContainer } from './style.js';
import Todo from '../todo/Todo.jsx';

const List = ( { todos, setTodos } ) => {

  const onDeleteHanlder = (id) => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  };

  const onCompleteHandler = (id) => {
    const newTodos = todos.map(
      (todo) => todo.id === id ? 
      { ...todo, isDone: !todo.isDone} : 
      {...todo});
    setTodos(newTodos);
  };

  return (
    <ListContainer>
      <h2 className='list-title'>Working.. 🔥</h2>
      <ListBox1>
        {todos.map(
          (todo) => (!todo.isDone ? 
          <Todo todo={todo} 
                key={todo.id} 
                setTodos={setTodos} 
                onDeleteHanlder={onDeleteHanlder} 
                onCompleteHandler={onCompleteHandler} /> 
        : null))} 
      </ListBox1>
      <h2 className='list-title'>Done..! 🎉</h2>
      <ListBox2>
        {todos.map(
          (todo) => (todo.isDone ? 
          <Todo todo={todo} 
                key={todo.id} 
                setTodos={setTodos} 
                onDeleteHanlder={onDeleteHanlder} 
                onCompleteHandler={onCompleteHandler} /> 
        : null))}
      </ListBox2>
    </ListContainer>
  )
}

export default List;
