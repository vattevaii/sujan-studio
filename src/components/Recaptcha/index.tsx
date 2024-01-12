import {
  GoogleReCaptcha,
  GoogleReCaptchaProvider,
} from "react-google-recaptcha-v3";
import React from "react";
import SubmitBtnWrapper from "./submitBtnWrapper";

const GoogleCaptchaWrapper: React.FunctionComponent<{
  children: React.ReactNode;
}> = function ({ children }) {
  const recaptchaKey: string | undefined =
    process?.env?.NEXT_PUBLIC_GOOGLE_RECAPTCHA_SITE_KEY;
  return (
    <GoogleReCaptchaProvider
      reCaptchaKey={recaptchaKey ?? "NOT DEFINED"}
      scriptProps={{}}
    >
      {children}
    </GoogleReCaptchaProvider>
  );
};

export default {
  Wrapper: GoogleCaptchaWrapper,
  ButtonWrapper: SubmitBtnWrapper,
};
