import Link from "next/link";
import * as React from "react";

interface ISTopBarProps {
  service: string;
}

const STopBar: React.FunctionComponent<ISTopBarProps> = (props) => {
  return (
    <div className="flex justify-between text-light-grey py-2 px-[min(calc(0px+8vw))] bg-[#021129] text-center">
      <Link href={"/"} className="hover:underline">
        Back to Sujan Studio
      </Link>
      <p>This is our {props.service} Photography Service</p>
    </div>
  );
};

export default STopBar;
