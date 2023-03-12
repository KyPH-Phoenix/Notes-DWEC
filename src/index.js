import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Root from "./routes/Root";
import ErrorPage from "./routes/ErrorPage";
import MainPage from "./routes/MainPage";
import Login from "./routes/Login";
import Register from "./routes/Register";
import Notes from "./routes/Notes";
import CreateNote from "./routes/CreateNote";
import EditNote from './routes/EditNote';

import './index.css';
import reportWebVitals from './reportWebVitals';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      { path: "/", element: <MainPage /> }, 
      { path: "/login", element: <Login /> },
      { path: "/signup", element: <Register /> },
      { path: "/notes", element: <Notes /> },
      { path: "/createNote", element: <CreateNote /> },
      { path: "/editNote/:noteId", element: <EditNote /> }
    ]
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);

reportWebVitals();