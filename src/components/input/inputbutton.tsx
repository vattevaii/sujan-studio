import * as React from "react";

export interface InputButtonProps extends React.HTMLProps<HTMLInputElement> {
  loading?: boolean;
}

export default function InputButton({ className, ...props }: InputButtonProps) {
  if (props.loading === true)
    return (
      <button
        className={
          className +
          " w-28 bg-project-100 disabled:bg-project-200 disabled:cursor-not-allowed text-white p-4 cursor-pointer"
        }
      >
        <span className="loading-btn"></span>
      </button>
    );
  return (
    <input
      value="Submit"
      {...props}
      type="submit"
      className={
        className +
        " bg-project-100 disabled:bg-project-200 disabled:cursor-not-allowed text-white p-4 cursor-pointer"
      }
    ></input>
  );
}
