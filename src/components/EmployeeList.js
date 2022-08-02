import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {getEmployees} from '../redux/actions/EmployeeActions'
import "../styles/main.css"
import Employee_Item from './Employee_Item'
import EmployeeForm from './EmployeeForm'
const EmployeeList = () => {
    let dispatch= useDispatch();
    const employees= useSelector(state=> state.EmployeeReducer);
    console.log(employees);
    useEffect(() => {
        dispatch(getEmployees());
    }, []);
  
    const [show, setShow] = useState(false);
    const handleAddEmployee = () => {
        setShow(!show);
    }
    return (<div>
        <div className="m-page-header">
            <div className="m-page-title">Danh sách nhân viên</div>
            <div className="m-page-button">
                <button
                    className="m-btn m-btn-bg add-icon"
                    id="btnAddEmployee"
                    onClick={handleAddEmployee}>
                    Thêm Nhân viên
                </button>
                {show && <EmployeeForm handleAddEmployee={handleAddEmployee} />}
            </div>
        </div>
        {/* phan tim kiem */}
        <div className="content-filter">
            <div className="filter-left">
            <div className="search-by-id">
          <input
            type="text"
            className="search-box input-search"
            placeholder="Tìm kiếm theo Mã, Tên hoặc Số điện thoại"
          />
        </div>
            </div>
            <div className="filter-right"></div>
        </div>
{/* phan body */}
        <div className="m-grid">
            <div className="m-grid-table">
                <table className="m-table" id="tbEmployeeList">
                    <thead>
                        <tr>
                            <th style={{ width: "30px" }} >#</th>
                            <th className="text-align-left" style={{ width: "150px" }}>Mã nhân viên</th>
                            <th className="text-align-left" style={{ width: "150px" }} >Họ và tên</th>
                            <th className="text-align-left" style={{ width: "120px" }}>Giới tính</th>
                            <th className="text-align-center" style={{ width: "120px" }}>Ngày sinh </th>
                            <th className="text-align-left" style={{ width: "150px" }}>Điện thoại</th>
                            <th className="text-align-left" style={{ width: "120px" }}>Email</th>
                            <th className="text-align-left" style={{ width: "120px" }}>Phòng ban</th>
                            <th className="text-align-right" style={{ width: "200px" }}>
                                Mức lương cơ bản
                            </th>
                            <th className="text-align-center" style={{ width: "200px" }}>Chức năng</th>
                        </tr>
                    </thead>
                    <tbody>
                       {employees.map(employee=>{
                        return <Employee_Item key={employee.employeeID} employee={employee}
                        handleAddEmployee={handleAddEmployee}/>
                       })} 
                    </tbody>
                </table>
            </div>
        </div>
        {/* <!-- paging bar --> */}
    <div className="paging-bar">
      <div className="paging-left">Hiển thị 1-10/1000 nhân viên</div>
      <div className="pagination">
        <button className="btn-page firstpage-icon"></button>
        <button className="btn-page prevpage-icon"></button>
        <div className="pagination-number">
          <button className="btn-pagenumber cur-active">1</button>
          <button className="btn-pagenumber">2</button>
          <button className="btn-pagenumber">3</button>
          <button className="btn-pagenumber">4</button>
        </div>
        <button className="btn-page nextpage-icon"></button>
        <button className="btn-page lastpage-icon"></button>
      </div>
      <div className="paging-right">10 nhân viên/trang</div>
    </div>
    </div>
    )
}
export default EmployeeList;