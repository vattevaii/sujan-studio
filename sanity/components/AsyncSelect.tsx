import { useState, useEffect } from "react";
import { client } from "../lib/client";

const AsyncSelect = (props: any) => {
  const [listItems, setListItems] = useState([]);
  const { schemaType, renderDefault } = props;
  const { options } = schemaType;
  const { url, formatResponse } = options;

  useEffect(() => {
    const getCats = async () => {
      const data = await client.fetch(url);
      if (formatResponse) setListItems(formatResponse(data));
      else setListItems(data);
    };

    getCats();
  }, [url]);

  return renderDefault({
    ...props,
    schemaType: { ...schemaType, options: { ...options, list: listItems } },
  });
};

export default AsyncSelect;
