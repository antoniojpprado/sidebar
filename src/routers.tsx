import React, { FC } from 'react';
import { Route, Switch } from 'react-router-dom';
import Demonstrative from './pages/Demonstrative';
import Home from './pages/home';
import Informe from './pages/Informe';
import Presentation from './pages/Presentation';

const Routers: FC = () => {
	return (
    <Switch>
      <Route path="/home" component={Home} exact></Route>
      <Route path="/demonstrative" component={Demonstrative} exact></Route>
      <Route path="/informe" component={Informe} exact></Route>
      <Route path="/presentation" component={Presentation} exact></Route>
    </Switch>
	);
};

export default Routers;
