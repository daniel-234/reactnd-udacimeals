import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import { createStore, applyMiddleware, compose } from 'redux';
import reducer from './reducers';
import { Provider } from 'react-redux';

const logger = store => next => action => {
  console.group(action.type)
  console.info('dispatching', action)
  let result = next(action)
  console.log('next state', store.getState())
  console.groupEnd(action.type)
  return result
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION__COMPOSE__ || compose

const store = createStore(
	reducer,
	composeEnhancers(
		applyMiddleware(logger)
	)
)

// We can wrap our main root component inside of Provider
// and then, instead of passing store to App, we want to
// pass it to Provider.
ReactDOM.render(
	<Provider store={store}>
	{
		/* Now whenever any of the components that App renders
		   (or the App itself) needs access to the Redux store
		   or needs to dispatch an action, it will be able to
		   do that more easily.
	   */
	}
		<App />
	</Provider>,
	document.getElementById('root')
);
registerServiceWorker();
