import React from "react";
import {Field, WrappedFieldProps} from "redux-form";
import s from './FormsControls.module.css'
import {FieldValidatorType, required} from "../../../utils/validators/validators";


export const FormControl: React.FC<WrappedFieldProps> = ({input, meta: {touched, error}, children}) => {
    const hasError = touched && error;
    return (
        <div className={s.formControl + ' ' + (hasError ? s.error : '')}>
            <div>
                {children}
            </div>
            {hasError && <span>{error}</span>}
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

//todo: need to fix label here for my style
export const createField = (placeholder: string | null,
                            name: string,
                            validators: FieldValidatorType[],
                            component: React.FC<WrappedFieldProps>,
                            props = {},
                            text = '') => (

    <div>
        <Field placeholder={placeholder}
               name={name}
               validate={validators}
               component={component}
               {...props}
        /> {text}
    </div>
)

