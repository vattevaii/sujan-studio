import { LocationItem } from "@/components/LocationCard";
import PlaceHolderImage from "@/components/PlaceHolderImage";
import type { GetStaticProps, InferGetStaticPropsType } from "next";
import Head from "next/head";
import Image from "next/image";

const NewWebsite = ({}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <>
      <Head>
        <meta
          name="google-site-verification"
          content="f_68tqeL-mLzXjKfyyXJpWikq44fXRXbgmcKhvqKj4s"
        />
        <title>Portfolio | Sujan Studio</title>
        <meta
          name="description"
          content="Discover Sujan Studio, your trusted source for professional photography services in Adelaide, South Australia, and beyond. We serve various locations, including South Australia, Victoria, New South Wales, and Queensland. Contact us today for captivating moments captured."
        />
      </Head>
      {[
        {
          title: "Real State Photography",
          images: [
            "http://placekitten.com/200/300",
            "http://placekitten.com/200/300",
            "http://placekitten.com/200/300",
            "http://placekitten.com/200/300",
            "http://placekitten.com/200/300",
            "http://placekitten.com/200/300",
          ],
        },
        {
          title: "Wedding Photography",
          images: [
            "http://placekitten.com/200/300",
            "http://placekitten.com/200/300",
            "http://placekitten.com/200/300",
            "http://placekitten.com/200/300",
            "http://placekitten.com/200/300",
            "http://placekitten.com/200/300",
          ],
        },
        {
          title: "Family & Events Photography",
          images: [
            "http://placekitten.com/200/300",
            "http://placekitten.com/200/300",
            "http://placekitten.com/200/300",
            "http://placekitten.com/200/300",
            "http://placekitten.com/200/300",
            "http://placekitten.com/200/300",
          ],
        },
        {
          title: "Corporate Events Photography",
          images: [
            "http://placekitten.com/200/300",
            "http://placekitten.com/200/300",
            "http://placekitten.com/200/300",
            "http://placekitten.com/200/300",
            "http://placekitten.com/200/300",
            "http://placekitten.com/200/300",
          ],
        },
      ].map((item, idx) => (
        <section key={idx}>
          <div className="bg-light-grey px-[31px] text-21xl lg:text-41xl">
            <h2 className="text-project-100 py-5 lg:py-9">{item.title}</h2>
          </div>
          <div className="grid">
            {item.images.map((img, idx) => (
              <PlaceHolderImage
                width="700"
                height="700"
                key={idx}
                src={img}
                alt={item.title + " Image " + (idx + 1)}
              />
            ))}
          </div>
        </section>
      ))}

      <section>This is our portfolio.</section>
    </>
  );
};

export const getStaticProps: GetStaticProps<{
  locations: LocationItem[];
}> = () => {
  return {
    props: {
      locations: [
        {
          locationName: "South Australia",
          address: "97 Marian Road",
          city: "Firle, South Australia",
          postalCode: "5070",
          phoneNumber: "08-7092-3531",
        },
        {
          locationName: "Victoria",
          address: "178 Boundary Road",
          city: "Pasco Vale, Vic",
          postalCode: "3044",
          phoneNumber: "08-8427-1817",
        },
        {
          locationName: "New South Wales",
          address: "5/34-36 Princes Hwy",
          city: "Kogarah NSW",
          postalCode: "2217",
          phoneNumber: "08-8427-1817",
        },
        {
          locationName: "Queensland",
          address: "195 Days Road",
          city: "Grange QLD",
          postalCode: "4051",
          phoneNumber: "08-8427-1817",
        },
      ],
    },
  };
};

export default NewWebsite;
