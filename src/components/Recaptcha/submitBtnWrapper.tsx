import * as React from "react";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";

interface ISubmitBtnWrapperProps {
  children: (
    recaptchaProps: ReturnType<typeof useGoogleReCaptcha>
  ) => React.ReactElement;
}

const SubmitBtnWrapper: React.FunctionComponent<ISubmitBtnWrapperProps> = (
  props
) => {
  const recaptchaProps = useGoogleReCaptcha();
  return props.children(recaptchaProps);
};

export default SubmitBtnWrapper;
