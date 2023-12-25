import React, { HTMLProps, PropsWithChildren } from "react";

type Props = {};
const TooltipWrapper = ({ children }: PropsWithChildren) => {
  return <div className="group relative">{children}</div>;
};
const TooltipTrigger = (props: HTMLProps<HTMLButtonElement>) => {
  // @ts-expect-error
  return <button {...props} />;
};
const TooltipContent = ({
  children,
  arrow,
  direction,
}: PropsWithChildren<{
  arrow?: boolean;
  direction?: "left" | "right" | "top" | "bottom";
}>) => {
  return (
    <div
      role="tooltip"
      className="transition-opacity duration-500 opacity-0 group-hover:opacity-100 absolute left-0 h-full w-full bottom-0"
    >
      <div className="w-0 group-hover:w-40 max-w-max transition-all delay-500 group-hover:delay-0 duration-0 bg-slate-900 p-1 text-light-grey absolute right-[4.5rem] top-1/2 -translate-y-1/2">
        {children}
        <div
          className="absolute tooltip-arrow w-2 h-2 bg-slate-900 -right-1 top-1/2 -translate-y-1/2 rotate-45"
          data-popper-arrow
        ></div>
      </div>
    </div>
  );
};

export { TooltipContent, TooltipTrigger, TooltipWrapper };
