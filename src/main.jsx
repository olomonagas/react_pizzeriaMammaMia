import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom';
import { CartProvider } from './context/CartProvider.jsx';
import { UserProvider } from './context/UserProvider.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <CartProvider>
        <UserProvider>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </UserProvider>
      </CartProvider>
  </StrictMode>,
)
