import React, { useState, useEffect } from 'react';
import "../styles/layout/employeeForm.css"
import avatar from "../assets/img/default-avatar.jpg"
import { useDispatch, useSelector } from 'react-redux';
import { addEmployee, editEmployee, PostEditEmployee } from '../redux/actions/EmployeeActions'
import {closeModal} from '../redux/actions/FormAction';
import { useParams } from 'react-router-dom';
const EmployeeForm = (props) => {
  let dispatch = useDispatch();
  const {forMode}=useSelector((state)=> state.FormReducer);
  console.log(forMode);
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
    dispatch(closeModal());
    setEmployeeID("")
    setEmployeeName("")
    setNumberOfPhone("")
    setEmail("")
    setDateOfBirth("")
    setGender("")
    setDepartment("")
    setSalary("")
   
  }
  function handleUpdateOnClick(e) {
    e.preventDefault();
    dispatch(PostEditEmployee
      (
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
      ))
    dispatch(closeModal());
    setEmployeeID("")
    setEmployeeName("")
    setNumberOfPhone("")
    setEmail("")
    setDateOfBirth("")
    setGender("")
    setDepartment("")
    setSalary("")

  }
  function onSubmit(e){
    e.preventDefault();
    if (forMode ===1){
      handleAddOnClick(e)
    }
    else if (forMode ===2){
      handleUpdateOnClick(e);
    }
  }

  //edit
  const { id } = useParams();
    const employeeEdit = useSelector(state => state.EditEmployeeReducer);
    useEffect(() => {
        dispatch(editEmployee(id));
        setEmployeeID(employeeEdit.employeeID)
        setEmployeeName(employeeEdit.employeeName)
        setNumberOfPhone(employeeEdit.numberOfPhone)
        setEmail(employeeEdit.email)
        setDateOfBirth(employeeEdit.dateOfBirth)
        setGender(employeeEdit.gender)
        setDepartment(employeeEdit.department)
        setSalary(employeeEdit.salary)
  
    }, [employeeEdit.employeeID]);

 

  return (
    <>
      <div className="dialog formDetail">
        <div className="dialog-content">
          {/* phan header */}
          <div className="m-dialog-header">
            <div className="close-dialog">
              <i className="fas fa-times" 
               onClick={() => {
                dispatch(closeModal());
              }}>
              </i>
            </div>
          </div>
          <div className="dialog-content-header">
            <div className="title-dialog">TH??NG TIN NH??N VI??N</div>

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
              (Vui l??ng ch???n ???nh c?? ?????nh d???ng .jpg, .jpeg, .png, .gif.)
            </div>
          </div>
          {/* phan form ben phai */}
          <div className="dialog-content-between">
            <div className="dialog-content-top">
              <div className="title-text">A. TH??NG TIN CHUNG</div>
            </div>
            <div className="content-between-element">
              <div className="element">
                <div className="between-element-title">
                  M?? nh??n vi??n (<span className="m-label-red">*</span>)
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
                  H??? v?? t??n (<span className="m-label-red">*</span>)
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
                  S??? ??i???n tho???i (<span className="m-label-red">*</span>)
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
                  Ng??y sinh
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
                  Gi???i t??nh
                </div>
                <select className="input-dialog-employee"
                  onChange={(e) => setGender(e.target.value)}
                  value={gender}>
                  <option value="N???">N???</option>
                  <option value="Nam">Nam</option>
                  <option value="Kh??c">Kh??c</option>
                </select>
              </div>
            </div>
            <div className="dialog-content-bottom">
              <div className="content-title">
                <div className="title-text">B. TH??NG TIN C??NG VI???C:</div>
              </div>
              <div className="content-between-element">
                <div className="element">
                  <div className="between-element-title">
                    Ph??ng ban (<span className="m-label-red">*</span>)
                  </div>
                  <select className="input-dialog-employee"
                    onChange={(e) => setDepartment(e.target.value)}
                    value={department} >
                    <option value="Ph??ng Gi??m ?????c">Ph??ng Gi??m ?????c</option>
                    <option value="Ph??ng Maketing">Ph??ng Maketing</option>
                    <option value="Kh??c">Kh??c</option>
                  </select>
                </div>
                <div className="element">
                  <div className="between-element-title">
                    M???c l????ng c?? b???n (<span className="m-label-red">*</span>)
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
              onClick={
               onSubmit
              }
            >
              <i className="far fa-save icon-save"></i>L??u
            </button>
            <button
              id="btnCancel"
              className="m-btn m-btn-destroy btnForm"
              onClick={() => {
                dispatch(closeModal());
              }}
            >
              H???y
            </button>
          </div>
        </div>
      </div>
    </>
  )
}
export default EmployeeForm;