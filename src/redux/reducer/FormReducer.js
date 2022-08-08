import { CLOSE_FORM, OPEN_FORM, OPEN_FORM_EDIT } from "../types/EmployeeTypes"
import React from "react"

const initialState = {
    isOpen: false,
    forMode: 1

}

const FormReducer = (state = initialState, action) => {
    switch (action.type) {

        case OPEN_FORM:
            {

                return {...state, isOpen: true, forMode: 1 }
            }
        case CLOSE_FORM:
            {
                return {...state, isOpen: false }
            }
        case OPEN_FORM_EDIT:
            {
                return {...state, isOpen: true, forMode: 2 }
            }
        default:
            return {...state }
    }
}
export default FormReducer;