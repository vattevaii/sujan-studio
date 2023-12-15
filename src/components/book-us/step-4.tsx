import * as React from "react";
import InputText from "../input/InputText";
import { useFormikContext } from "formik";
import InputButton from "../input/inputbutton";

export interface IStep4Props {
  prevStep: () => void;
}
const isEmpty = (s: Array<string | number>) => {
  let empty = false;
  s.forEach((s) => {
    if (s.toString().length === 0) empty = true;
  });
  return empty;
};
export default function Step4(props: IStep4Props) {
  const [error, setError] = React.useState("");
  const form = useFormikContext<{
    personal: {
      "fullName": string;
      email: string;
      phone: string;
    };
  }>();
  const handleSubmit = () => {
    if (!form.values.personal || isEmpty(Object.values(form.values.personal)))
      setError("Please fill in your information");
    else form.handleSubmit();
  };
  return (
    <div>
      <p className="text-lg">Your Address Details</p>
      <div className="grid gap-7">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-5 gap-y-7">
          <div className="flex flex-col justify-between w-full">
            <label className="block">
              <p>Full Name</p>
              <InputText
                className="w-full"
                id="full-name"
                placeholder="your Full Name here"
                {...form.getFieldProps("personal.fullName")}
              />
            </label>
          </div>
          <div className="flex flex-col justify-between w-full">
            <label className="block">
              <p>Your Email</p>
              <InputText
                className="w-full"
                id="email"
                placeholder="your Email here"
                {...form.getFieldProps("personal.email")}
              />
            </label>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-5 gap-y-7">
          <div className="flex flex-col justify-between w-full">
            <label className="block">
              <p>Phone Number</p>
              <InputText
                className="w-full"
                id="first-name"
                placeholder="your First Name here"
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
        <button
          className="bg-project-100 border-2 border-project-100  text-light-grey p-2 min-w-[150px]"
          onClick={handleSubmit}
        >
          Email My Quote.
        </button>
      </div>
      <div className="flex justify-end text-red-500">{error}</div>
    </div>
  );
}
