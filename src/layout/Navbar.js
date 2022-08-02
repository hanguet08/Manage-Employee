import React from "react";
import { Routes, Route } from 'react-router-dom';
import Home from "../components/Home"
import EmployeeList from "../components/EmployeeList"
const Navbar = () => {
    return (
    <div className="m-content">
        <Routes>
        <Route path="/" element={<Home></Home>} />
        <Route path="/addcontact" element={<EmployeeList></EmployeeList>} />
    </Routes>
    </div>
     
    )
}
export default Navbar;