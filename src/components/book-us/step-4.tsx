import * as React from "react";
import InputText from "../input/InputText";
import { useFormikContext } from "formik";
import InputButton from "../input/inputbutton";
import flattenObject from "@/utils/flattenObject";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";
import { useRouter } from "next/router";
export interface IStep4Props {
  prevStep: () => void;
  submitting: boolean;
  error: string | null;
}

export default function Step4(props: IStep4Props) {
  const [error, setError] = React.useState("");
  const form = useFormikContext<{
    personal: {
      fullName: string;
      email?: string;
      phone: string;
    };
  }>();
  const { executeRecaptcha } = useGoogleReCaptcha();
  const router = useRouter();
  const handleSubmit: React.MouseEventHandler<HTMLButtonElement> = (e) => {
    router.prefetch("/estimate-request-submitted");
    e.preventDefault();
    
    
    if (form.errors.personal) {
      // const errs = flattenObject({ a: form.errors.personal });
      
      // setError(Object.values(errs).join(", "));
      setError("Please fill in your correct Contact Information");
      return;
    } else if (Object.keys(form.errors).length > 0)
      setError(
        "Please revisit the whole form to see if you entered correct data."
      );
    else {
      if (!executeRecaptcha) {
        console.log("Execute recaptcha not available yet");
        setError(
          "Execute recaptcha not available yet likely meaning key not recaptcha key not set"
        );
        return;
      }
      executeRecaptcha("bookUsForm").then((gReCaptchaToken) => {
        form.setFieldValue("gReCaptchaToken", gReCaptchaToken);
        form.handleSubmit();
      });
    }
  };
  return (
    <div onChange={() => setError("")}>
      <p className="text-lg">Your Address Details</p>
      <div className="grid gap-7">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-5 gap-y-7">
          <div className="flex flex-col justify-between w-full">
            <label className="block">
              <p>Full Name</p>
              <p className="text-red-500 text-2xs -mt-2 h-3">
                {form.errors?.personal?.fullName ?? ""}
              </p>
              <InputText
                className="w-full"
                id="full-name"
                placeholder="Your Full Name here"
                {...form.getFieldProps("personal.fullName")}
              />
            </label>
          </div>
          <div className="flex flex-col justify-between w-full">
            <label className="block">
              <p>Your Email</p>
              <p className="text-red-500 text-2xs -mt-2 h-3">
                {form.errors?.personal?.email ?? ""}
              </p>
              <InputText
                className="w-full"
                id="email"
                placeholder="Your Email here"
                {...form.getFieldProps("personal.email")}
              />
            </label>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-5 gap-y-7">
          <div className="flex flex-col justify-between w-full">
            <label className="block">
              <p>Phone Number</p>
              <p className="text-red-500 text-2xs -mt-2 h-3">
                {form.errors?.personal?.phone ?? ""}
              </p>
              <InputText
                className="w-full"
                id="phone"
                placeholder="Your Phone Number here"
                {...form.getFieldProps("personal.phone")}
              />
            </label>
          </div>
          <div className="flex flex-col justify-between w-full opacity-0">
            <label className="block">
              <p>Your Email</p>
              <InputText
                className="w-full"
                id="email"
                placeholder="your Email here"
              />
            </label>
          </div>
        </div>
      </div>

      <div className="flex justify-between pt-6">
        <button
          className="bg-inputBgF border-2 border-project-100 text-project-100 p-2 min-w-[150px]"
          onClick={props.prevStep}
        >
          Previous
        </button>
        {props.submitting ? (
          <button
            className={
              " w-28 bg-project-100 disabled:bg-project-200 disabled:cursor-not-allowed text-white p-4 cursor-pointer"
            }
          >
            <span className="loading-btn"></span>
          </button>
        ) : (
          <button
            className="bg-project-100 border-2 border-project-100  text-light-grey p-2 min-w-[150px]"
            onClick={handleSubmit}
          >
            Email My Quote.
          </button>
        )}
      </div>
      <div className="flex justify-end text-red-500">{error}</div>
      {props.error && (
        <div className="flex justify-end text-red-500">{props.error}</div>
      )}
    </div>
  );
}
