import React, { useState, useRef } from 'react';
import Header from '../header/Header.jsx';
import Form from '../form/Form.jsx';
import List from '../list/List.jsx';
import LayoutContainer from './style.js';

const Layout = () => {
  const [inputs, setInputs] = useState({
    title: '',
    body: ''
  });

  const onChangeHandlerInput = (e) => {
    const { value, name } = e.target;
    setInputs({
      ...inputs,
      [name]: value
    })
    console.log(e.target.name)
  };

  const [todos, setTodos] = useState([
    {
      id: 0, 
      title: 'Learn React', 
      body: 'Let\'s learn React basics!', 
      isDone: false
    },
    {
      id: 1,
      title: 'Learn React', 
      body: 'Let\'s learn React basics!', 
      isDone: true
    }
  ]);

  const { title, body } = inputs;

  const nextId = useRef(2);

  const onClickHandler = (e) => {
    e.preventDefault();
    setTodos([...todos, {
      id: nextId.current,
      title: title,
      body: body,
      isDone: false,
    }]);
    nextId.current +=1;
    setInputs({
      title: '',
      body: ''
    });
  };

  return (
    <LayoutContainer>
      <Header />
      <Form onChangeHandlerInput={onChangeHandlerInput} 
            onClickHandler={onClickHandler}
            title={title}
            body={body}
      />
      <List todos={todos} 
            setTodos={setTodos}  
      />
    </LayoutContainer>
  );
}

export default Layout;
