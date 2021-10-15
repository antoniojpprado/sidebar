import React, { FC } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Routers from './routers';
import Sidebar from './components/Sidebar';

const App: FC = () => {
	return (
		<BrowserRouter>
			<Sidebar />
			<Routers />
		</BrowserRouter>
	);
};

export default App;
