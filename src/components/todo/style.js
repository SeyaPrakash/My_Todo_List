import styled from "styled-components";

const TodoContainer = styled.div `
  width: 270px;
  border: 4px solid teal;
  border-radius: 12px;
  padding: 12px 24px 24px 24px;
`

const ButtonBox = styled.div `
  display: flex;
  gap: 10px;
  margin-top: 24px;
`

const Button = styled.button `
  border:none;
  width: 50%;
  height: 40px;
  border-radius: 8px;
  cursor: pointer;
  background-color: #fff;
`

export {
  TodoContainer,
  ButtonBox,
  Button
}
