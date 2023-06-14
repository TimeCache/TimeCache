import React from "react";
import Home from "./pages/Home";
import Viewer,{dataLoader} from "./pages/Viewer";
import Login from "./components/login/Login";
import {createBrowserRouter, createRoutesFromElements, Route, Link, Outlet, RouterProvider} from 'react-router-dom';
import UploadPage from "./pages/Upload";
import './styles/style.css'
export default function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<Root />}>
        <Route index element={<Home/>}/>
        <Route path='/viewer' element={<Viewer/>}loader={dataLoader}/>
        <Route path='/upload' element={<UploadPage/>}/>
        <Route path='/login' element={<Login/>}/>
      </Route>
    )
  )

  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  )
};

const Root = () => {
  return( 
    <> 
      <div>
        <Link to='/'>Home Page</Link>
        <Link to='/capsule'>Capsule Page</Link>
        <Link to='/viewer'>Viewer Page</Link>
        <Link to='/upload'>UPLOADDDDDD</Link>
      </div>
      <div>
        {/* Outlet is just a placeholder for other routes  */}
        <Outlet />
      </div>
    </>
  )
}