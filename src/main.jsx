import React, { createContext } from 'react';
import App from './App';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';
import './index.css';
import Home from './components/Home/Home';
import AppliedJobs from './components/AppliedJobs/AppliedJobs';
import cartProductsLoader from './CartLoader/CartLoader';
import JobDetails from './components/JobDetails/JobDetails';
import Statistics from './components/Statistics/Statistics';
import Signin from './components/SignIn/Signin';
import AuthProvider from './components/providers/AuthProvider';
import SignUp from './components/SignUp/SignUp';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import AboutUs from './components/AboutUs/AboutUs';
import Jobs from './components/Jobs/JobsList';
import Payment from './components/Payment/Payment';
import MapLocation from './components/MapLocation/MapLocation';

const router = createBrowserRouter([
  {
    path: "",
    element: <App></App>,
    children: [
      {
        path: "home",
        element: <Home></Home>,
      },
      {
        path: "appliedJobs",
        element: <AppliedJobs></AppliedJobs>,
        loader: cartProductsLoader
      },
      {
        path: "jobs",
        element: <Jobs></Jobs>
      },
      {
        path: "/payment/:jobid",
        element: <PrivateRoute><Payment></Payment></PrivateRoute>,
        loader: ({ params }) => fetch(`http://localhost:3000/selectedjobs/${params.jobid}`),
      },
      {
        path: "/jobdetails/:jobid",
        element: <JobDetails></JobDetails>,
        loader: ({ params }) => fetch(`http://localhost:3000/selectedjobs/${params.jobid}`)
      },
      {
        path: "location",
        element: <MapLocation></MapLocation>
      },
      {
        path: "statistics",
        element: <Statistics></Statistics>,
        loader: cartProductsLoader
      },
      {
        path: "aboutus",
        element: <AboutUs></AboutUs>
      },
      {
        path: "signin",
        element: <Signin></Signin>
      },
      {
        path: "signup",
        element: <SignUp></SignUp>
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
