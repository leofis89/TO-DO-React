import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import CadastrarTarefa from './components/CadastrarTarefa';
import ListarTarefa from './components/ListarTarefa';
import AtualizarTarefa from './components/AtualizarTarefa';
import Tarefas from './components/Tarefas';

function Routes() {
	return (
		<BrowserRouter>
			<Switch>
				<Route path="/" exact component={Tarefas} />
				<Route path="/cadastrar" component={CadastrarTarefa} />
				<Route path="/atualizar" component={AtualizarTarefa} />
			</Switch>
		</BrowserRouter>
	);
}

export default Routes;
