import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import { createStore } from 'redux';
import reducer from './reducers';
import { Provider } from 'react-redux';

const store = createStore(
	reducer,
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
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
