// File: src/index.js
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

function Index() {
  return (
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}

ReactDOM.render(<Index />, document.getElementById('root'));
