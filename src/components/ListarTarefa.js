import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ListarTarefa = () => {
	return (
		<div>
			<h1>Listar Tarefa</h1>
			<Button variant="primary" Link="/cadastrar">
				<Link to={'/cadastrar'}> Cadastrar tarefa</Link>
			</Button>
		</div>
	);
};

export default ListarTarefa;
