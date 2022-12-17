import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const HeaderRight = () => {
    return (

        <ContenedorLeft>
        <Menu>
    			<NavLink to="/iniciar-sesion">Español (MX)</NavLink>
				<NavLink to="/crear-cuenta">MXN</NavLink>
				<NavLink to="/recuperar">Centro de ayuda</NavLink>
		</Menu>
        </ContenedorLeft>


    );
}
const ContenedorRight = styled.header`
	text-align: right;
	margin-bottom: 40px;
`;

const ContenedorLeft = styled.header`
	text-align: left;
	margin-bottom: 40px;
`;

const Menu = styled.nav`
	a {
		text-decoration: none;
		color: #165168;
		margin: 0 10px;
		font-size: 13px;
	}

	a:hover {
		color: #19168;
	}

	a.active {
		border-bottom: 2px solid #165168;
		padding-bottom: 3px;
	}
`;

export default HeaderRight;