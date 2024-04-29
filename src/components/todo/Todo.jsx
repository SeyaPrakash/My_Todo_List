import React from 'react';
import { ButtonBox, Button, TodoContainer } from './style.js';

const Todo = ( {todo, onDeleteHanlder, onCompleteHandler} ) => {
  
  const cancelHandler = () => ( todo.isDone ? "Cancel" : "Done" );
  
  return (
    <TodoContainer>
      <h2>{todo.title}</h2>
      {todo.body}
      <ButtonBox>
        <Button Style="border: 2px solid red" onClick={() => onDeleteHanlder(todo.id)}>Delete</Button>
        <Button Style="border: 2px solid green" onClick={() => onCompleteHandler(todo.id)}>{cancelHandler()}</Button>
      </ButtonBox>
    </TodoContainer>
  )
}

export default Todo;
