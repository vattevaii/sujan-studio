import * as React from "react";
import {
  InputRadioGroup,
  InputRadioItemForBookUsPage,
} from "../input/inputradio";
import { useFormikContext } from "formik";
import { useRouter } from "next/router";

export interface IStep1Props {
  nextStep: () => void;
}

export default function Step1(props: IStep1Props) {
  const form = useFormikContext<{
    needs: string;
    purpose: string;
  }>();
  const [error, setError] = React.useState("");
  const router = useRouter();
  const next = () => {
    if (!form.errors.needs && !form.errors.purpose) {
      const query = router.query;
      setError("");
      router.push(
        {
          query: {
            ...query,
            needs: form.values.needs,
            purpose: form.values.purpose,
            step: 2
          },
        },
        undefined,
        {
          shallow: true,
        }
      );
      props.nextStep();
    } else setError("Make sure that both fields are selected");
  };
  return (
    <>
      <div className="flex flex-col gap-5 md:flex-row items-center text-center md:text-start justify-between">
        <div>
          <p className="text-lg">What you Need?</p>
          <InputRadioGroup
            name="needs"
            className="flex justify-center md:justify-start  gap-5"
            onChange={(v) => form.setFieldValue("needs", v)}
            value={form.values.needs}
          >
            <label>
              <InputRadioItemForBookUsPage value="photography">
                <p>Photographer</p>
              </InputRadioItemForBookUsPage>
            </label>
            <label>
              <InputRadioItemForBookUsPage value="videography">
                <p>Videographer</p>
              </InputRadioItemForBookUsPage>
            </label>
          </InputRadioGroup>
        </div>
        <div>
          <p className="text-lg">For Business or personal purposes</p>
          <InputRadioGroup
            name="purpose"
            className="flex gap-5  justify-center md:justify-end"
            onChange={(v) => form.setFieldValue("purpose", v)}
            value={form.values.purpose}
          >
            <label>
              <InputRadioItemForBookUsPage value="personal">
                <p>Personal</p>
              </InputRadioItemForBookUsPage>
            </label>
            <label>
              <InputRadioItemForBookUsPage value="business">
                <p>Business</p>
              </InputRadioItemForBookUsPage>
            </label>
          </InputRadioGroup>
        </div>
      </div>
      <div className="flex justify-between pt-6">
        <div />
        <button
          className="bg-project-100 border-2 border-project-100  text-light-grey p-2 min-w-[150px]"
          onClick={next}
        >
          Next
        </button>
      </div>
      <div className="flex justify-end text-red-500">{error}</div>
    </>
  );
}
