import * as React from 'react';

export interface InputButtonProps extends React.HTMLProps<HTMLInputElement> {
}

export default function InputButton ({className, ...props}: InputButtonProps) {
  return (
    <input value="Submit" {...props} type='submit' className={className + ' bg-project-100 disabled:bg-project-200 disabled:cursor-not-allowed text-white p-4 cursor-pointer'}>
    </input>
  );
}
