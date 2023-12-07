import * as React from 'react';

export interface InputButtonProps extends React.HTMLProps<HTMLInputElement> {
}

export default function InputButton ({className, ...props}: InputButtonProps) {
  return (
    <input value="Submit" {...props} type='submit' className={className + ' bg-project-100 text-white p-4'}>
    </input>
  );
}
