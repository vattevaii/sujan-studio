import Image, { ImageProps } from "next/image";
import * as React from "react";

interface IWeddingPhotoItemProps {
    imageSrc: string;
    date: string;
    bride: string;
    groom: string;
}

const AND = () => {
  return (
    <svg
      width="34"
      height="28"
      viewBox="0 0 34 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8.74 27.04C6.28667 27.04 4.26 26.4 2.66 25.12C0.9 23.7067 0.02 21.8133 0.02 19.44C0.02 18.6667 0.113333 17.9867 0.3 17.4C0.993333 14.92 2.36667 12.92 4.42 11.4C6.36667 9.98667 8.68667 9.13333 11.38 8.84C10.5533 7.96 10.14 6.98667 10.14 5.92C10.14 4.13333 10.9667 2.69333 12.62 1.6C14.06 0.639998 15.7133 0.159998 17.58 0.159998C20.6733 0.159998 22.22 1.22667 22.22 3.36C22.22 4.18667 21.9 4.92 21.26 5.56C20.62 6.2 19.8867 6.52 19.06 6.52C18.6067 6.52 18.2067 6.42667 17.86 6.24C17.4067 6 17.18 5.68 17.18 5.28C17.18 5.2 17.2067 5.08 17.26 4.92C17.26 4.76 17.3133 4.68 17.42 4.68C17.5 4.68 17.54 4.73333 17.54 4.84C17.54 4.92 17.5267 5 17.5 5.08C17.4467 5.18667 17.42 5.26667 17.42 5.32C17.42 5.82667 17.6867 6.08 18.22 6.08C19.02 6.08 19.74 5.84 20.38 5.36C21.0733 4.82667 21.42 4.16 21.42 3.36C21.42 2.48 21.06 1.78667 20.34 1.28C19.7267 0.826666 18.9533 0.599999 18.02 0.599999C16.2333 0.599999 14.7133 1.14667 13.46 2.24C12.1533 3.38667 11.5 4.84 11.5 6.6C11.5 7.48 11.7133 8.21333 12.14 8.8C12.3 8.8 12.46 8.8 12.62 8.8C12.78 8.77333 12.94 8.76 13.1 8.76C16.06 8.76 17.54 9.17333 17.54 10C17.54 10.5333 17.06 10.8 16.1 10.8C14.6067 10.8 13.26 10.36 12.06 9.48C6.91333 10.4133 3.76667 13.0667 2.62 17.44C2.43333 18.08 2.34 18.8 2.34 19.6C2.34 21.6267 2.99333 23.2933 4.3 24.6C5.60667 25.8267 7.3 26.44 9.38 26.44C11.8867 26.44 14.1933 25.64 16.3 24.04C18.5667 22.28 19.7 20.1867 19.7 17.76C19.7 15.4133 18.3267 14.24 15.58 14.24C14.7533 14.24 13.9267 14.3333 13.1 14.52C12.3 14.7067 11.4867 15 10.66 15.4C10.18 15.6133 9.74 15.88 9.34 16.2C8.94 16.4933 8.56667 16.8267 8.22 17.2C7.44667 18.1333 7.06 19.0533 7.06 19.96C7.06 20.76 7.32667 21.4267 7.86 21.96C8.39333 22.4933 9.06 22.76 9.86 22.76C10.74 22.76 11.5133 22.56 12.18 22.16C12.98 21.7067 13.38 21.08 13.38 20.28C13.38 20.04 13.46 19.92 13.62 19.92C13.8333 19.92 13.94 20.12 13.94 20.52C13.94 21.4 13.4733 22.12 12.54 22.68C11.7933 23.1333 10.9267 23.36 9.94 23.36C8.74 23.36 7.76667 22.9067 7.02 22C6.3 21.12 5.94 20.0933 5.94 18.92C5.94 16.5733 7.03333 14.88 9.22 13.84C10.42 13.28 12.2067 13 14.58 13C15.9667 13 18.02 13.12 20.74 13.36C23.46 13.6 25.5 13.72 26.86 13.72C31.1 13.72 33.22 12.7867 33.22 10.92C33.22 9.88 32.6467 9.26667 31.5 9.08C31.26 9.02667 31.14 8.90667 31.14 8.72C31.14 8.48 31.26 8.36 31.5 8.36C32.1133 8.36 32.6867 8.62667 33.22 9.16C33.6733 9.69333 33.9 10.28 33.9 10.92C33.9 10.9733 33.9 11.04 33.9 11.12C33.9 11.2 33.8867 11.2667 33.86 11.32C33.4333 13.4 31.1133 14.44 26.9 14.44C25.9933 14.44 24.7133 14.4 23.06 14.32C22.1533 14.2667 21.38 14.2267 20.74 14.2C20.1 14.1733 19.58 14.16 19.18 14.16C20.54 14.8 21.22 16.04 21.22 17.88C21.22 20.6267 19.78 22.9067 16.9 24.72C14.3667 26.2667 11.6467 27.04 8.74 27.04ZM15.5 10.4C16.3267 10.4 16.74 10.2267 16.74 9.88C16.74 9.42667 16.14 9.2 14.94 9.2C14.5667 9.2 14.18 9.21333 13.78 9.24C13.4067 9.26667 13.0333 9.30667 12.66 9.36C13.4867 10.0533 14.4333 10.4 15.5 10.4Z"
        fill="currentColor"
      />
    </svg>
  );
};

export const HoverImageItem: React.FunctionComponent<
  React.PropsWithChildren<ImageProps>
> = ({ children, ...props }) => {
  return (
    <div className="group relative w-full h-full">
      <div className="w-full h-full">
          <Image {...props} />
      </div>
      <div className="transition-all duration-300 opacity-0 group-hover:opacity-100 absolute top-0 left-0 w-full h-full">
        {children}
      </div>
    </div>
  );
};

const WeddingPhotoItem: React.FunctionComponent<IWeddingPhotoItemProps> = (
  props
) => {
  return (
    <div className="aspect-[5.1/6.8]">
        <HoverImageItem className="w-full h-full object-cover" alt="" src={props.imageSrc} width={500} height={500}>
          <>
            <div className="absolute top-0 left-0 w-full h-full bg-[#000815] opacity-70" />
            <div className="w-full h-full p-5 relative z-10">
              <div className="border-light-grey inset-0 h-full border grid place-items-center font-antonio">
                <div className="grid place-items-center gap-3">
                    <p className="font-actays">{props.date}</p>
                    <p className="text-11xl">{props.groom}</p>
                    <AND />
                    <p className="text-11xl">{props.bride}</p>
                </div>
              </div>
            </div>
          </>
        </HoverImageItem>
    </div>
  );
};

export default WeddingPhotoItem;