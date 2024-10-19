import { setupCounter } from './counter.js';
import javascriptLogo from './javascript.svg';
import './style.css';
import viteLogo from '/vite.svg';

document.querySelector('#app').innerHTML = ``;

setupCounter(document.querySelector('#counter'));
