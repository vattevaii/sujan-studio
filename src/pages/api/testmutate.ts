import type { NextApiRequest, NextApiResponse } from "next";
import { client } from "../../../sanity/lib/client";
import { projectId } from "../../../sanity/env";
type ResponseData = {
  message: string | any;
} & { [x: string]: any };
const TOKEN =
  "skoWQ5tU9s7mXGJHf927wYM0V4CMvi3xqidqGN4pAksWdNB6wrDDZJVjA3kgNZgzKOsJxiFp7SBR0VXdH7OqXFoL2JO3X4Yqc6pLr4rJD7YHOIngIH2PQhko8Y5EHOx5cO9UDE9COmwclodT0DLO2JXzD0VGzCMaXsHgkav065u3rzSnQuY9";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  if (process.env.NODE_ENV === "production") {
    res.status(400).json({ message: "Not accessible" });
  }
  try {
    const mutations = [
      {
        sublocations: [
          {
            sublocationName: "Alexander Heights - Koondoola",
            slug: {
              _type: "slug",
              current: "alexander-heights-koondoola",
            },
          },
          {
            sublocationName: "Alkimos - Eglinton",
            slug: {
              _type: "slug",
              current: "alkimos-eglinton",
            },
          },
          {
            sublocationName: "Armadale - Wungong - Brookdale",
            slug: {
              _type: "slug",
              current: "armadale-wungong-brookdale",
            },
          },
          {
            sublocationName: "Ashendon - Lesley",
            slug: {
              _type: "slug",
              current: "ashendon-lesley",
            },
          },
          {
            sublocationName: "Augusta",
            slug: {
              _type: "slug",
              current: "augusta",
            },
          },
          {
            sublocationName: "Australind - Leschenault",
            slug: {
              _type: "slug",
              current: "australind-leschenault",
            },
          },
          {
            sublocationName: "Aveley",
            slug: {
              _type: "slug",
              current: "aveley",
            },
          },
          {
            sublocationName: "Avon Valley National Park",
            slug: {
              _type: "slug",
              current: "avon-valley-national-park",
            },
          },
          {
            sublocationName: "Balcatta - Hamersley",
            slug: {
              _type: "slug",
              current: "balcatta-hamersley",
            },
          },
          {
            sublocationName: "Balga - Mirrabooka",
            slug: {
              _type: "slug",
              current: "balga-mirrabooka",
            },
          },
          {
            sublocationName: "Ballajura",
            slug: {
              _type: "slug",
              current: "ballajura",
            },
          },
          {
            sublocationName: "Bassendean - Eden Hill - Ashfield",
            slug: {
              _type: "slug",
              current: "bassendean-eden-hill-ashfield",
            },
          },
          {
            sublocationName: "Bayswater - Embleton - Bedford",
            slug: {
              _type: "slug",
              current: "bayswater-embleton-bedford",
            },
          },
          {
            sublocationName: "Beckenham - Kenwick - Langford",
            slug: {
              _type: "slug",
              current: "beckenham-kenwick-langford",
            },
          },
          {
            sublocationName: "Beechboro",
            slug: {
              _type: "slug",
              current: "beechboro",
            },
          },
          {
            sublocationName: "Belmont - Ascot - Redcliffe",
            slug: {
              _type: "slug",
              current: "belmont-ascot-redcliffe",
            },
          },
          {
            sublocationName: "Bentley - Wilson - St James",
            slug: {
              _type: "slug",
              current: "bentley-wilson-st-james",
            },
          },
          {
            sublocationName: "Brabham - Henley Brook",
            slug: {
              _type: "slug",
              current: "brabham-henley-brook",
            },
          },
          {
            sublocationName: "Bridgetown - Boyup Brook",
            slug: {
              _type: "slug",
              current: "bridgetown-boyup-brook",
            },
          },
          {
            sublocationName: "Bullsbrook",
            slug: {
              _type: "slug",
              current: "bullsbrook",
            },
          },
          {
            sublocationName: "Busselton - East",
            slug: {
              _type: "slug",
              current: "busselton-east",
            },
          },
          {
            sublocationName: "Busselton - West",
            slug: {
              _type: "slug",
              current: "busselton-west",
            },
          },
          {
            sublocationName: "Busselton Surrounds",
            slug: {
              _type: "slug",
              current: "busselton-surrounds",
            },
          },
          {
            sublocationName: "Butler - Merriwa - Ridgewood",
            slug: {
              _type: "slug",
              current: "butler-merriwa-ridgewood",
            },
          },
          {
            sublocationName: "Camillo - Champion Lakes",
            slug: {
              _type: "slug",
              current: "camillo-champion-lakes",
            },
          },
          {
            sublocationName: "Canning Vale - East",
            slug: {
              _type: "slug",
              current: "canning-vale-east",
            },
          },
          {
            sublocationName: "Canning Vale - West",
            slug: {
              _type: "slug",
              current: "canning-vale-west",
            },
          },
          {
            sublocationName: "Canning Vale Commercial",
            slug: {
              _type: "slug",
              current: "canning-vale-commercial",
            },
          },
          {
            sublocationName: "Cannington - Queens Park",
            slug: {
              _type: "slug",
              current: "cannington-queens-park",
            },
          },
          {
            sublocationName: "Capel",
            slug: {
              _type: "slug",
              current: "capel",
            },
          },
          {
            sublocationName: "Carabooda - Pinjar",
            slug: {
              _type: "slug",
              current: "carabooda-pinjar",
            },
          },
          {
            sublocationName: "Carramar",
            slug: {
              _type: "slug",
              current: "carramar",
            },
          },
          {
            sublocationName: "Chidlow",
            slug: {
              _type: "slug",
              current: "chidlow",
            },
          },
          {
            sublocationName: "City Beach",
            slug: {
              _type: "slug",
              current: "city-beach",
            },
          },
          {
            sublocationName: "Claremont (WA)",
            slug: {
              _type: "slug",
              current: "claremont-wa",
            },
          },
          {
            sublocationName: "Clarkson",
            slug: {
              _type: "slug",
              current: "clarkson",
            },
          },
          {
            sublocationName: "Cloverdale",
            slug: {
              _type: "slug",
              current: "cloverdale",
            },
          },
          {
            sublocationName: "College Grove - Carey Park",
            slug: {
              _type: "slug",
              current: "college-grove-carey-park",
            },
          },
          {
            sublocationName: "Collie",
            slug: {
              _type: "slug",
              current: "collie",
            },
          },
          {
            sublocationName: "Cottesloe",
            slug: {
              _type: "slug",
              current: "cottesloe",
            },
          },
          {
            sublocationName: "Craigie - Beldon",
            slug: {
              _type: "slug",
              current: "craigie-beldon",
            },
          },
          {
            sublocationName: "Currambine - Kinross",
            slug: {
              _type: "slug",
              current: "currambine-kinross",
            },
          },
          {
            sublocationName: "Dalyellup",
            slug: {
              _type: "slug",
              current: "dalyellup",
            },
          },
          {
            sublocationName: "Dardanup",
            slug: {
              _type: "slug",
              current: "dardanup",
            },
          },
          {
            sublocationName: "Davenport",
            slug: {
              _type: "slug",
              current: "davenport",
            },
          },
          {
            sublocationName: "Dawesville - Bouvard",
            slug: {
              _type: "slug",
              current: "dawesville-bouvard",
            },
          },
          {
            sublocationName: "Dianella - North",
            slug: {
              _type: "slug",
              current: "dianella-north",
            },
          },
          {
            sublocationName: "Dianella - South",
            slug: {
              _type: "slug",
              current: "dianella-south",
            },
          },
          {
            sublocationName: "Donnybrook - Balingup",
            slug: {
              _type: "slug",
              current: "donnybrook-balingup",
            },
          },
          {
            sublocationName: "Duncraig",
            slug: {
              _type: "slug",
              current: "duncraig",
            },
          },
          {
            sublocationName: "East Bunbury - Glen Iris",
            slug: {
              _type: "slug",
              current: "east-bunbury-glen-iris",
            },
          },
          {
            sublocationName: "East Perth",
            slug: {
              _type: "slug",
              current: "east-perth",
            },
          },
          {
            sublocationName: "East Victoria Park - Carlisle",
            slug: {
              _type: "slug",
              current: "east-victoria-park-carlisle",
            },
          },
          {
            sublocationName: "Eaton - Pelican Point",
            slug: {
              _type: "slug",
              current: "eaton-pelican-point",
            },
          },
          {
            sublocationName: "Ellenbrook",
            slug: {
              _type: "slug",
              current: "ellenbrook",
            },
          },
          {
            sublocationName: "Falcon - Wannanup",
            slug: {
              _type: "slug",
              current: "falcon-wannanup",
            },
          },
          {
            sublocationName: "Floreat",
            slug: {
              _type: "slug",
              current: "floreat",
            },
          },
          {
            sublocationName: "Gelorup - Stratham",
            slug: {
              _type: "slug",
              current: "gelorup-stratham",
            },
          },
          {
            sublocationName: "Gidgegannup",
            slug: {
              _type: "slug",
              current: "gidgegannup",
            },
          },
          {
            sublocationName: "Girrawheen",
            slug: {
              _type: "slug",
              current: "girrawheen",
            },
          },
          {
            sublocationName: "Glen Forrest - Darlington",
            slug: {
              _type: "slug",
              current: "glen-forrest-darlington",
            },
          },
          {
            sublocationName: "Gosnells",
            slug: {
              _type: "slug",
              current: "gosnells",
            },
          },
          {
            sublocationName: "Greenfields",
            slug: {
              _type: "slug",
              current: "greenfields",
            },
          },
          {
            sublocationName: "Greenwood - Warwick",
            slug: {
              _type: "slug",
              current: "greenwood-warwick",
            },
          },
          {
            sublocationName: "Halls Head - Erskine",
            slug: {
              _type: "slug",
              current: "halls-head-erskine",
            },
          },
          {
            sublocationName: "Harrisdale",
            slug: {
              _type: "slug",
              current: "harrisdale",
            },
          },
          {
            sublocationName: "Harvey",
            slug: {
              _type: "slug",
              current: "harvey",
            },
          },
          {
            sublocationName: "Hazelmere - Guildford",
            slug: {
              _type: "slug",
              current: "hazelmere-guildford",
            },
          },
          {
            sublocationName: "Heathridge - Connolly",
            slug: {
              _type: "slug",
              current: "heathridge-connolly",
            },
          },
          {
            sublocationName: "Helena Valley - Koongamia",
            slug: {
              _type: "slug",
              current: "helena-valley-koongamia",
            },
          },
          {
            sublocationName: "Herdsman",
            slug: {
              _type: "slug",
              current: "herdsman",
            },
          },
          {
            sublocationName: "Hillarys",
            slug: {
              _type: "slug",
              current: "hillarys",
            },
          },
          {
            sublocationName: "Hocking - Pearsall",
            slug: {
              _type: "slug",
              current: "hocking-pearsall",
            },
          },
          {
            sublocationName: "Huntingdale - Southern River",
            slug: {
              _type: "slug",
              current: "huntingdale-southern-river",
            },
          },
          {
            sublocationName: "Iluka - Burns Beach",
            slug: {
              _type: "slug",
              current: "iluka-burns-beach",
            },
          },
          {
            sublocationName: "Innaloo - Doubleview",
            slug: {
              _type: "slug",
              current: "innaloo-doubleview",
            },
          },
          {
            sublocationName: "Joondalup - Edgewater",
            slug: {
              _type: "slug",
              current: "joondalup-edgewater",
            },
          },
          {
            sublocationName: "Karrinyup - Gwelup - Carine",
            slug: {
              _type: "slug",
              current: "karrinyup-gwelup-carine",
            },
          },
          {
            sublocationName: "Kelmscott",
            slug: {
              _type: "slug",
              current: "kelmscott",
            },
          },
          {
            sublocationName: "Kewdale",
            slug: {
              _type: "slug",
              current: "kewdale",
            },
          },
          {
            sublocationName: "Kewdale Commercial",
            slug: {
              _type: "slug",
              current: "kewdale-commercial",
            },
          },
          {
            sublocationName: "Kings Park (WA)",
            slug: {
              _type: "slug",
              current: "kings-park-wa",
            },
          },
          {
            sublocationName: "Kingsley",
            slug: {
              _type: "slug",
              current: "kingsley",
            },
          },
          {
            sublocationName: "Landsdale",
            slug: {
              _type: "slug",
              current: "landsdale",
            },
          },
          {
            sublocationName: "Lockridge - Kiara",
            slug: {
              _type: "slug",
              current: "lockridge-kiara",
            },
          },
          {
            sublocationName: "Maddington - Orange Grove - Martin",
            slug: {
              _type: "slug",
              current: "maddington-orange-grove-martin",
            },
          },
          {
            sublocationName: "Madeley - Darch",
            slug: {
              _type: "slug",
              current: "madeley-darch",
            },
          },
          {
            sublocationName: "Malaga",
            slug: {
              _type: "slug",
              current: "malaga",
            },
          },
          {
            sublocationName: "Malmalling - Reservoir",
            slug: {
              _type: "slug",
              current: "malmalling-reservoir",
            },
          },
          {
            sublocationName: "Mandurah",
            slug: {
              _type: "slug",
              current: "mandurah",
            },
          },
          {
            sublocationName: "Mandurah - East",
            slug: {
              _type: "slug",
              current: "mandurah-east",
            },
          },
          {
            sublocationName: "Mandurah - North",
            slug: {
              _type: "slug",
              current: "mandurah-north",
            },
          },
          {
            sublocationName: "Mandurah - South",
            slug: {
              _type: "slug",
              current: "mandurah-south",
            },
          },
          {
            sublocationName: "Manjimup",
            slug: {
              _type: "slug",
              current: "manjimup",
            },
          },
          {
            sublocationName: "Marangaroo",
            slug: {
              _type: "slug",
              current: "marangaroo",
            },
          },
          {
            sublocationName: "Margaret River",
            slug: {
              _type: "slug",
              current: "margaret-river",
            },
          },
          {
            sublocationName: "Maylands",
            slug: {
              _type: "slug",
              current: "maylands",
            },
          },
          {
            sublocationName: "Melaleuca - Lexia",
            slug: {
              _type: "slug",
              current: "melaleuca-lexia",
            },
          },
          {
            sublocationName: "Middle Swan - Herne Hill",
            slug: {
              _type: "slug",
              current: "middle-swan-herne-hill",
            },
          },
          {
            sublocationName: "Midland - Guildford",
            slug: {
              _type: "slug",
              current: "midland-guildford",
            },
          },
          {
            sublocationName: "Mindarie - Quinns Rocks - Jindalee",
            slug: {
              _type: "slug",
              current: "mindarie-quinns-rocks-jindalee",
            },
          },
          {
            sublocationName: "Morley",
            slug: {
              _type: "slug",
              current: "morley",
            },
          },
          {
            sublocationName: "Mosman Park - Peppermint Grove",
            slug: {
              _type: "slug",
              current: "mosman-park-peppermint-grove",
            },
          },
          {
            sublocationName: "Mount Hawthorn - Leederville",
            slug: {
              _type: "slug",
              current: "mount-hawthorn-leederville",
            },
          },
          {
            sublocationName: "Mount Lawley - Inglewood",
            slug: {
              _type: "slug",
              current: "mount-lawley-inglewood",
            },
          },
          {
            sublocationName: "Mount Nasura - Mount Richon - Bedfordale",
            slug: {
              _type: "slug",
              current: "mount-nasura-mount-richon-bedfordale",
            },
          },
          {
            sublocationName: "Mullaloo - Kallaroo",
            slug: {
              _type: "slug",
              current: "mullaloo-kallaroo",
            },
          },
          {
            sublocationName: "Mundaring",
            slug: {
              _type: "slug",
              current: "mundaring",
            },
          },
          {
            sublocationName: "Nedlands - Dalkeith - Crawley",
            slug: {
              _type: "slug",
              current: "nedlands-dalkeith-crawley",
            },
          },
          {
            sublocationName: "Neerabup National Park",
            slug: {
              _type: "slug",
              current: "neerabup-national-park",
            },
          },
          {
            sublocationName: "Nollamara - Westminster",
            slug: {
              _type: "slug",
              current: "nollamara-westminster",
            },
          },
          {
            sublocationName: "Noranda",
            slug: {
              _type: "slug",
              current: "noranda",
            },
          },
          {
            sublocationName: "North Perth",
            slug: {
              _type: "slug",
              current: "north-perth",
            },
          },
          {
            sublocationName: "Ocean Reef",
            slug: {
              _type: "slug",
              current: "ocean-reef",
            },
          },
          {
            sublocationName: "Osborne Park Industrial",
            slug: {
              _type: "slug",
              current: "osborne-park-industrial",
            },
          },
          {
            sublocationName: "Padbury",
            slug: {
              _type: "slug",
              current: "padbury",
            },
          },
          {
            sublocationName: "Parkwood - Ferndale - Lynwood",
            slug: {
              _type: "slug",
              current: "parkwood-ferndale-lynwood",
            },
          },
          {
            sublocationName: "Pemberton",
            slug: {
              _type: "slug",
              current: "pemberton",
            },
          },
          {
            sublocationName: "Perth (North) - Highgate",
            slug: {
              _type: "slug",
              current: "perth-north-highgate",
            },
          },
          {
            sublocationName: "Perth (West) - Northbridge",
            slug: {
              _type: "slug",
              current: "perth-west-northbridge",
            },
          },
          {
            sublocationName: "Perth Airport",
            slug: {
              _type: "slug",
              current: "perth-airport",
            },
          },
          {
            sublocationName: "Piara Waters - Forrestdale",
            slug: {
              _type: "slug",
              current: "piara-waters-forrestdale",
            },
          },
          {
            sublocationName: "Pinjarra",
            slug: {
              _type: "slug",
              current: "pinjarra",
            },
          },
          {
            sublocationName: "Riverton - Shelley - Rossmoyne",
            slug: {
              _type: "slug",
              current: "riverton-shelley-rossmoyne",
            },
          },
          {
            sublocationName: "Rivervale",
            slug: {
              _type: "slug",
              current: "rivervale",
            },
          },
          {
            sublocationName: "Roleystone",
            slug: {
              _type: "slug",
              current: "roleystone",
            },
          },
          {
            sublocationName: "Scarborough",
            slug: {
              _type: "slug",
              current: "scarborough",
            },
          },
          {
            sublocationName: "Seville Grove",
            slug: {
              _type: "slug",
              current: "seville-grove",
            },
          },
          {
            sublocationName: "Sorrento - Marmion",
            slug: {
              _type: "slug",
              current: "sorrento-marmion",
            },
          },
          {
            sublocationName: "South Bunbury - Bunbury",
            slug: {
              _type: "slug",
              current: "south-bunbury-bunbury",
            },
          },
          {
            sublocationName: "Stirling - Osborne Park",
            slug: {
              _type: "slug",
              current: "stirling-osborne-park",
            },
          },
          {
            sublocationName: "Stratton - Jane Brook",
            slug: {
              _type: "slug",
              current: "stratton-jane-brook",
            },
          },
          {
            sublocationName: "Subiaco - Shenton Park",
            slug: {
              _type: "slug",
              current: "subiaco-shenton-park",
            },
          },
          {
            sublocationName: "Swan View - Greenmount - Midvale",
            slug: {
              _type: "slug",
              current: "swan-view-greenmount-midvale",
            },
          },
          {
            sublocationName: "Swanbourne - Mount Claremont",
            slug: {
              _type: "slug",
              current: "swanbourne-mount-claremont",
            },
          },
          {
            sublocationName: "Tapping - Ashby - Sinagra",
            slug: {
              _type: "slug",
              current: "tapping-ashby-sinagra",
            },
          },
          {
            sublocationName: "The Vines",
            slug: {
              _type: "slug",
              current: "the-vines",
            },
          },
          {
            sublocationName: "Thornlie",
            slug: {
              _type: "slug",
              current: "thornlie",
            },
          },
          {
            sublocationName: "Trigg - North Beach - Watermans Bay",
            slug: {
              _type: "slug",
              current: "trigg-north-beach-watermans-bay",
            },
          },
          {
            sublocationName: "Tuart Hill - Joondanna",
            slug: {
              _type: "slug",
              current: "tuart-hill-joondanna",
            },
          },
          {
            sublocationName: "Two Rocks",
            slug: {
              _type: "slug",
              current: "two-rocks",
            },
          },
          {
            sublocationName: "Victoria Park - Lathlain - Burswood",
            slug: {
              _type: "slug",
              current: "victoria-park-lathlain-burswood",
            },
          },
          {
            sublocationName: "Walyunga National Park",
            slug: {
              _type: "slug",
              current: "walyunga-national-park",
            },
          },
          {
            sublocationName: "Wanneroo - Sinagra",
            slug: {
              _type: "slug",
              current: "wanneroo-sinagra",
            },
          },
          {
            sublocationName: "Waroona",
            slug: {
              _type: "slug",
              current: "waroona",
            },
          },
          {
            sublocationName: "Welshpool",
            slug: {
              _type: "slug",
              current: "welshpool",
            },
          },
          {
            sublocationName: "Wembley - West Leederville - Glendalough",
            slug: {
              _type: "slug",
              current: "wembley-west-leederville-glendalough",
            },
          },
          {
            sublocationName: "Wembley Downs - Churchlands - Woodlands",
            slug: {
              _type: "slug",
              current: "wembley-downs-churchlands-woodlands",
            },
          },
          {
            sublocationName: "Willetton",
            slug: {
              _type: "slug",
              current: "willetton",
            },
          },
          {
            sublocationName: "Withers - Usher",
            slug: {
              _type: "slug",
              current: "withers-usher",
            },
          },
          {
            sublocationName: "Woodvale",
            slug: {
              _type: "slug",
              current: "woodvale",
            },
          },
          {
            sublocationName: "Yanchep",
            slug: {
              _type: "slug",
              current: "yanchep",
            },
          },
          {
            sublocationName: "Yokine - Coolbinia - Menora",
            slug: {
              _type: "slug",
              current: "yokine-coolbinia-menora",
            },
          },
        ],
        _type: "locationItem",
        _id: "547b5e18-85b1-4b9b-bb97-30eb20387bb4",
      },
    ];
    // await client.delete({ query: `*[_type == "${schemaName}"][0...999]` }, {token: TOKEN});
    // await fetch(
    //   `https://${projectId}.api.sanity.io/v2023-12-08/data/mutate/production`,
    //   {
    //     method: "post",
    //     headers: {
    //       "Content-type": "application/json",
    //       Authorization: `Bearer ${TOKEN}`,
    //     },
    //     body: JSON.stringify({ mutations }),
    //   }
    // )
    //   .then((response) => response.json())
    //   .then((result) => // console.log(result))
    //   .catch((error) => {
    //     console.error(error)
    //     res.status(500).json({ message: error });
    // });
    for (let i = 0; i < mutations.length; i++) {
      //   await client.patch(mutations[i]._id).unset(["sublocations"]).commit({
      //     token: TOKEN,
      //   });
      await client
        .patch("2bd04658-88fb-4af0-948a-07e6c8a5e33d")
        .set({ relatedImages: [] })
        .commit({
          token: TOKEN,
        });
      //   await client
      //     .patch(mutations[i]._id, {
      //       insert: {
      //         after: "sublocations[-1]",
      //         items: mutations[i].sublocations,
      //       },
      //     })
      //     .commit({
      //       autoGenerateArrayKeys: true,
      //       token: TOKEN,
      //     })
      //     .then((result) => {
      //       // console.log(result)
      //     })
      //     .catch((error) => {
      //       
      //       res.status(500).json({ message: error });
      //     });
    }
    res.status(201).json({ message: "Done" });

    //   .then(// console.log)
    //   .catch(console.error)
  } catch (error) {
    res.status(500).json({ message: error });
  }
}
