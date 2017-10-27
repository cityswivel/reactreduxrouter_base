import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './views/App';
import registerServiceWorker from './registerServiceWorker';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import createHistory from 'history/createBrowserHistory'
import { Route } from 'react-router'
import { ConnectedRouter, routerReducer, routerMiddleware, push } from 'react-router-redux'
import reducers from './reducers'
import { createLogger } from 'redux-logger'
import thunk from 'redux-thunk';

import Tourpoints from './views/TourPoints';
import Events from './views/Events';
import Tours from './views/Tours';

import Header from './views/Header';
const history = createHistory()
const middleware = routerMiddleware(history)
const loggerMiddleware = createLogger()
const store = createStore(
  combineReducers({
    ...reducers,
    router: routerReducer
  }),
  applyMiddleware(middleware,loggerMiddleware,thunk)
)

ReactDOM.render(
	<Provider store={store}>	
		<ConnectedRouter history={history}>
			<div>
				<Header />
				<Route exact path="/" component={App}/>
				<Route path="/tourpoints/" component={Tourpoints}/>
				<Route path="/events/" component={Events}/>
				<Route path="/tours" component={Tours}/>
			</div>
		</ConnectedRouter>
	</Provider>,

document.getElementById('root'));
registerServiceWorker();
