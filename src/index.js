import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import store from "./components/store";
import App from './App';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
import './Footer.css';
import './App.css'

ReactDOM.render(
	<Provider store={store}><App store={store} /></Provider>, 
	document.getElementById('root'));

store.subscribe(() => console.log(store.getState()));
