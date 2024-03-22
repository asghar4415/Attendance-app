import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'
import SignUp from './pages/signup';
import SignIn from './pages/signin';
import DashBoard from './pages/admin_dashboard';

import "react-toastify/dist/ReactToastify.css";
import { Bounce, ToastContainer } from "react-toastify";
import DashBoard_Home from './pages/admin_dashboard';



function App() {



  return (

    <>
    <Router>
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/dashboard" element={<DashBoard_Home />} />
        <Route path="/dashboard" element={<DashBoard_Home />} />
        <Route path="/dashboard/add_student" element={<DashBoard_Home />} />

      </Routes>
    </Router>

    <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Bounce}
      />
    
    </>
  );
}

export default App;