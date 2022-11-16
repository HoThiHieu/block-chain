import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './components/App';

const root = createRoot(document.getElementById('root')); // createRoot(container!) if you use TypeScript
root.render(<App />);

console.log('blockchain hello!');