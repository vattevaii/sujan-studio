import * as React from "react";
import {
  InputRadioGroup,
  InputRadioItemForBookUsPage,
} from "../input/inputradio";
import { useRouter } from "next/router";
import { useFormikContext } from "formik";
import { createClient } from "next-sanity";
import { client } from "../../../sanity/lib/client";
import Image from "next/image";
export interface IStep2Props {
  nextStep: () => void;
  prevStep: () => void;
}
export default function Step2(props: IStep2Props) {
  const form = useFormikContext<{
    exactNeed: string;
  }>();
  const [currPath, setPath] = React.useState("");
  const [fetching, setFetching] = React.useState(false);
  const [need, setNeed] = React.useState("");
  const [purpose, setPurpose] = React.useState("");
  const [error, setError] = React.useState("");
  const router = useRouter();
  const [items, setItems] = React.useState<
    { serviceName: string; icon: string }[]
  >([]);
  const next = () => {
    const query = router.query;
    if (form.values["exactNeed"]) {
      setError("");
      router.push(
        {
          query: { ...query, exactNeed: form.values["exactNeed"], step: 3 },
        },
        undefined,
        {
          shallow: true,
        }
      );
      props.nextStep();
    } else setError("We need full detail to get estimate");
  };
  const prev = () => {
    const query = router.query;
    router.push(
      {
        query: { ...query, exactNeed: form.values["exactNeed"], step: 1 },
      },
      undefined,
      {
        shallow: true,
      }
    );
    props.prevStep();
  };
  React.useEffect(() => {
    const query = router.query;
    if (fetching || !query.needs || !query.purpose) return;
    if (currPath === router.asPath) return;
    setPath(router.asPath);
    if (query.needs === need && purpose === query.purpose) return;
    setItems([]);
    setNeed((query.needs as string) ?? "");
    setPurpose((query.purpose as string) ?? "");
    setFetching(true);
    // console.log("start fetch")
    const fetchD = client
      .fetch(
        `*[_type == 'serviceItem' && '${query.needs}' in services && '${query.purpose}' in serviceScope]{
        serviceName,
        "icon": icon.asset->url
        }`
      )
      .then((v: { serviceName: string; icon: string }[]) => {
        
        if (
          typeof query["exactNeed"] === "string" &&
          v.findIndex((d) => d.serviceName === query["exactNeed"]) === -1
        ) {
          form.setFieldValue("exactNeed", "");
          router.push(
            {
              query: { ...query, exactNeed: undefined, step: 2 },
            },
            undefined,
            {
              shallow: true,
            }
          );
        }
        setItems(v);
      })
      .finally(() => {
        setFetching(false);
      });
    return () => {};
  }, [router]);
  return (
    <div>
      <p className="text-lg">What do you Need to shoot?</p>
      <InputRadioGroup
        name="exactNeed"
        className="grid grid-cols-[repeat(auto-fill,minmax(200px,1fr))] gap-5"
        onChange={(v) => form.setFieldValue("exactNeed", v)}
        value={form.values["exactNeed"]}
      >
        {items.map((d) => (
          <label key={d.serviceName}>
            <InputRadioItemForBookUsPage value={d.serviceName}>
              <div className="flex w-5/6 gap-5">
                <Image src={d.icon ?? ""} width={25} height={25} alt="" />
                <p>{d.serviceName}</p>
              </div>
            </InputRadioItemForBookUsPage>
          </label>
        ))}
      </InputRadioGroup>
      <div className="flex justify-between pt-6">
        <button
          className="bg-inputBgF border-2 border-project-100 text-project-100 p-2 min-w-[150px]"
          onClick={prev}
        >
          Previous
        </button>

        <button
          className="bg-project-100 border-2 border-project-100  text-light-grey p-2 min-w-[150px]"
          onClick={next}
        >
          Next
        </button>
      </div>
      <div className="flex justify-end text-red-500">{error}</div>
    </div>
  );
}
