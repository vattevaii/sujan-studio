import * as React from "react";
import InputText from "../input/InputText";
import { useFormikContext } from "formik";
import InputButton from "../input/inputbutton";

export interface IStep4Props {
  prevStep: () => void;
}

export default function Step4(props: IStep4Props) {
  const form = useFormikContext();
  return (
    <div>
      <p>Your Address Details</p>
      <div className="grid gap-7">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-5 gap-y-7">
          <div className="flex flex-col justify-between w-full">
            <label className="block">
              <p>Full Name</p>
              <InputText
                className="w-full"
                id="first-name"
                placeholder="your First Name here"
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
              />
            </label>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-5 gap-y-7">
          <div className="flex flex-col justify-between w-full">
            <label className="block">
              <p>Full Name</p>
              <InputText
                className="w-full"
                id="first-name"
                placeholder="your First Name here"
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
        <InputButton value="Email My Quote." />
      </div>
    </div>
  );
}
