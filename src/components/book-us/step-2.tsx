import * as React from "react";
import {
  InputRadioGroup,
  InputRadioItemForBookUsPage,
} from "../input/inputradio";

export interface IStep2Props {
  nextStep: () => void;
  prevStep: () => void;
}

export default function Step2(props: IStep2Props) {
  return (
    <div>
      <p>What do you Need to shoot?</p>
      <InputRadioGroup
        name="exact-need"
        className="grid grid-cols-[repeat(auto-fill,minmax(200px,1fr))] gap-5"
      >
        {[
          "Wedding",
          "Engagement",
          "Party/Event",
          "Wedding",
          "Engagement",
          "Party/Event",
          "Wedding",
          "Engagement",
          "Party/Event",
          "Wedding",
          "Engagement",
          "Party/Event",
          "Wedding",
          "Engagement",
          "Party/Event",
        ].map((d) => (
          <label key={d}>
            <InputRadioItemForBookUsPage value={d.split(" ").join("-")}>
              <p>{d}</p>
            </InputRadioItemForBookUsPage>
          </label>
        ))}
        <label>
          <InputRadioItemForBookUsPage value="videographer">
            <p>Videographer</p>
          </InputRadioItemForBookUsPage>
        </label>
      </InputRadioGroup>
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
