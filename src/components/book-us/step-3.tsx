import * as React from "react";
import InputText from "../input/InputText";
import { useFormikContext } from "formik";
import { useRouter } from "next/router";
import flattenObject from "@/utils/flattenObject";

export interface IStep3Props {
  nextStep: () => void;
  prevStep: () => void;
}

export default function Step3(props: IStep3Props) {
  const [error, setError] = React.useState("");
  const router = useRouter();
  const form = useFormikContext<{
    address: {
      street: string;
      zip: string;
      city: string;
    };
    prefer: {
      date: string;
      startTime: string;
      hours: number;
    };
  }>();
  const next: React.MouseEventHandler<HTMLButtonElement> = (e) => {
    e.preventDefault();
    const query = router.query;
    if (
      form.errors.address ||
      form.errors.prefer ||
      !form.touched.address ||
      !form.touched.prefer
    ) {
      console.log(form.errors)
      // const errs = flattenObject({
      //   a: form.errors.address,
      //   b: form.errors.prefer,
      // });
      
      // const errors = Object.values(errs)
      //   .filter((v) => v)
      //   .join(", ");
      // setError(errors.length ? errors : "Please fill in the form above");
      setError("Please fill in the form above");
      return;
    }
    // 
    router.push(
      {
        query: { ...query, step: 4 },
      },
      undefined,
      {
        shallow: true,
      }
    );
    
  };
  return (
    <div onChange={() => setError("")}>
      <h3 className="text-xl">Event Details</h3>
      <div className="grid md:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-7">
        <div className="flex flex-col gap-2">
          <h3 className="text-lg">Your Address Details</h3>
          <div className="flex flex-col justify-between w-full">
            <label>
              <p>Street Address</p>
              <InputText
                className="w-full"
                id="first-name"
                placeholder="Enter your street address here"
                {...form.getFieldProps("address.street")}
              />
            </label>
          </div>
          <div className="flex flex-col justify-between w-full">
            <label className="block">
              <p>Zip / Postal Code</p>
              <InputText
                className="w-full"
                id="first-name"
                placeholder="Enter your Zip Code here"
                {...form.getFieldProps("address.zip")}
              />
            </label>
          </div>
          <div className="flex flex-col justify-between w-full">
            <label className="block">
              <p>City</p>
              <InputText
                className="w-full"
                id="first-name"
                placeholder="Enter your City here"
                {...form.getFieldProps("address.city")}
              />
            </label>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <h3 className="text-lg">Your Preferred Date</h3>
          <div className="flex flex-col justify-between w-full">
            <label className="block">
              <p>Choose Date</p>
              <p className="text-red-500 text-2xs -mt-2 h-3">
                {form.errors?.prefer?.date ?? ""}
              </p>
              <InputText
                className="w-full"
                id="email"
                placeholder="YYYY-MM-DD"
                type="date"
                {...form.getFieldProps("prefer.date")}
              />
            </label>
          </div>
          <div className="flex flex-col justify-between w-full">
            <label className="block">
              <p>Tentative Start Time</p>
              <p className="text-red-500 text-2xs -mt-2 h-3">
                {form.errors?.prefer?.startTime ?? ""}
              </p>
              <InputText
                className="w-full"
                id="email"
                placeholder="HH:MM"
                type="time"
                {...form.getFieldProps("prefer['startTime']")}
              />
            </label>
          </div>
          <div className="flex flex-col justify-between w-full">
            <label className="block">
              <p>Total Hours of Shoot</p>
              <InputText
                className="w-full"
                id="email"
                placeholder="Hours of shoot"
                type="number"
                {...form.getFieldProps("prefer.hours")}
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
          onClick={next}
        >
          Next
        </button>
      </div>
      <div className="flex justify-end text-red-500">{error}</div>
    </div>
  );
}
