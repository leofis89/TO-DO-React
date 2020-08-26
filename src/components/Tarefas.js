import React, { useState, useEffect } from 'react';
import { Form, Row, Col, Button } from 'react-bootstrap';
import axios from 'axios';

const Tarefa = () => {
	const [tarefa, setTarefa] = useState('');
	const [dados, setDados] = useState([]);

	useEffect(() => {
		async function fetchData() {
			const { data } = await axios.get('http://localhost:3001/tarefas');
			console.log(data);
			setDados(data);
		}
		fetchData();
	}, []);

	const submit = (e) => {
		e.preventDefault();
		axios
			.post('http://localhost:3001/tarefas', {
				tarefa: tarefa,
			})
			.then((response) => {
				console.log(response);
			});
	};

	const alteraValor = (e) => {
		setTarefa(e.target.value);
		console.log(e.target.value);
	};

	return (
		<div>
			<Row>
				<Col xs={4}>
					<Form>
						<Form.Group controlId="formBasicEmail">
							<Form.Label>Digite sua tarefa:</Form.Label>
							<Form.Control
								type="text"
								placeholder="Tarefa"
								value={tarefa}
								onChange={alteraValor}
							/>
						</Form.Group>
						<Button onClick={submit}> Cadastrar </Button>
					</Form>
				</Col>
			</Row>
			<Row>
				<Col xs={6}>
					{dados.map((dado) => (
						<ul key={dado.id}>
							<li>{dado.tarefa} </li>
						</ul>
					))}
				</Col>
			</Row>
		</div>
	);
};

export default Tarefa;
