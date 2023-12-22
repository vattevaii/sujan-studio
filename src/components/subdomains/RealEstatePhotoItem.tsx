import Image from "next/image";
import Link from "next/link";
import * as React from "react";

interface IRealEstatePhotoItemProps {
  imageSrc: string;
  name: string;
}

const RealEstatePhotoItem: React.FunctionComponent<
  IRealEstatePhotoItemProps & React.HTMLProps<HTMLDivElement>
> = ({imageSrc,name,...props}) => {
  return (
    <div {...props}>
      <Image src={imageSrc} alt="" width={500} height={500}/>
      <Link href="" className="text-left text-5xl hover:underline">
        <p>
          {name}
          <span>
            <svg
            className="inline mx-2"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.84615 0V3.69231H17.7046L0 21.3969L2.60308 24L20.3077 6.29538V22.1538H24V0H1.84615Z"
                fill="#DCEAFD"
              />
            </svg>{" "}
          </span>
        </p>
      </Link>
    </div>
  );
};

export default RealEstatePhotoItem;
