import PageBanner from "@/components/PageSections/PageBanner";
import { Step1, Step2, Step3, Step4, StepDots } from "@/components/book-us";
import { getAllLocations } from "@/utils/sanity/location";
import { getPageContent } from "@/utils/sanity/pageContent";
import bookingSchema from "@/utils/schema/bookingSchema";
import { PortableText } from "@portabletext/react";
import { Form, Formik } from "formik";
import { debounce } from "lodash";
import { InferGetStaticPropsType } from "next";
import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import * as React from "react";
import { toFormikValidationSchema } from "zod-formik-adapter";
import Recaptcha from "@/components/Recaptcha";

interface IBookUsProps {}

const BookUs: React.FunctionComponent<
  InferGetStaticPropsType<typeof getStaticProps>
> = (props) => {
  const [step, setStep] = React.useState(1);
  const [success, setSuccess] = React.useState(false);
  const router = useRouter();
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState<string | null>(null);
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
    setLoading(true);
    fetch("/api/submitbooking", {
      method: "POST",
      body: JSON.stringify(d),
    })
      .then((res) => {
        if (res.status === 201) {
          router.push(
            `/estimate-request-submitted?exactNeed=${d.exactNeed}&need=${d.needs}`
          );
        }
      })
      .catch((e) => {
        setError(JSON.stringify(e));
      })
      .finally(() => {
        setLoading(false);
      });
  }, 100);
  React.useEffect(() => {
    const { step: stepQ, success: successQ, ...query } = router.query;
    try {
      if (Number(stepQ) < 5 && !isNaN(Number(stepQ))) {
        if (step !== Number(stepQ)) setStep(Number(stepQ));
      }
      if (successQ === "true" && success === false) {
        setSuccess(true);
      }
      if (successQ === "false" || !successQ) setSuccess(false);
    } catch (e) {}
    
    setInitVal({ ...initVal, ...query });
  }, [router]);
  React.useEffect(() => {
    console.log("Step Changed", step);
  }, [step]);
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
      <Recaptcha.Wrapper>
        <PageBanner
          image={props.pageContent.image}
          blurDataURL={props.pageContent.blurDataImage}
        >
          <PortableText value={props.pageContent.bannerText} />
        </PageBanner>
        <section
          id="book-us-form"
          className="bg-light-grey text-project-100 px-10 xl:px-16 py-5"
        >
          {success === true ? (
            <div>Your form has been submitted successfully.</div>
          ) : (
            <>
              <h2 className="mx-auto w-fit text-21xl lg:text-41xl font-semibold py-5 text-center">
                {props.pageContent.pageTitle}
              </h2>
              <p className="text-center mx-auto w-fit text-project-200">
                {props.pageContent.pageSubTitle}
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
                    <Step4 prevStep={() => setStep((s) => s - 1)} submitting={loading} error={error} />
                  )}
                </Form>
              </Formik>
            </>
          )}
        </section>
      </Recaptcha.Wrapper>
    </>
  );
};

export const getStaticProps = async () => {
  const locations = await getAllLocations();
  const pageContent = await getPageContent("book-us");

  return {
    props: {
      locations,
      pageContent,
    },
    revalidate: 180,
  };
};
export default BookUs;
