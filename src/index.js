import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import WebFont from 'webfontloader';
import Container from './elements/Container'
import {BrowserRouter, Route, Routes} from 'react-router-dom';
//import Login from './components/Login';
//import RecoverPassword from './components/RecoverPassword';
//import UserRegistration from './components/UserRegistration';
import {Helmet} from "react-helmet";
import favicon from './images/Icon.png';

WebFont.load({
  google: {
    families: ['Work Sans:400,500,700', 'sans-serif']
  }
});
const Index = () =>{
  return (
    <div>
        <Helmet>
          <meta charSet="utf-8" />
          <title>Pakal</title>
          <link rel="shortcut icon" href={favicon} type="image/x-icon"/>
        </Helmet>
         <BrowserRouter>
           <Container>
            <Routes>
                <Route path="/index" element={<App/>}/>
            </Routes>
           </Container>
         </BrowserRouter>
    
    </div>
  );
}

ReactDOM.render(<React.StrictMode><Index /><App /></React.StrictMode>,document.getElementById('root'));
