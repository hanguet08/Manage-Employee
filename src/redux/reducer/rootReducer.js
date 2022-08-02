import { combineReducers } from "redux"
import EmployeeReducer from './EmployeeReducer'
import EditEmployeeReducer from "./EditEmployeeReducer"

export const rootReducer = combineReducers({
    EmployeeReducer,
    EditEmployeeReducer
})