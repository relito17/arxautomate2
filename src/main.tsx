import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.tsx';
import './styles/base.css';
import './styles/animations.css';
import './styles/components/navbar.css';
import './styles/components/services.css';
import './styles/components/process.css';
import './styles/components/contact.css';

// Corrige a URL se for um redirecionamento do GitHub Pages
const urlParams = new URLSearchParams(window.location.search);
const redirectPath = urlParams.get("redirect");
if (redirectPath) {
  window.history.replaceState(null, "", redirectPath);
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <App />   
    </BrowserRouter>
  </StrictMode>
);
