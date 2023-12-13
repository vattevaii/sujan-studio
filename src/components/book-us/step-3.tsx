import * as React from "react";
import InputText from "../input/InputText";

export interface IStep3Props {
  
  nextStep: () => void;
  prevStep: () => void;
}

export default function Step3(props: IStep3Props) {
  return (
    <div>
      <p>Your Address Details</p>
      <div className="grid gap-7">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-5 gap-y-7">
          <div className="flex flex-col justify-between w-full">
            <label>
              <p>Street Address</p>
              <InputText
                className="w-full"
                id="first-name"
                placeholder="your First Name here"
              />
            </label>
          </div>
          <div className="flex flex-col justify-between w-full">
            <label className="block">
              <p>Choose Date</p>
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
              <p>Zip / Postal Code</p>
              <InputText
                className="w-full"
                id="first-name"
                placeholder="your First Name here"
              />
            </label>
          </div>
          <div className="flex flex-col justify-between w-full">
            <label className="block">
              <p>Tentative Start Time</p>
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
              <p>City</p>
              <InputText
                className="w-full"
                id="first-name"
                placeholder="your First Name here"
              />
            </label>
          </div>
          <div className="flex flex-col justify-between w-full">
            <label className="block">
              <p>Total Hours of Shoot</p>
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
              <p>Country</p>
              <InputText
                className="w-full"
                id="first-name"
                placeholder="your First Name here"
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
              onClick={props.nextStep}
            >
              Next
            </button>
          
        </div>
    </div>
  );
}
