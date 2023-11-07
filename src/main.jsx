import React from 'react';
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
import Details from './components/JobDetails/Details';

const router = createBrowserRouter([
  {
    path: "/",
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
        path: "/jobdetails/:jobid",
        element: <JobDetails></JobDetails>,
        // loader: ({params}) => fetch(`../public/fakeData.json/${params.jobid}`)
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
