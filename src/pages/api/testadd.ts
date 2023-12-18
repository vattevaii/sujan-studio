import type { NextApiRequest, NextApiResponse } from "next";
import { client } from "../../../sanity/lib/client";
type ResponseData = {
  message: string;
} & { [x: string]: any };
const TOKEN =
  "skoWQ5tU9s7mXGJHf927wYM0V4CMvi3xqidqGN4pAksWdNB6wrDDZJVjA3kgNZgzKOsJxiFp7SBR0VXdH7OqXFoL2JO3X4Yqc6pLr4rJD7YHOIngIH2PQhko8Y5EHOx5cO9UDE9COmwclodT0DLO2JXzD0VGzCMaXsHgkav065u3rzSnQuY9";
const data = [
  {
    name: "Corporate Events",
    dollars: "$500.00",
    privileges: [
      "Starting from 2 hours minimum session",
      "Professionally Edited & Etched Images",
      "Unlimited Image From Session",
      "4K-8K Images/Videos(4K UHD/8KUHD)",
      "24-48 Hours Turnaround",
    ],
  },
  {
    name: "Weddings/Engagement",
    dollars: "$750.00",
    privileges: [
      "Starting from 3 hours minimum session",
      "Professionally Edited & Etched Images",
      "Unlimited Image From Session",
      "4K-8K Images/Videos(4K UHD/8KUHD)",
      "1-2 Week Turnaround",
    ],
  },
  {
    name: "Family & Portrait",
    dollars: "$400.00",
    privileges: [
      "Starting from 3 hours minimum session",
      "Professionally Edited & Etched Images",
      "40-60 Image From Session",
      "4K-8K Images/Videos(4K UHD/8KUHD)",
      "48-72 Hours Turnaround",
    ],
  },
  {
    name: "School & Graduation",
    dollars: "$400.00",
    privileges: [
      "Starting from 2 hours minimum session",
      "Professionally Edited & Etched Images",
      "Unlimited Image From Session",
      "4K-8K Images/Videos(4K UHD/8KUHD)",
      "48-72 Hours Turnaround",
    ],
  },
  {
    name: "Sports & Events",
    dollars: "$500.00",
    privileges: [
      "Starting from 2 hours minimum session",
      "Professionally Edited & Etched Images",
      "250-300 Image From Session",
      "4K-8K Images/Videos(4K UHD/8KUHD)",
      "48-72 Hours Turnaround",
    ],
  },
  {
    name: "Maternity",
    dollars: "$400.00",
    privileges: [
      "Starting from 2 hours minimum session",
      "Professionally Edited & Etched Images",
      "20-30 Images From Session",
      "4K-8K Images/Videos(4K UHD/8KUHD)",
      "48-72 Hours Turnaround",
    ],
  },
  {
    name: "Lifestyle",
    dollars: "$400.00",
    privileges: [
      "Starting from 2 hours minimum session",
      "Professionally Edited & Etched Images",
      "25-30 Image From Session",
      "4K-8K Images/Videos(4K UHD/8KUHD)",
      "24-48 Hours Turnaround",
    ],
  },
  {
    name: "Automotive",
    dollars: "$200.00",
    privileges: [
      "Starting from 2 hours minimum session",
      "Professionally Edited & Etched Images",
      "30-40 Images From Session",
      "4K-8K Images/Videos(4K UHD/8KUHD)",
      "24-48 Hours Turnaround",
    ],
  },
  {
    name: "Products & Fashion",
    dollars: "$400.00",
    privileges: [
      "Starting from 2 hours minimum session",
      "Professionally Edited & Etched Images",
      "25-30 Images From Session",
      "4K-8K Images/Videos(4K UHD/8KUHD)",
      "48-72 Hours Turnaround",
    ],
  },
  {
    name: "Food/Restaurant",
    dollars: "$400.00",
    privileges: [
      "Starting from 2 hours minimum session",
      "Professionally Edited & Etched Images",
      "25-30 Images From Session",
      "4K-8K Images/Videos(4K UHD/8KUHD)",
      "48-72 Hours Turnaround",
    ],
  },
  {
    name: "Real Estate & Commercial",
    dollars: "$200.00",
    privileges: [
      "Starting from 1 hour minimum session",
      "Professionally Edited & Etched Images",
      "15-25 Images From Session",
      "4K-8K Images/Videos(4K UHD/8KUHD)",
      "24-48 Hours Turnaround",
    ],
  },
  {
    name: "Musical Events & Tours",
    dollars: "$400.00",
    privileges: [
      "Starting from 2 hours minimum session",
      "Professionally Edited & Etched Images",
      "250-300 Images From Session",
      "4K-8K Images/Videos(4K UHD/8KUHD)",
      "24-48 Hours Turnaround",
    ],
  },
  {
    name: "Party Events",
    dollars: "$400.00",
    privileges: [
      "Starting from 2 hours minimum session",
      "Professionally Edited & Etched Images",
      "Unlimited Image From Session",
      "4K-8K Images/Videos(4K UHD/8KUHD)",
      "48-72 Hours Turnaround",
    ],
  },
];

const schemaName = "package";
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  try {
    const parsedData = data.map((d) => ({
      _type: schemaName,
      ...d,
    }));
    await client.delete({ query: `*[_type == "${schemaName}"][0...999]` }, {token: TOKEN});
    const created = [];
    for (let i = 0; i < parsedData.length; i++) {
      const d = await client.create(parsedData[i], {
        token: TOKEN,
      });
      created.push(d._id);
    }
    res.status(201).json({ message: "Booking success!", _ids: created });

    //   .then(// console.log)
    //   .catch(console.error)
  } catch (err) {
    res.status(500).json({ message: err as string });
  }
}
