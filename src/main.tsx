import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import CheckoutPage from './pages/CheckoutPage.tsx';
import ListingPage from './pages/ListingPage.tsx';
import TransationStatus from './pages/TransationStatus.tsx';

const router = createBrowserRouter([
  {
    path: "/",
    Component: App, 
    children: [
      {
        path: "/",
        Component: ListingPage ,
      },
    
      {
          path: "/checkout",
          Component: CheckoutPage
      },
      {
        path: "/transaction-sucess",
        Component: TransationStatus
      }
    ]
  },
  

]);


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    
    <RouterProvider router={router} />
    
  </StrictMode>,
)
