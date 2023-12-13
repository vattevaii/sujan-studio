import * as React from "react";
import { InputRadioGroup, InputRadioItemForBookUsPage } from "../input/inputradio";

export interface IStep2Props {}

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
    </div>
  );
}
