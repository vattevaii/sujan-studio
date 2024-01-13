import { ContactFormSchema } from "@/utils/schema/contactUsSchema";
import { useFormik } from "formik";
import { debounce } from "lodash";
import { useRouter } from "next/router";
import * as React from "react";
import { toFormikValidationSchema } from "zod-formik-adapter";
import InputText from "../input/InputText";
import InputTextArea from "../input/InputTextArea";
import UploadFileToSanity from "../input/inputFile";
import InputButton from "../input/inputbutton";
import { InputRadioGroup, InputRadioItem } from "../input/inputradio";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";

interface IContactUsFormProps {}

const ContactUsForm: React.FunctionComponent<IContactUsFormProps> = (props) => {
  const { executeRecaptcha } = useGoogleReCaptcha();
  const router = useRouter();
  const submitForm = debounce((d) => {
    if (!executeRecaptcha) return;
    const data = executeRecaptcha("contactUs");
    console.log(data.then((d) => d));
    fetch("/api/submitcontactus", {
      method: "POST",
      body: JSON.stringify(d),
    }).then((d) => {
      if (d.status === 201) {
        router.push("/contact-us?success=true");
      }
    });
  }, 200);
  const formik = useFormik<{
    gReCaptchaToken: string;
    firstName: string;
    lastName: string;
    email: string;
    phoneNumber: string;
    subject: string;
    message: string;
    terms: string;
    files: string[];
  }>({
    initialValues: {
      gReCaptchaToken: "",
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: "",
      subject: "",
      message: "",
      terms: "",
      files: [],
    },
    validationSchema: toFormikValidationSchema(ContactFormSchema),
    onSubmit: (values) => {
      if (!executeRecaptcha) return;
      executeRecaptcha("contact-us-form").then((d) => {
        values.gReCaptchaToken = d;
        submitForm(values);
      });
    },
  });
  React.useEffect(() => {
    if (router.asPath.indexOf("success") !== -1) {
      formik.resetForm();
    }
  }, [router]);
  return (
    <form
      className="grid gap-7 text-xl lg:text-5xl"
      onSubmit={(e) => {
        e.preventDefault();
        formik.setTouched({
          email: true,
          firstName: true,
          lastName: true,
          message: true,
          phoneNumber: true,
          subject: true,
        });
        formik.submitForm();
      }}
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-5 gap-y-7">
        <div className="flex flex-col justify-between w-full">
          <label htmlFor="first-name" className="block">
            First Name
          </label>
          <p className="text-red-500 text-2xs -mt-2 h-3">
            {formik.touched.firstName ? formik.errors.firstName : ""}
          </p>
          <InputText
            className="w-full"
            id="first-name"
            placeholder="Your First Name here"
            {...formik.getFieldProps("firstName")}
          />
        </div>
        <div className="flex flex-col justify-between w-full">
          <label htmlFor="last-name" className="block">
            Last Name
          </label>
          <p className="text-red-500 text-2xs -mt-2 h-3">
            {formik.touched.lastName ? formik.errors.lastName : ""}
          </p>

          <InputText
            className="w-full"
            id="last-name"
            placeholder="your Last Name here"
            {...formik.getFieldProps("lastName")}
          />
        </div>
        <div className="flex flex-col justify-between w-full">
          <label htmlFor="e-mail" className="block">
            Email
          </label>
          <p className="text-red-500 text-2xs -mt-2 h-3">
            {formik.touched.email ? formik.errors.email : ""}
          </p>
          <InputText
            className="w-full"
            id="e-mail"
            placeholder="your email here"
            {...formik.getFieldProps("email")}
          />
        </div>
        <div className="flex flex-col justify-between w-full">
          <label htmlFor="phone" className="block">
            Phone Number
          </label>
          <p className="text-red-500 text-2xs -mt-2 h-3">
            {formik.touched.phoneNumber ? formik.errors.phoneNumber : ""}
          </p>
          <InputText
            className="w-full"
            id="phone"
            placeholder="your Phone Number here"
            {...formik.getFieldProps("phoneNumber")}
          />
        </div>
      </div>
      <div className="flex flex-col justify-between w-full">
        <p className="block">Select Subject</p>
        <p className="text-red-500 text-2xs -mt-2 h-3">
          {formik.touched.subject ? formik.errors.subject : ""}
        </p>
        <InputRadioGroup
          name="hello"
          onChange={(v) => {
            formik.setFieldValue("subject", v);
          }}
          value={formik.values.subject}
          className="grid grid-cols-2 sm:grid-cols-3 gap-y-4 gap-x-2 justify-between"
        >
          {[
            "Future Project",
            "Jobs",
            "Pricing & Package",
            "Employee",
            "I'm A Model/Artist",
            "Feedback",
            "Other",
          ].map((v) => {
            return (
              <label className="flex items-center gap-3" key={v}>
                <InputRadioItem value={v} />
                <span className="text-md lg:text-xl whitespace-nowrap">
                  {v}
                </span>
              </label>
            );
          })}
          {/* <label className="flex items-center gap-3">
        <InputRadioItem value="dog" />
        <span className="text-md lg:text-xl">Dog</span>
      </label>
      <label className="flex items-center gap-3">
        <InputRadioItem value="cat" />
        <span className="text-md lg:text-xl">Cat</span>
      </label>
      <label className="flex items-center gap-3">
        <InputRadioItem value="porcupine" />
        <span className="text-md lg:text-xl">Porcupine</span>
      </label> */}
        </InputRadioGroup>
      </div>
      <div className="flex flex-col justify-between w-full">
        <label htmlFor="message" className="block">
          Your Message
        </label>
        <p className="text-red-500 text-2xs -mt-2 h-3">
          {formik.touched.message ? formik.errors.message : ""}
        </p>
        <InputTextArea
          rows={5}
          className="w-full"
          id="message"
          placeholder="Your Message here"
          {...formik.getFieldProps("message")}
        />
      </div>
      <UploadFileToSanity
        addFileRef={(ref: string[]) => formik.setFieldValue("files", ref)}
      />
      <InputRadioGroup
        name="terms"
        onChange={(v) => formik.setFieldValue("terms", v)}
      >
        <label className="flex items-center gap-3">
          <InputRadioItem value={"accept"} />
          <span className="text-md lg:text-xl whitespace-nowrap">
            I accept communication emails & privacy policy
          </span>
          <p className="text-red-500 text-2xs -mt-2 h-3">
            {formik.errors?.terms ?? ""}
          </p>
        </label>
      </InputRadioGroup>
      <div className="flex justify-end">
        <InputButton
          value="Send Message"
          className="px-8"
          // onClick={() => {
          //   console.log(formik.errors);
          //   console.log(formik.values);
          // }}
          disabled={!formik.isValid}
        />
      </div>
    </form>
  );
};

export default ContactUsForm;
