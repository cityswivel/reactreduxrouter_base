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

import Test from './views/Test';
import Header from './views/Header';
const history = createHistory()
const middleware = routerMiddleware(history)
const loggerMiddleware = createLogger()
const store = createStore(
  combineReducers({
    ...reducers,
    router: routerReducer
  }),
  applyMiddleware(middleware,loggerMiddleware)
)

ReactDOM.render(
	<Provider store={store}>	
		<ConnectedRouter history={history}>
			<div>
				<Header />
				<Route exact path="/" component={App}/>
				<Route path="/test/" component={Test}/>
			</div>
		</ConnectedRouter>
	</Provider>,

document.getElementById('root'));
registerServiceWorker();
