import * as React from "react";
import {
  InputRadioGroup,
  InputRadioItemForBookUsPage,
} from "../input/inputradio";
import { useFormikContext } from "formik";

export interface IStep1Props {}

export default function Step1(props: IStep1Props) {
  const form = useFormikContext();
    return (
    <div className="flex flex-col gap-5 md:flex-row items-center text-center md:text-start justify-between">
      <div>
        <p>What you Need?</p>
        <InputRadioGroup
          name="needs"
          className="flex justify-center md:justify-start  gap-5"
        >
          <label>
            <InputRadioItemForBookUsPage value="photographer">
              <p>Photographer</p>
            </InputRadioItemForBookUsPage>
          </label>
          <label>
            <InputRadioItemForBookUsPage value="videographer">
              <p>Videographer</p>
            </InputRadioItemForBookUsPage>
          </label>
        </InputRadioGroup>
      </div>
      <div>
        <p>For Business or personal purposes</p>
        <InputRadioGroup
          name="purpose"
          className="flex gap-5  justify-center md:justify-end"
        >
          <label>
            <InputRadioItemForBookUsPage value="photographer">
              <p>Personal</p>
            </InputRadioItemForBookUsPage>
          </label>
          <label>
            <InputRadioItemForBookUsPage value="videographer">
              <p>Business</p>
            </InputRadioItemForBookUsPage>
          </label>
        </InputRadioGroup>
      </div>
    </div>
  );
}
