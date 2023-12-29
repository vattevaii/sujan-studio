import * as React from "react";

type TextProps = React.HTMLProps<HTMLParagraphElement>;

const STextTitle: React.FunctionComponent<TextProps> = ({
  className,
  ...props
}) => {
  return (
    <h2
      className={"text-11xl xl:text-41xl font-semibold " + className}
      {...props}
    >
    </h2>
  );
};
const STextSubTitle: React.FunctionComponent<TextProps> = ({
  className,
  ...props
}) => {
  return (
    <div className={"text-md xl:text-xl font-raleway " + className} {...props}>
    </div>
  );
};

const SText = { Title: STextTitle, Sub: STextSubTitle };
export default SText;
