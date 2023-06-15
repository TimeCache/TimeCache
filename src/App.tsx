
import Home from "./pages/Home";
import Viewer,{dataLoader} from "./pages/Viewer";
import Login from "./components/login/Login";
import {createBrowserRouter, createRoutesFromElements, Route, Link, Outlet, RouterProvider} from 'react-router-dom';
// import UploadPage from "./pages/Upload";
import './styles/style.css'
import React from 'react';
import { useCookies } from 'react-cookie';
import Capsule from './Capsule';
import './styles/index.css'

export default function App() {
  const [cookies] = useCookies(['user']);

  // Check if 'user' cookie exists and if it's an object before trying to parse it
  let user = null;

  if (cookies.user && typeof cookies.user === 'string') {
    try {
      user = JSON.parse(cookies.user);
    } catch (error) {
      console.error('Error parsing user cookie', error);
    }
  } else {
    user = cookies.user;
    console.log(user);  // If 'user' cookie is already an object
  }

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<Root />}>
        <Route index element={<Home/>}/>
        <Route path='/viewer' element={<Viewer/>}/>
        {/* <Route path='/upload' element={<UploadPage/>}/> */}
        <Route path='/login' element={<Login/>}/>
      </Route>
    )
  )
  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="flex-1">
          <a className="btn btn-ghost normal-case text-xl">Welcome to Time Cache</a>
        </div>
        <div className="flex-none">
          <button className="btn btn-square btn-ghost">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-5 h-5 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"></path></svg>
          </button>
        </div>
      {/* <RouterProvider router={router}></RouterProvider> */}
     
        {user ? <Capsule/> :  <a href="http://localhost:3000/auth/google">Sign In with Google</a>}
    </div>
    </div>
  )
  }

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
  
  
// import React, { useState } from 'react';
// import { useCookies } from 'react-cookie';
// import { createBrowserRouter, createRoutesFromElements, Route, Link, Outlet } from 'react-router-dom';
// import Home from "./pages/Home";
// import Viewer, { dataLoader } from "./pages/Viewer";
// import Login from "./components/login/Login";
// // import UploadPage from "./pages/Upload";
// import Capsule from './Capsule';
// // import './styles/style.css';
// // import './styles/index.css';

// export default function App() {
//   const [cookies] = useCookies(['user']);
//   const [isLoggedIn, setIsLoggedIn] = useState(false);

//   // Check if 'user' cookie exists and if it's an object before trying to parse it
//   let user = null;

//   if (cookies.user && typeof cookies.user === 'string') {
//     try {
//       user = JSON.parse(cookies.user);
//       setIsLoggedIn(true);
//     } catch (error) {
//       console.error('Error parsing user cookie', error);
//     }
//   } else {
//     user = cookies.user;
//     console.log(user); // If 'user' cookie is already an object
//   }

//   const router = createBrowserRouter(
//     createRoutesFromElements(
//       <Route path='/' element={<Root />} >
//         <Route index element={<Home />} />
//         <Route path='/viewer' element={<Viewer />} />
//         {/* <Route path='/upload' element={<UploadPage />} /> */}
//       </Route>
//     )
//   );
//   return (
//     <div>
//       {/* <div className="navbar bg-base-100">
//         <div className="flex-1">
//           <a className="btn btn-ghost normal-case text-xl">Welcome to Time Cache</a>
//         </div>
//         <div className="flex-none">
//           <button className="btn btn-square btn-ghost">
//             <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-5 h-5 stroke-current">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"></path>
//             </svg>
//           </button>
//         </div>
//         <a href="http://localhost:3000/auth/google">Sign In with Google</a>
//         <Capsule /> */}

//       {/* </div> */}
//       <a href="http://localhost:3000/auth/google">Sign In with Google</a>
//         {/* <Capsule /> */}
//         {isLoggedIn===true ?   <Capsule/> :<Root />}
//     </div>
//   );
// }

//  const Root = () => {
//   return (
//     <>
//       <div>
//         <Link to='/'>Home Page</Link>
//         {/* <Link to='/capsule'>Capsule Page</Link> */}
//         <Link to='/viewer'>Viewer Page</Link>
//         {/* <Link to='/upload'>UPLOADDDDDD</Link> */}
//       </div>
      
//         {/* Outlet is just a placeholder for other routes */}
//         <Outlet />
      
//     </>
//   );
// }
