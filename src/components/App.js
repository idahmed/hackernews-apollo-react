import React from 'react';
import '../styles/App.css';
import Header from './Header';
import { Switch, Route } from 'react-router-dom';
import LinksList from './LinksList';
import CreateLink from './CreateLink';

function App() {
	return (
		<div className='center w85'>
			<Header />
			<div className='ph3 pv1 background-gray'>
				<Switch>
					<Route exact path='/' component={LinksList} />
					<Route exact path='/create' component={CreateLink} />
				</Switch>
			</div>
		</div>
	);
}

export default App;
