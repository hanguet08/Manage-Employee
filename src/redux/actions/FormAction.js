import { CLOSE_FORM, OPEN_FORM, OPEN_FORM_EDIT } from "../types/EmployeeTypes"
import React from "react"
export const openModal = () => {
    return {
        type: OPEN_FORM,
    }
}
export const closeModal = () => {
    return {
        type: CLOSE_FORM,
    }
}
export const openFormEdit = () => {
    return {
        type: OPEN_FORM_EDIT,
    }
}