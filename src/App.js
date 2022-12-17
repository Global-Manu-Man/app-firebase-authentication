import React from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from "./elements/Header";
import Error404 from "./components/Error404";
import Login from './components/Login';
import RecoverPassword from './components/RecoverPassword';
import UserRegistration from './components/UserRegistration';
import MainContainer from './elements/MainContainer';
import ElementMain from './elements/ElementMain';
//import styled from 'styled-components';

const App =()=>{
  return (
    <BrowserRouter>
			<MainContainer>
				<Header />
				<ElementMain>
					<Routes>
					    <Route path="*"                element={<Error404/>} />
						<Route path="/iniciar-sesion"  element={<Login/>} />
						<Route path="/crear-cuenta"    element={<UserRegistration/>} />
						<Route path="/recuperar"       element={<RecoverPassword/>} />
					</Routes>
				</ElementMain>
			</MainContainer>
		</BrowserRouter>
  );
}

export default App;