import * as React from "react";

interface IStepDotsProps {
  totalSteps: any[];
  currentStep: number;
  changeStep: (n: number) => void;
}

const StepDots: React.FunctionComponent<IStepDotsProps> = (props) => {
  const Step = ({ v, i }: { v: any; i: number }) => (
    <div
      className={
        (props.currentStep >= i + 1
          ? "bg-project-100 text-light-grey"
          : "bg-divider text-project-100") +
        " transition-all circle rounded-full flex justify-center items-center w-8 h-8 lg:w-11 lg:h-11 text-center text-sm lg:text-lg"
      }
      // onClick={() => props.changeStep(i + 1)}
    >
      {v}
    </div>
  );
  return (
    <div
      id="book-step"
      className="flex justify-center items-center gap-2 xl:gap-5 w-full py-6"
    >
      {props.totalSteps.map((v, i) =>
        i === 0 ? (
          <Step key={i} v={v} i={i} />
        ) : (
          <React.Fragment key={i}>
            <div
              className={
                (props.currentStep >= i + 1
                  ? "bg-project-100 text-light-grey"
                  : "bg-divider text-project-100") +
                " h-1 lg:h-2 w-[clamp(20px,calc(10px+7vw),200px)] rounded-lg"
              }
            ></div>
            <Step v={v} i={i} />
          </React.Fragment>
        )
      )}
    </div>
  );
};

export default StepDots;
