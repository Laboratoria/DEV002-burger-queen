import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';
import {
	BrowserRouter
  } from "react-router-dom";
import './index.css';
import { NavBar } from './components/NavBar';

ReactDOM.render(
	<BrowserRouter>
		<App />
	</BrowserRouter>,

	document.getElementById('root')
);
