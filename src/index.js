import React from "react";
import ReactDOM from 'react';
import App from './App';


// document.querySelector('#root').innerHTML = `<h1>From index.js</h1>`;

// ReactDOM.render(<App/>,document.querySelector('#root'));

let root=ReactDOM.createRoot(document.getElementById('root'));
root.render(<App/>);
console.log("My first react app");