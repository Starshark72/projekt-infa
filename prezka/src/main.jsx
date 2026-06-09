import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

/* ─── PrimeReact: motyw + core ─── */
import 'primereact/resources/themes/lara-dark-teal/theme.css';
import 'primereact/resources/primereact.min.css';

/* ─── PrimeIcons ─── */
import 'primeicons/primeicons.css';

/* ─── PrimeFlex (utility classes + grid) ─── */
import 'primeflex/primeflex.css';

/* ─── PrimeReact config ─── */
import { PrimeReactProvider } from 'primereact/api';

/* ─── Globalne style aplikacji (po PrimeReact, żeby nadpisywać) ─── */
import './index.css';

import App from './App.jsx';

const primeReactConfig = {
  ripple: true,
  inputStyle: 'outlined',
};

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <PrimeReactProvider value={primeReactConfig}>
      <App />
    </PrimeReactProvider>
  </StrictMode>,
);
