import React from 'react';
import { render } from 'react-dom';
import './style.css';
import App from './components/App'
sessionStorage.setItem('isLogged', false);
render(<App />, document.getElementById('root'));
