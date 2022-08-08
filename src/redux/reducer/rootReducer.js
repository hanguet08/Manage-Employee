import { combineReducers } from "redux"
import EmployeeReducer from './EmployeeReducer'
import EditEmployeeReducer from "./EditEmployeeReducer"
import FormReducer from "./FormReducer"

export const rootReducer = combineReducers({
    EmployeeReducer,
    EditEmployeeReducer,
    FormReducer
})