import * as React from "react";

export interface IAppProps {}

const inputContext = React.createContext({ name: "hello", selected: "" });

export function InputRadioGroup({
  name,
  value,
  onChange,
  ...props
}: React.PropsWithChildren<
  {
    name: string;
    value?: string;
    onChange?: (value: string) => void;
  } & React.HTMLProps<HTMLDivElement>
>) {
  const [current, setCurrent] = React.useState(value ?? "");
  React.useEffect(() => {
    if (value) setCurrent(value);
  }, [value]);
  return (
    <inputContext.Provider value={{ name: name, selected: current }}>
      <div
        onChange={(e) => {
          // @ts-expect-error
          onChange?.(e.target.value);
          // @ts-expect-error
          setCurrent(e.target.value);
        }}
        {...props}
      >
        {props.children}
      </div>
    </inputContext.Provider>
  );
}

export function InputRadioItem({
  className,
  ...props
}: React.HTMLProps<HTMLInputElement>) {
  const ctx = React.useContext(inputContext);
  if (!ctx) throw new Error("Radio Item not wrapped with RadioGroup");
  return (
    <>
      <input
        type="radio"
        name={ctx.name}
        {...props}
        className={className + " hidden"}
      ></input>
      <div
        className={
          (ctx.selected === props.value ? "opacity-100" : "opacity-10") +
          " transition-opacity inline-block " +
          className
        }
      >
        <svg
          width="24"
          height="25"
          viewBox="0 0 24 25"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 2.85889C6.49 2.85889 2 7.34889 2 12.8589C2 18.3689 6.49 22.8589 12 22.8589C17.51 22.8589 22 18.3689 22 12.8589C22 7.34889 17.51 2.85889 12 2.85889ZM16.78 10.5589L11.11 16.2289C10.97 16.3689 10.78 16.4489 10.58 16.4489C10.38 16.4489 10.19 16.3689 10.05 16.2289L7.22 13.3989C6.93 13.1089 6.93 12.6289 7.22 12.3389C7.51 12.0489 7.99 12.0489 8.28 12.3389L10.58 14.6389L15.72 9.49889C16.01 9.20889 16.49 9.20889 16.78 9.49889C17.07 9.78889 17.07 10.2589 16.78 10.5589Z"
            fill="#021129"
          />
        </svg>
      </div>
    </>
  );
}

export function InputRadioItemForBookUsPage({
  className,
  children,
  ...props
}: React.HTMLProps<HTMLInputElement>) {
  const ctx = React.useContext(inputContext);
  if (!ctx) throw new Error("Radio Item not wrapped with RadioGroup");
  return (
    <>
      <input
        type="radio"
        name={ctx.name}
        {...props}
        className={className + " hidden"}
      ></input>
      <div
        className={
          (ctx.selected === props.value
            ? "bg-inputBgF border-inputF text-project-100"
            : "border-divider text-project-200") +
          " flex justify-center items-center md:flex-row border-2 transition-all p-3 md:min-w-[120px] xl:min-w-[200px] " +
          className
        }
      >
        {children}
      </div>
    </>
  );
}
