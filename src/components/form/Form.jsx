import React from 'react';
import { Button, FormStyled, Label, Input } from './style.js';

const Form = ({ onChangeHandlerInput, title, body, onClickHandler }) => {
  return (
    <FormStyled>
      <Label>Title</Label>
      <Input type="text" name="title" onChange={onChangeHandlerInput} value={title}></Input>
      <Label>Content</Label>
      <Input type="text" name="body" onChange={onChangeHandlerInput} value={body}></Input>
      <Button onClick={onClickHandler}>Add</Button>
    </FormStyled>
  )
}

export default Form;
