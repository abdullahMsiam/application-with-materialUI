import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import AboutUs from './components/Pages/aboutUs/AboutUs';
import Settings from './components/Pages/settings/Settings';
import MainPage from './components/Pages/MainPage/MainPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainPage />
  },
  {
    path: '/about-us',
    element: <AboutUs></AboutUs>
  },
  {
    path: '/settings',
    element: <Settings></Settings>
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
