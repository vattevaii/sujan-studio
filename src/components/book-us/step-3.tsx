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
    if (form.errors.address || form.errors.prefer) {
      const errs=flattenObject({a:form.errors.address, b:form.errors.prefer});
      console.log(errs)
      setError(Object.values(errs).join(", "));
      return;
    }
    // console.log(form.values);
    router.push(
      {
        query: { ...query, step: 4 },
      },
      undefined,
      {
        shallow: true,
      }
    );
    console.log(form.values);
  };
  return (
    <div>
      <div className="grid grid-cols-2 gap-7">
        <div className="flex flex-col gap-2">
          <h3 className="text-lg">Your Address Details</h3>
          <div className="flex flex-col justify-between w-full">
            <label>
              <p>Street Address</p>
              <InputText
                className="w-full"
                id="first-name"
                placeholder="your First Name here"
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
                placeholder="your First Name here"
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
                placeholder="your First Name here"
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
              <InputText
                className="w-full"
                id="email"
                placeholder="your Email here"
                type="date"
                {...form.getFieldProps("prefer.date")}
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
                placeholder="your Email here"
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
