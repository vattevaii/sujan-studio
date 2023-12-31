import * as React from "react";
import Upload, { UploadProps } from "rc-upload";
import { useState } from "react";

interface IUploadFileToSanityProps {
  addFileRef: (refs: string[]) => void;
}

const UploadFileToSanity: React.FunctionComponent<IUploadFileToSanityProps> = (
  props
) => {
  const [percentage, setPercentage] = useState(0);
  const [imgData, setImgdata] = useState<string>("");
  const [isUploading, setIsUploading] = useState(false);
  const [responseArray, setResponseArray] = useState<
    { url: string; _id: string; fileName: string }[]
  >([]);
  const [fileName, setFileName] = useState("");
  const [fileSize, setFileSize] = useState<number>(0);

  const uploadprops: UploadProps = {
    action: "/api/uploadFile",
    accept: "image/*, .pdf, .doc, .docx",
    beforeUpload(file: File) {
      // Start upload
      setIsUploading(true);
      // Set file details
      setFileName(file.name);
      setFileSize(Math.floor(file.size / 1000));
      // Display image for .png format
      if (file.type === "image/png") {
        const reader = new FileReader();
        reader.onloadend = () => {
          setImgdata(reader.result as string);
        };
        reader.readAsDataURL(file);
      }
    },
    onSuccess(response: any) {
      // Finish upload
      console.log(response);
      setResponseArray((prev) => {
        const newData: typeof prev = [...prev, response.data];
        props.addFileRef(newData.map((i) => i._id));
        return newData;
      });
      setIsUploading(false);
    },
    onProgress(step) {
      // Update progress
      if (step.percent) setPercentage(Math.round(step.percent));
    },
    onError(err: Error) {
      console.log("onError", err);
    },
  };
  const deleteItem = (idx: number) => {
    setResponseArray((prev) => {
      prev.splice(idx, 1);
      props.addFileRef(prev.map((i) => i._id));
      return prev;
    });
  };
  return (
    <div className="flex flex-wrap gap-5">
      {responseArray.map((imageRes, idx) => {
        return (
          <div
            key={imageRes._id}
            className="relative max-w-[250px] overflow-hidden"
          >
            <button
              onClick={() => deleteItem(idx)}
              className="absolute top-0 right-0 p-3 bg-red-100"
            >
              ✖
            </button>
            <div className="w-full aspect-square">
              <img src={imageRes.url} className="w-full h-full object-cover" />
            </div>
            <p className="w-full">{imageRes.fileName}</p>
          </div>
        );
      })}
      {/** @ts-ignore */}
      <Upload {...uploadprops}>
        <button
          id="upload-button"
          className="h-full flex-1 border-2 border-divider rounded-md aspect-square w-full"
        >
          <div className="w-full h-full flex flex-col justify-center items-center text-gray-400 py-6 px-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="50"
              height="50"
              viewBox="0 0 100 100"
            >
              <g fill="currentColor">
                <path d="M83.012,17.5c0-0.527-0.271-0.99-0.682-1.258L66.477,2.637c-0.15-0.129-0.324-0.211-0.505-0.271C65.709,2.141,65.373,2,65,2 H18.5C17.671,2,17,2.671,17,3.5v93c0,0.828,0.671,1.5,1.5,1.5h63c0.828,0,1.5-0.672,1.5-1.5V18c0-0.067-0.011-0.13-0.02-0.195 C83.001,17.707,83.012,17.604,83.012,17.5z M20,95V5h44v12.5c0,0.829,0.672,1.5,1.5,1.5H80v76H20z" />
                <path d="M69,31H31c-0.552,0-1-0.448-1-1s0.448-1,1-1h38c0.553,0,1,0.448,1,1S69.553,31,69,31z" />
                <path d="M69,45H31c-0.552,0-1-0.448-1-1s0.448-1,1-1h38c0.553,0,1,0.448,1,1S69.553,45,69,45z" />
                <path d="M69,57H31c-0.552,0-1-0.447-1-1s0.448-1,1-1h38c0.553,0,1,0.447,1,1S69.553,57,69,57z" />
                <path d="M69,71H31c-0.552,0-1-0.447-1-1s0.448-1,1-1h38c0.553,0,1,0.447,1,1S69.553,71,69,71z" />
              </g>
            </svg>
            <p className="text-sm">Drop File here one at a time</p>
          </div>
        </button>
      </Upload>
    </div>
  );
};

export default UploadFileToSanity;
