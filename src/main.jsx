import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Home from './Pages/Home.jsx';
import Register from './Pages/Register.jsx';
import Login from './Pages/Login.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  }, {
    path: '/register',
    element: <Register />
  },
  {
    path: '/login',
    element: <Login />
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
