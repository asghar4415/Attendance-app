import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'
import SignUp from './pages/signup';
import SignIn from './pages/signin';
import Add_User from './pages/add_users';
import StudentPortal from './pages/student-portal';
import TeacherPortal  from './pages/teacher-portal';

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
        <Route path="/dashboard/add-user" element={<Add_User />} />
        <Route path="/studentportal" element={<StudentPortal />} />
        <Route path="/teacherportal" element={<TeacherPortal />} />

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