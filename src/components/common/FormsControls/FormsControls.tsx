import React from "react";
import {WrappedFieldProps} from "redux-form";
import s from './FormsControls.module.css'



export const FormControl: React.FC<WrappedFieldProps> = ({input, meta,...props}) => {
    const hasError = meta.touched && meta.error;
    return (
        <div className={s.formControl + ' ' + (hasError ? s.error: '')}>
            <div>
                {props.children}
            </div>
            { hasError && <span>{meta.error}</span> }
        </div>
    )
}

export const Textarea: React.FC<WrappedFieldProps> = (props) => {
    const {input, ...restProps} = props
    return <FormControl {...props}><textarea {...input} {...restProps} {...props} /></FormControl>
}

export const Input: React.FC<WrappedFieldProps> = (props) => {
    const {input, ...restProps} = props
    return <FormControl {...props}><input {...input} {...restProps} /></FormControl>
}
