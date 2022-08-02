import { GET_EMPLOYEES, ADD_EMPLOYEE, EDIT_EMPLOYEE, UPDATE_EMPLOYEE, DELETE_EMPLOYEE } from "../types/EmployeeTypes"
var initialState = [

];
const EmployeeReducer = (state = initialState, action) => {
    let newEmployeeList;
    const { type, payload } = action;
    switch (type) {
        case GET_EMPLOYEES:
            state = payload;
            return [...state];
        case ADD_EMPLOYEE:
            return [...state, payload];
        case UPDATE_EMPLOYEE:
            newEmployeeList = [...state]
            return newEmployeeList.map((employee) => {
                if (employee.employeeID == payload.employeeID) {
                    return {
                        ...employee,
                        ...payload
                    }
                } else {
                    return employee;
                }
            })
        case DELETE_EMPLOYEE:
            newEmployeeList = [...state];
            newEmployeeList = newEmployeeList.filter(employee => employee.employeeID !== payload.employeeID)
            state = newEmployeeList
            return [...state]
        default:
            return [...state];
    }
}
export default EmployeeReducer;;