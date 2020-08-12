import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import CadastrarTarefa from './components/CadastrarTarefa';
import ListarTarefa from './components/ListarTarefa';

function Routes() {
	return (
		<BrowserRouter>
			<Switch>
				<Route path="/" exact component={ListarTarefa} />
				<Route path="/cadastrar" component={CadastrarTarefa} />
			</Switch>
		</BrowserRouter>
	);
}

export default Routes;
