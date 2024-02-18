


import { useEffect, useState } from 'react';
import './App.css';
import Router from './router/Router';
import {  useDispatch, useSelector } from 'react-redux';
import publicRoutes from "./router/routes/publicRoutes";
import { getRoutes } from './router/routes';
import { get_user_info } from './store/Reducers/authReducer';

function App() {

  const dispatch = useDispatch()
  const {token} = useSelector(state => state.auth)

  // console.log("App: Token from Redux:", token);
  // console.log("App: Initial Public Routes:", publicRoutes);

// console.log(token)
const [allRoutes, setAllRoutes] = useState([...publicRoutes]);

// console.log(publicRoutes); // Check the structure

useEffect(()=> {
  const routes = getRoutes()
  // console.log(routes)
  setAllRoutes([...allRoutes, routes])
},[])


useEffect(()=> {
  if(token) {
    dispatch(get_user_info())
    
  }
}, [token])
//console.log(token)

  return (
    <div className="App">
    
    <Router allRoutes={allRoutes} />
    
    </div>
  );

}

export default App;





// /*


// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Dashboard from './components/Dashboard';
// import Login from './components/Login';
// import Unauthorized from './components/Unauthorized';
// import ProtectedRoute from './components/ProtectedRoute';

// const App = () => {
//   const adminRoute = {
//     role: 'admin',
//     element: <Dashboard />
//   };

//   return (
//     <Router>
//       <Routes>
//         <Route path="/login" element={<Login />} />
//         <Route path="/unauthorized" element={<Unauthorized />} />
//         <Route path="/admin/dashboard" element={<ProtectedRoute route={adminRoute} />} />
       
//         </Routes>
//         </Router>
//       );
//     };
    
//     export default App;
    



// */ 









// /*



// function App() {
//     const dispatch = useDispatch();
//     const { token } = useSelector(state => state.auth);
//     const [allRoutes, setAllRoutes] = useState([...publicRoutes]);

//     // Added console logs for debugging
//     console.log("App: Token from Redux:", token);
//     console.log("App: Initial Public Routes:", publicRoutes);

//     useEffect(() => {
//         const routes = getRoutes();
//         console.log("App: Additional Routes based on Role:", routes);
//         setAllRoutes([...allRoutes, ...routes]); // Ensure spreading of both arrays
//     }, []);

//     useEffect(() => {
//         if (token) {
//             console.log("App: Token available, dispatching get_user_info");
//             dispatch(get_user_info());
//         }
//     }, [token, dispatch]); // Added dispatch to dependency array

//     console.log("App: All Routes (Public + Role-based):", allRoutes);

//     return (
//         <div className="App">
//             <Router allRoutes={allRoutes} />
//         </div>
//     );
// }

// export default App;


// */