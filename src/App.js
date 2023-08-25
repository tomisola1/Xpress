import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route
} from "react-router-dom";
import './index.css';
import { Fragment } from 'react';
import SignIn from './components/sign-in';
import Dashboard from './components/dashboard/dashboard';
import Modal from './components/modal';
import SignUp from "./components/sign-up";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Fragment>
      <Route path= "/" element={<SignUp />}/>
      <Route path= "/signin" element={<SignIn />}/>
      <Route path="/dashboard" element={<Dashboard/>}/>
      <Route path="/modal" element={<Modal/>}/>
    </Fragment>
    
));

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
