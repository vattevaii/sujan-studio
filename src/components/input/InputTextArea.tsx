import * as React from "react";

export interface InputTextProps extends React.HTMLProps<HTMLTextAreaElement> {}

export default React.forwardRef<HTMLTextAreaElement | null, InputTextProps>(
  function InputText({ className, ...props }, ref) {
    return (
      <textarea
        type="text"
        {...props}
        ref={ref}
        className={
          "text-md bg-transparent transition-all border-b-2 border-input outline-none focus-within:border-inputF opacity-80 hover:opacity-100 focus-within:opacity-100 " +
          className
        }
      ></textarea>
    );
  }
);
