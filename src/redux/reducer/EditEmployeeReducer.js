import { EDIT_EMPLOYEE }
from "../types/EmployeeTypes"
var initialState=[];
const EditEmployeeReducer = (state=initialState, action)=>{
    const { type, payload } = action;
    switch(type){
        case EDIT_EMPLOYEE:
         state= payload;
         return state;
         default: 
         return state;
    }
}
export default EditEmployeeReducer;