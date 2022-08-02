import React, { useState } from 'react';
import "../styles/layout/employeeForm.css"
import avatar from "../assets/img/default-avatar.jpg"
import { useDispatch } from 'react-redux';
import { addEmployee } from '../redux/actions/EmployeeActions'
const EmployeeForm = (props) => {
  let dispatch = useDispatch();
  const [employeeID, setEmployeeID] = useState("");
  const [employeeName, setEmployeeName] = useState("");
  const [numberOfPhone, setNumberOfPhone] = useState("");
  const [email, setEmail] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [gender, setGender] = useState("");
  const [department, setDepartment] = useState("")
  const [salary, setSalary] = useState("")
  function handleAddOnClick(e) {
    e.preventDefault();
    dispatch(addEmployee(
      {
        employeeID: employeeID,
        employeeName: employeeName,
        numberOfPhone: numberOfPhone,
        email: email,
        dateOfBirth: dateOfBirth,
        gender: gender,
        department: department,
        salary: salary
      }
    ));
    setEmployeeID("")
    setEmployeeName("")
    setNumberOfPhone("")
    setEmail("")
    setDateOfBirth("")
    setGender("")
    setDepartment("")
    setSalary("")
    props.handleAddEmployee();
  }

  return (
    <>
      <div className="dialog formDetail">
        <div className="dialog-content">
          {/* phan header */}
          <div className="m-dialog-header">
            <div className="close-dialog">
              <i className="fas fa-times" onClick={props.handleAddEmployee}>
              </i>
            </div>
          </div>
          <div className="dialog-content-header">
            <div className="title-dialog">THÔNG TIN NHÂN VIÊN</div>

          </div>
          {/* phan form ben trai */}
          <div className="dialog-content-left">
            <div className="m-avt-input">
              <img
                src={avatar}
                alt="default-avatar"
                id="avatar"
                className="image-preview"
                name="pic"
              />
              <input type="file" style={{ display: "none" }} id="choose-avt" />
            </div>
            <div className="m-avt-description">
              (Vui lòng chọn ảnh có định dạng .jpg, .jpeg, .png, .gif.)
            </div>
          </div>
          {/* phan form ben phai */}
          <div className="dialog-content-between">
            <div className="dialog-content-top">
              <div className="title-text">A. THÔNG TIN CHUNG</div>
            </div>
            <div className="content-between-element">
              <div className="element">
                <div className="between-element-title">
                  Mã nhân viên (<span className="m-label-red">*</span>)
                </div>
                <input
                  id="txtEmployeeCode"
                  type="text"
                  className="input-dialog-employee"
                  onChange={(e) => setEmployeeID(e.target.value)}
                  value={employeeID}
                />
              </div>
              <div className="element">
                <div className="between-element-title">
                  Họ và tên (<span className="m-label-red">*</span>)
                </div>
                <input
                  id="txtFullName"
                  type="text"
                  className="input-dialog-employee"
                  onChange={(e) => setEmployeeName(e.target.value)}
                  value={employeeName}
                />
              </div>
            </div>
            <div className="content-between-element">
              <div className="element">
                <div className="between-element-title">
                  Số điện thoại (<span className="m-label-red">*</span>)
                </div>
                <input
                  id="txtPhoneNumber"
                  type="text"
                  className="input-dialog-employee"
                  onChange={(e) => setNumberOfPhone(e.target.value)}
                  value={numberOfPhone}
                />
              </div>
              <div className="element">
                <div className="between-element-title">
                  Email (<span className="m-label-red">*</span>)
                </div>
                <input
                  id="txtEmail"
                  type="text"
                  className="input-dialog-employee"
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                />
              </div>
            </div>
            <div className="content-between-element">
              <div className="element">
                <div className="between-element-title">
                  Ngày sinh
                </div>
                <input
                  id="txtBirthOfDate"
                  type="date"
                  className="input-dialog-employee"
                  onChange={(e) => setDateOfBirth(e.target.value)}
                  value={dateOfBirth}
                />
              </div>
              <div className="element">
                <div className="between-element-title">
                  Giới tính
                </div>
                <select className="input-dialog-employee"
                  onChange={(e) => setGender(e.target.value)}
                  value={gender}>
                  <option value="Nữ">Nữ</option>
                  <option value="Nam">Nam</option>
                  <option value="Khác">Khác</option>
                </select>
              </div>
            </div>
            <div className="dialog-content-bottom">
              <div className="content-title">
                <div className="title-text">B. THÔNG TIN CÔNG VIỆC:</div>
              </div>
              <div className="content-between-element">
                <div className="element">
                  <div className="between-element-title">
                    Phòng ban (<span className="m-label-red">*</span>)
                  </div>
                  <select className="input-dialog-employee"
                    onChange={(e) => setDepartment(e.target.value)}
                    value={department} >
                    <option value="Phòng Giám Đốc">Phòng Giám Đốc</option>
                    <option value="Phòng Maketing">Phòng Maketing</option>
                    <option value="Khác">Khác</option>
                  </select>
                </div>
                <div className="element">
                  <div className="between-element-title">
                    Mức lương cơ bản (<span className="m-label-red">*</span>)
                  </div>
                  <input
                    id="numSalary"
                    type="type"
                    className="input-dialog-employee"
                    onChange={(e) => setSalary(e.target.value)}
                    value={salary}
                  />
                </div>
              </div>
            </div>
          </div>
          {/* phan footer */}
          <div className="dialog-content-footer">
            <button
              id="btnSave"
              type="submit"
              className="m-btn m-btn-save btnForm"
              onClick={handleAddOnClick}
            >
              <i className="far fa-save icon-save"></i>Lưu
            </button>
            <button
              id="btnCancel"
              className="m-btn m-btn-destroy btnForm"
              onClick={props.handleAddEmployee}
            >
              Hủy
            </button>
          </div>
        </div>
      </div>
    </>
  )
}
export default EmployeeForm;