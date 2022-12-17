import React from 'react';
import styled from 'styled-components';
import styles from '../styles/navbar.css';





const UserRegistration = () => {
    return (
        <div class="--registro-login-recuperar">
		    
		    <h2>¡Bienvenido a Penta!</h2>
            <br></br>
			<br></br>
            <Titulo> Titulo </Titulo>
            <h5 class="mb-3">Ingresa tus credenciales para acceder a tu cuenta.</h5>
                 <form class="mb-5">
	                 <div class="d-flex">
			               <div class="col-12 px-0">
			               	<p class="mb-2"> Correo electrónico : </p>
			                   <span class="form-group">	
								<input type="email" class="form-control" name="email" placeholder="Ej-juanperez@gmail.com" />
			               	   </span>
			               </div>
		             </div>
					 <div>
						<div>
							<p>Contraseña :</p>
							<span>
								<div>
								<a><span></span></a>
								</div>
								<input type="password" class="form-control mb-0  --password" placeholder="*********" name="..."/>
							</span>
						</div>
					 </div>
					 <div>
						<div>
						¿No tienes una cuenta? 
						<a href="#">Regístrate</a>
						</div>
						<div>
						<a class="btn btn-primary mb-0" >Ingresa ahora</a>
						</div>
					 </div>
	             </form>
    </div>
       

    );
}
const Titulo = styled.h5`
	margin-bottom: 10px;
	font-size: 24px;
	text-align:center;
    background-color: red;
	
`;
export default UserRegistration;