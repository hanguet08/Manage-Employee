import React,{ useState,useEffect } from "react";
import { NavLink } from "react-router-dom"
import { DeleteEmployee, editEmployee } from "../redux/actions/EmployeeActions";
import { useSelector,useDispatch } from "react-redux";
import EmployeeForm from "./EmployeeForm";
import "../styles/layout/employeeForm.css"
import {openFormEdit} from '../redux/actions/FormAction'

function Employee_Item({ employee }, props) {
   // const [show, setShow] = useState(false);
    // const handleEditEmployee = () => {
    //     setShow(!show);
    // }
    let dispatch = useDispatch();
      const {isOpen}=useSelector((state)=> state.FormReducer)
    return (
        <tr>
            <td style={{ paddingRight: "0px" }}>
                <div className="m-checkbox">
                    <i className="fas fa-check"></i>
                </div>
            </td>
            <td>{employee.employeeID}</td>
            <td>{employee.employeeName}</td>
            <td>{employee.gender}</td>
            <td>{employee.dateOfBirth}</td>
            <td>{employee.numberOfPhone}</td>
            <td className="text-align-left" style={{ width: "120px" }}>{employee.email}</td>
            <td className="text-align-left" style={{ width: "120px" }}>{employee.department}</td>
            <td className="text-align-right" style={{ width: "200px" }}>{employee.salary}</td>
           
                <td className="text-align-center" style={{ width: "200px" }}>
                    <span
                        id="icon-edit-employee"
                        className="m-icon-action"
                        onClick={() => {
                            dispatch(openFormEdit());
                            dispatch(editEmployee(employee.employeeID))
                        }}
                    ></span>
                    <span
                        id="icon-delete-employee"
                        className="m-icon-action"
                        onClick={() => dispatch(DeleteEmployee(employee.employeeID))}
                    ></span>
                </td>
       
        </tr>
    )

}
export default Employee_Item;