// 1) Import react libraries
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
// 2) get reference to the div with id
const el = document.getElementById('root');

// 3) tell react to take control of that element
const root = ReactDOM.createRoot(el);

// 4) show conmponent on the screen
root.render(<App />);