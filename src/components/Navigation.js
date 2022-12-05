import {Navbar, Nav} from 'react-bootstrap';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import CreateEmployee from "./CreateEmployee";
import EmployeeList from "./EmployeeList";
import Home from "./Home";
import Footer from "./Footer";
import UpdateEmploye from "./UpdateEmployee";
import ViewEmployee from "./ViewEmployee";
import SignUp from "./SignUp";
import LogIn from "./LogIn";
import React, {useState} from "react";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Navigation() {

    const[setNavigate] = useState(false);
    const Logout = () => {

        localStorage.removeItem('login');
        setNavigate(true);
    }
   
return (
    
    <Router>
        <div>
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand>Employee Management App</Navbar.Brand>
                <div style={{padding:"10px 50px", fontFamily:"inherit",fontSize:"30px"}}>
                <Nav className="mr-auto">
                    <Nav.Link className="nav-item" style={{color:"white"}} href="/">Home</Nav.Link>
                    <Nav.Link className="nav-item" style={{marginLeft:"40px", color:"white"}} href="/employees">Employees List</Nav.Link>
                <Nav.Link to={"/"} onClick={Logout} className="btn btn-danger" style={{marginLeft:"40px", color:"white"}}>   Logout   </Nav.Link>
                </Nav>
                </div>
            </Navbar>
            <Routes>
                <Route path={"/"} element={<Home/>}/>
                <Route path={"/signup"} element={<SignUp/>}/>
                <Route path={"/login"} element={<LogIn/>}/>
                <Route path={"/employees"} element={<EmployeeList/>}/>
                <Route path={"add-employees"} element={<CreateEmployee/>}/>
                <Route path={"employees/update-employees/:id"} element={<UpdateEmploye/>}/>
                <Route path={"employees/view-employees/:id"} element={<ViewEmployee/>}/>
            </Routes>
            <Footer/>
        </div>
        <ToastContainer
        position="top-center"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        />
    </Router>
    
    );
}

export default Navigation;

            