/* eslint-disable require-jsdoc */
import React from "react";
import clsx from "clsx";
// import InputScaffold, { InputScaffoldProps } from "./InputScaffold";
import { ErrorMessage, Field } from "formik";
import InputScaffold, { InputScaffoldProps } from "./ImputScaffold";
// import "react-datepicker/dist/react-datepicker.css";
// import InputScaffold, { InputScaffoldProps } from "./ImputScaffoled";
// import TextError from "./AdvisoryServices/TextError";

interface InputProps {
  type?: string;
  rows?: number;
  placeholder?: string;
  id?: string;
  label?: string;
  required?: boolean;
  inputProps?: any;
  error?: boolean;
  className?: any;
  requirement?: any;
  helperText?: string | boolean;
  [key: string]: any;
}
export const InputField = (props: InputProps): JSX.Element => {
  const {
    type,
    id,
    label,
    error,
    required,
    inputProps,
    className,
    helperText,
    placeholder,
    requirement,
  } = props;

  return (
    <div className={clsx(className, "my-3")}>
      <label
        htmlFor={id}
        className="relative text-sm font-medium text-gray-700 text-left"
       >
        {label}
        {requirement === true ? (
          <span className=" text-red-500">
            {" "}
            <span>*</span>
          </span>
        ) : null}
      </label>
      <div className="mt-1 relative rounded-md shadow-sm">
        <input
          type={type}
          {...inputProps}
          required={required}
          placeholder={placeholder}
          className="border border-gray-200 border-solid rounded-md py-3 px-4 w-full bg-white"
        />
        {error && (
          <p className="mt-2 text-sm text-red-600" id="email-error">
            {helperText}
          </p>
        )}
      </div>
    </div>
  );
};

const Input = React.forwardRef(function Input(
  props: InputScaffoldProps & React.ComponentPropsWithoutRef<"div">,
  ref: any
) {
  const {
    className,
    fullWidth,
    prefix,
    suffix,
    size,
    error,
    helperText,
    gutterBottom,
    label,
    ...rest
  } = props;

  return (
    <InputScaffold
      className={clsx("Input", className)}
      {...{
        fullWidth,
        prefix,
        suffix,
        size,
        gutterBottom,
        label,
        error,
        helperText,
      }}
    >
      <input ref={ref} {...rest} className="Input__input" />
    </InputScaffold>
  );
});

export default Input;

interface ISelectFieldProps {
  id: string;
  label: any;
  inputProps?: any;
  error?: boolean;
  className?: any;
  helperText?: string | boolean;
  [key: string]: any;
  name?: string;
  requirement?: any;
}

export const SelectField = (props: ISelectFieldProps) => {
  const {
    inputProps,
    label,
    id,
    className,
    error,
    helperText,
    children,
    name,
    disabled,
    requirement,
  } = props;

  return (
    <div className={clsx("mb-3", className)}>
      <label
        htmlFor={id}
        className="relative block text-sm font-medium text-gray-700"
      >
        {label}
        {requirement === true ? (
          <span className=" text-red-500">
            {" "}
            <span>*</span>
          </span>
        ) : null}
      </label>
      <div className="mt-1 relative rounded-md shadow-sm">
        <select
          {...inputProps}
          disabled={disabled}
          className="border border-gray-200 border-solid rounded-md py-3 px-4 w-full bg-white"
          aria-label="Default select example"
          name={name}
        >
          {children}
        </select>
      </div>
      {error && (
        <p className="mt-2 text-sm text-red-600" id="email-error">
          {helperText}
        </p>
      )}
    </div>
  );
};

export function TextareaField(props: InputProps) {
  const { requirement } = props;
  return (
    <div className={clsx(props.className)}>
      <label
        htmlFor="comment"
        className="relative block text-sm font-medium text-gray-700"
      >
        {props.label}
        {requirement === true ? (
          <span className=" text-red-500">
            {" "}
            <span>*</span>
          </span>
        ) : null}
      </label>
      <div className="mt-1">
        <textarea
          id={props.id}
          rows={props.rows}
          {...props.inputProps}
          required={props.required}
          placeholder={props.placeholder}
          className="shadow-sm p-4 focus:ring-gray-200 focus:border-gray-200 block w-full sm:text-sm  border border-solid border-gray-200 rounded-md"
        />
        {props.error && (
          <p className="mt-2 text-sm text-red-600" id="email-error">
            {props.helperText}
          </p>
        )}
      </div>
    </div>
  );
}
interface SelectProps {
  children: React.ReactNode;
  label?: string;
  name?: string;
  id?: string;
}
export const SelectComp = (props: SelectProps) => {
  const { label, name, id, children, ...rest } = props;
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-medium text-gray-700">
        {label}
      </label>
      <Field
        as="select"
        id={id}
        name={name}
        {...rest}
        className="border border-gray-200 border-solid rounded-md py-3 px-4 w-full bg-white"
      >
        {children}
      </Field>
    </div>
  );
};

