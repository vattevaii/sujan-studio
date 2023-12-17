import { Step1, Step2, Step3, Step4, StepDots } from "@/components/book-us";
import bookingSchema from "@/utils/schema/bookingSchema";
import { Form, Formik } from "formik";
import { debounce } from "lodash";
import { InferGetStaticPropsType } from "next";
import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import * as React from "react";
import { toFormikValidationSchema } from "zod-formik-adapter";

interface IBookUsProps {}

const BookUs: React.FunctionComponent<
  InferGetStaticPropsType<typeof getStaticProps>
> = (props) => {
  const [step, setStep] = React.useState(1);
  const [success, setSuccess] = React.useState(false);
  const router = useRouter();
  const [initVal, setInitVal] = React.useState({
    needs: "",
    purpose: "",
    exactNeed: "",
    address: {
      street: "",
      zip: "",
      city: "",
    },
    prefer: {
      date: "",
      startTime: "",
      hours: 0,
    },
    personal: {
      fullName: "",
      email: "",
      phone: "",
    },
  });
  const submitBooking = debounce((d) => {
    fetch("/api/submitbooking", {
      method: "POST",
      body: JSON.stringify(d),
    }).then((d) => {
      if (d.status === 201) {
        router.push("/book-us?success=true");
      }
    });
  }, 100);
  React.useEffect(() => {
    const { step, success, ...query } = router.query;
    try {
      if (Number(step) < 5) {
        setStep(Number(step));
      }
      if (success === "true") {
        setSuccess(true);
      }
    } catch (e) {}
    // console.log(initVal, query);
    setInitVal({ ...initVal, ...query });
  }, [router]);
  return (
    <>
      <Head>
        <meta
          name="google-site-verification"
          content="f_68tqeL-mLzXjKfyyXJpWikq44fXRXbgmcKhvqKj4s"
        />
        <title>Book Us | Sujan Studio</title>
        <meta
          name="description"
          content="Discover Sujan Studio, your trusted source for professional photography services in Adelaide, South Australia, and beyond. We serve various locations, including South Australia, Victoria, New South Wales, and Queensland. Contact us today for captivating moments captured."
        />
      </Head>
      <section id="banner" className="relative banner">
        <Image
          priority={true}
          width={100}
          height={400}
          className="absolute top-0 -z-[1] w-full h-full object-cover"
          alt=""
          src="/jpegs/mainSection.jpg"
        />
        <div className="flex flex-col items-center min-h-[50vh] w-full px-[5vw] py-[1vh] lg:px-[100px] lg:py-[10px]">
          <div className="flex-1 flex flex-col justify-center text-21xl font-source-sans-3 font-bold lg:text-41xl text-center">
            <h1>
              <b>Book A&nbsp;Photographer</b>
            </h1>
          </div>
        </div>
      </section>
      <section
        id="book-us-form"
        className="bg-light-grey text-project-100 px-10 xl:px-16 py-5"
      >
        {success === true ? (
          <div>Your form has been submitted successfully.</div>
        ) : (
          <>
            <h2 className="mx-auto w-fit text-21xl lg:text-41xl font-semibold py-5 text-center">
              Explore and uncover your ideal&nbsp;professional&nbsp;fit.
            </h2>
            <p className="text-center mx-auto w-fit text-project-200">
              Please fill the form below to receive a quote for your project.
              Feel free to add as much detail as needed.
            </p>
            <StepDots
              totalSteps={[1, 2, 3, 4]}
              changeStep={(n) => setStep(n)}
              currentStep={step}
            />

            <Formik
              enableReinitialize={true}
              initialValues={initVal}
              onSubmit={(d: any) => {
                console.log(d);
                submitBooking(d);
              }}
              validationSchema={toFormikValidationSchema(bookingSchema)}
            >
              <Form>
                {step === 1 ? (
                  <Step1 nextStep={() => setStep((s) => s + 1)} />
                ) : step === 2 ? (
                  <Step2
                    nextStep={() => setStep((s) => s + 1)}
                    prevStep={() => setStep((s) => s - 1)}
                  />
                ) : step === 3 ? (
                  <Step3
                    nextStep={() => setStep((s) => s + 1)}
                    prevStep={() => setStep((s) => s - 1)}
                  />
                ) : (
                  <Step4 prevStep={() => setStep((s) => s - 1)} />
                )}
              </Form>
            </Formik>
          </>
        )}
      </section>
    </>
  );
};

export const getStaticProps = () => {
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
export default BookUs;
