import AppLayout from "./components/layout/appLayout";
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Error from "./components/templates/error";
import Home from './components/home/home';
import Blogs from "./components/blogs/blogs";
import ContactUs from "./components/contactUs/contactUs";
// import AboutUs from "./components/aboutUs/aboutUs";
import Appointment from "./components/appointment/appointment";
import KnowYourself from "./components/knowYourself/knowYourself";
import GenInfo from "./components/otherInfo/genInfo";
import AboutUs2Page from "./components/aboutUs/aboutUs2";

const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/blogs',
        element: <Blogs />,
      },
      {
        path: '/contactus',
        element: <ContactUs />,
      },
      {
        path: '/aboutus',
        element: <AboutUs2Page />,
      },
      {
        path: '/appointment',
        element: <Appointment />,
      },
      {
        path: '/knowyourself',
        element: <KnowYourself />,
      },
      {
        path: '/otherinfo',
        element: <GenInfo/>,
      },

    ],
    errorElement: <Error />,
  },
]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={appRouter} />
);
