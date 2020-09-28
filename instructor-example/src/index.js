import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App titleName="Mohammad Reza Baghban"/>, document.getElementById('root'));
registerServiceWorker();
