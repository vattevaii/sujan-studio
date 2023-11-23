import SampleImageGrid from "@/components/test/SampleImageGrid";
import withDevCheck from "@/components/test/withDevCheck";
import Link from "next/link";
import * as React from "react";
import { useState } from "react";

interface IImageGridProps {}
const isValidUrl = (urlString: string) => {
  var urlPattern = new RegExp(
    "^(https?:\\/\\/)?" + // validate protocol
      "((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|" + // validate domain name
      "((\\d{1,3}\\.){3}\\d{1,3}))" + // validate OR ip (v4) address
      "(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*" + // validate port and path
      "(\\?[;&a-z\\d%_.~+=-]*)?" + // validate query string
      "(\\#[-a-z\\d_]*)?$",
    "i"
  ); // validate fragment locator
  return !!urlPattern.test(urlString);
};
const ImageGrid: React.FunctionComponent<IImageGridProps> = (props) => {
  const [layout, setLayout] = useState<"lg" | "md">("lg");
  const [domain, setDomain] = useState("http://placekitten.com/");
  const [imageList, setImageList] = useState(["", "", "", "", "", ""]);
  const changeImg = (data: string, index: number) => {
    setImageList((prevState) => {
      return prevState.map((item, i) => {
        if (i === index) {
          return data.split(domain)[1];
        }
        return item;
      });
    });
  };
  const validImages = imageList.map((image) => {
    return isValidUrl(domain+image) ? domain+image : "";
  });
  return (
    <div>
      <Link href="/admin">Go Back</Link>
      {layout === "lg" ? (
        <button
          className="bg-teal-950 p-2 mx-4"
          onClick={() => setLayout("md")}
        >
          MD
        </button>
      ) : (
        <button
          className="bg-teal-950 p-2 mx-4"
          onClick={() => setLayout("lg")}
        >
          LG
        </button>
      )}
      <div className="flex">
        <div className="grid grid-cols-1 gap-3 h-min">
          <input
            className="text-black"
            type="text"
            // onChange={(e) => changeImg(e.target.value, 0)}
            value={domain}
          />
          <input
            className="w-max border-none bg-transparent"
            type="text"
            onChange={(e) => changeImg(e.target.value, 0)}
            value={domain + imageList[0]}
          />
          <input
            className="w-max border-none bg-transparent"
            type="text"
            onChange={(e) => changeImg(e.target.value, 1)}
            value={domain + imageList[1]}
          />
          <input
            className="w-max border-none bg-transparent"
            type="text"
            onChange={(e) => changeImg(e.target.value, 2)}
            value={domain + imageList[2]}
          />
          <input
            className="w-max border-none bg-transparent"
            type="text"
            onChange={(e) => changeImg(e.target.value, 3)}
            value={domain + imageList[3]}
          />
          <input
            className="w-max border-none bg-transparent"
            type="text"
            onChange={(e) => changeImg(e.target.value, 4)}
            value={domain + imageList[4]}
          />
          <input
            className="w-max border-none bg-transparent"
            type="text"
            onChange={(e) => changeImg(e.target.value, 5)}
            value={domain + imageList[5]}
          />
        </div>
        <div className="mx-auto overflow-auto resize-x hover:resize p-5 border max-w-[900px] max-h-[70vh]">
          {/* @ts-expect-error */}
          <SampleImageGrid images={validImages} show={layout} />
        </div>
      </div>
    </div>
  );
};

export default withDevCheck(ImageGrid);
