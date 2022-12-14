import { GET_EMPLOYEES, ADD_EMPLOYEE, EDIT_EMPLOYEE, DELETE_EMPLOYEE, UPDATE_EMPLOYEE } from "../types/EmployeeTypes";
import callApi from "../../callApi/callApi";
export const getEmployees = () => {
    return async(dispatch) => {
        const res = await callApi('employees', 'GET', null);
        dispatch(getEmployeesRD(res.data));

    }
}
export const getEmployeesRD = (employees) => {
    return {
        type: GET_EMPLOYEES,
        payload: employees
    }

}
export function addEmployee(employee) {
    return async(dispatch) => {
        const res = await callApi('employees', 'POST', employee);
        dispatch(addEmployeeRD(employee));
        dispatch(getEmployees());
    }
}
export function addEmployeeRD(employee) {
    return {
        type: ADD_EMPLOYEE,
        payload: employee
    }
}

export function editEmployee(employeeID) {
    return (dispatch) => {
        return callApi(`employees/${employeeID}`, 'GET', null).then(res => {
            dispatch(editEmployeeRD(res.data));
        })
    }
}

export function editEmployeeRD(employee) {
    return {
        type: EDIT_EMPLOYEE,
        payload: employee,
    }
}

export function PostEditEmployee(employee) {
    return async(dispatch) => {
        const res = await callApi(`employees/${employee.employeeID}`, 'PUT', employee);
        dispatch(PostEditEmployeeRD(employee));
    }
}
export function PostEditEmployeeRD(employee) {
    return {
        type: UPDATE_EMPLOYEE,
        payload: employee,
    }
}


export function DeleteEmployee(employeeID) {
    return async(dispatch) => {
        const res = await callApi(`employees/${employeeID}`, 'DELETE', null);
        dispatch(DeleteEmployeeRD(employeeID));
        dispatch(getEmployees());
    }
}


export function DeleteEmployeeRD(employeeID) {
    return {
        type: DELETE_EMPLOYEE,
        payload: employeeID,
    }
}