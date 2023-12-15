import StepDots from "./StepDots";
import Step1 from "./step-1";
import Step2 from "./step-2";
import Step3 from "./step-3";
import Step4 from "./step-4";
export type TypeBookUs = {
  needs: string;
  purpose: string;
  "exactNeed": string;
  "address":{
    street: string;
    zip: string;
    city: string;
  },
  date: {
    shootdate: Date;
    starttime: string;
    hours: number
  }
};
export { Step1, Step2, Step3, Step4, StepDots };
