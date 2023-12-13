import InputText from "@/components/input/InputText";
import { createClient, groq } from "next-sanity";
import * as React from "react";
import { useRef } from "react";

export interface IAddDataProps {}

export default function AddData(props: any) {
  const docNames = [...new Set(props.docNames)] as string[];
  const docNameRef = useRef<HTMLInputElement | null>(null);
  const setDocName = (d: string) =>
    docNameRef.current ? (docNameRef.current.value = d) : null;
  const data = React.useRef<HTMLTextAreaElement | null>(null);
  const refurbishedData = React.useState<any>();
  const setData = (v: string) => {
    if (!data.current || !docNameRef.current) return;
    data.current.value = v;
    try {
      const j = JSON.parse(v);
      if (Array.isArray(j)) {
        const d = j.map((d) => ({ ...d, _type: docNameRef.current!.value }));
        refurbishedData[1](d);
      } else {
        const d = {
            ...j,
          _type: docNameRef.current.value,
          // ${Object.entries(j).map(([value, index]) => `\n,"${value}": "${index}"`)}
        };
        refurbishedData[1](d);
    }
    } catch (e) {}
  };
  return (
    <div>
      <InputText placeholder="Document Name" ref={docNameRef} />
      <div className="flex gap-5">
        {docNames.map((docName,i) => (
          <span key={i} className="cursor-pointer" onClick={() => setDocName(docName)}>
            {docName}
          </span>
        ))}
      </div>
      <div className="grid grid-cols-2 px-6">
        <textarea
          ref={data}
          onChange={(e) => setData(e.target.value)}
          className="text-project-100"
        />
        <div>{JSON.stringify(refurbishedData[0], null, 2)}</div>
      </div>
    </div>
  );
}

export const getServerSideProps = async () => {
  const client = createClient({
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    dataset: "production",
  });
  const data = await client.fetch(groq`*[]._type`);
  return {
    props: { docNames: data },
  };
};
