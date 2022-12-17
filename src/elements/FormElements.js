import styled from 'styled-components';
import styles from '../index.css';


const FormContainer = styled.form`
margin-bottom: 3rem!important;
width: 30%;
max-width: 600px;
margin: 0 auto;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;


`;
const Input = styled.input`
width: 160%;
height: 30px;
margin: 0.5rem;
`;

const ButtonContainer = styled.div`
  padding: 0.5em 1em;
  border: none;
  background: rgb(100, 200, 255);
  cursor: pointer;
`;


export {FormContainer, Input, ButtonContainer};