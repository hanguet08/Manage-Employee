import { GET_EMPLOYEES, ADD_EMPLOYEE, EDIT_EMPLOYEE, DELETE_EMPLOYEE, UPDATE_EMPLOYEE } from "../types/EmployeeTypes";
import callApi from "../../callApi/callApi";
export const getEmployees = () => {
    return (dispatch) => {
        return callApi('employees', 'GET', null).then(res => {
            dispatch(getEmployeesRD(res.data))
        })

    }
}
export const getEmployeesRD = (employees) => {
    return {
        type: GET_EMPLOYEES,
        payload: employees
    }

}
export function addEmployee(employee) {
    return (dispatch) => {
        return callApi('employees', 'POST', employee).then(res => {
            dispatch(addEmployeeRD(employee));
            dispatch(getEmployees())
        })
    }
}
export function addEmployeeRD(employee) {
    return {
        type: ADD_EMPLOYEE,
        payload: employee
    }
}

export function editemployee(employeeID) {
    return (dispatch) => {
        return callApi(`employees/${employeeID}`, 'GET', null).then(res => {
            dispatch(editEmployeeRD(res.data))
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
    return (dispatch) => {
        return callApi(`employees/${employee.employeeID}`, 'PUT', employee).then(res => {
            dispatch(PostEditEmployeeRD(employee))
        })
    }
}
export function PostEditEmployeeRD(employee) {
    return {
        type: UPDATE_EMPLOYEE,
        payload: employee,
    }
}


export function DeleteEmployee(employeeID) {
    return (dispatch) => {
        return callApi(`employees/${employeeID}`, 'DELETE', null).then(res => {
            dispatch(DeleteEmployeeRD(employeeID))
            dispatch(getEmployees())
        })
    }
}


export function DeleteEmployeeRD(employeeID) {
    return {
        type: DELETE_EMPLOYEE,
        payload: employeeID,
    }
}