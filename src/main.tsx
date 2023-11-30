import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { createRoot } from 'react-dom/client';

import App from './App';
import '@public/globalCss/tailwind.css';

const containers = document.getElementById('root')!;
const root = createRoot(containers);

root.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
);