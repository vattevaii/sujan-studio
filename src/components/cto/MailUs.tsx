import * as React from "react";

interface IMailUsProps {
  variant?: "large" | "small";
}

const MailUs: React.FunctionComponent<
  IMailUsProps & React.HTMLProps<HTMLDivElement>
> = ({ variant = "large", ...props }) => {
  return (
    <div
      className={
        props.className +
        " flex flex-wrap justify-between flex-col md:flex-row items-start "+(variant==="large"?"md:items-end": "md:items-center")
      }
    >
      <h2
        className={
          "flex-1 font-semibold " + (variant === "large"
            ? "text-21xl xl:text-61xl"
            : "text-5xl xl:text-21xl")
        }
      >
        <span className="underline">Let&apos;s talk</span> and create
        an&nbsp;awesome&nbsp;Memory.
      </h2>
      <a
        href="mailto:sujanstudio@gmail.com"
        className={
          "flex items-center relative leading-[3em] font-raleway " +
          (variant === "large" ? "text-xl xl:text-5xl" : "text-md xl:text-xl")
        }
      >
        <>
          <p>sujanstudio@gmail.com</p>
          <span>
            <svg
              width="40px"
              height="40px"
              viewBox="0 0 120 120"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M50 48V52H67.18L48 71.18L50.82 74L70 54.82V72H74V48H50Z"
                fill="currentColor"
              />
            </svg>
          </span>
        </>
      </a>
    </div>
  );
};

export default MailUs;
