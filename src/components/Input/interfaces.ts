import type { InputHTMLAttributes } from "react";
import {FieldErrors, UseFormRegister, ValidationRule } from "react-hook-form";

export type InputProps = {
    name : InputHTMLAttributes<HTMLInputElement>['name']
    type : InputHTMLAttributes<HTMLInputElement>['type']
    label : string
    placeholder : string
    className? : string
    register : UseFormRegister<any>
    errors? : FieldErrors
    required? : string | ValidationRule<boolean>
    pattern? : ValidationRule<RegExp>
}