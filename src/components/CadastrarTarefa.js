import React from 'react';
import { Button, Card, Row, Col } from 'react-bootstrap';

const CadastrarTarefa = () => {
	return (
		<div>
			<Row>
				<Col xs={4} sm={4} md={4}>
					<Card>
						<Button variant="primary"> Entrar </Button>
					</Card>
				</Col>
			</Row>
			<h1>Cadastro de tarefas</h1>
		</div>
	);
};
export default CadastrarTarefa;
