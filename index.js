import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import WorkwithUs from './Pages/workwithus'
import OurTeam from './Pages/ourteam'
import Sponsorship from './Pages/sponsorship'
import Faq from './Pages/faq'
import AboutEvent from './Pages/aboutevent'
import ContactUs from './Pages/contactus'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "Home",
    element: <App />,
  },
  {
    path: "/",
    element: <App />,
  },
  {
    path: "workwithus",
    element: <WorkwithUs />,
  },
  {
    path: "ourteam",
    element: <OurTeam />,
  },
  {
    path: "sponsorship",
    element: <Sponsorship />,
  },
  {
    path: "faq",
    element: <Faq />,
  },
  {
    path: "aboutevent",
    element: <AboutEvent />,
  },
  {
    path: "contactus",
    element: <ContactUs />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);