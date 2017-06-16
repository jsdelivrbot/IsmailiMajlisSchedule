import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import App from './components/app';
import Header from './components/Header';

ReactDOM.render(
	<div>
		<Header headerText="Ismaili Majlis Schedule (Chicagoland)" />
    	<App />
    </div>
  , document.querySelector('.container'));