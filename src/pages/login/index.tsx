import InputText from "@/components/input/InputText";
import InputButton from "@/components/input/inputbutton";
import { getAllLocations } from "@/utils/sanity/location";
import { signIn, signOut, useSession } from "next-auth/react";
import Head from "next/head";
import * as React from "react";

export interface ILoginPageProps {}
export const getStaticProps = async function () {
  const locations = await getAllLocations();
  return { props: { locations } };
};
export default function LoginPage(props: ILoginPageProps) {
  const { status } = useSession();
  const mailRef = React.useRef<HTMLInputElement | null>(null);
  const passwordRef = React.useRef<HTMLInputElement | null>(null);
  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (status === "authenticated") signOut();
    if (
      mailRef.current!.value.length < 3 ||
      passwordRef.current!.value.length < 3
    )
      return;
    const data = await signIn("credentials", {
      redirect: false,
      callbackUrl: "/admin",
      username: mailRef.current!.value,
      password: passwordRef.current!.value,
    });
  };
  function LoginForm() {
    return (
      <>
        <div className="flex flex-col justify-between w-full">
          <label htmlFor="e-mail" className="block">
            Email
          </label>
          <InputText
            className="w-full"
            id="e-mail"
            placeholder="your email here"
            ref={mailRef}
          />
        </div>
        <div className="flex flex-col justify-between w-full">
          <label htmlFor="password" className="block">
            Password
          </label>
          <InputText
            className="w-full"
            type="password"
            id="password"
            placeholder="**********"
            ref={passwordRef}
          />
        </div>
        <InputButton value="Login" className="px-8" />
      </>
    );
  }
  function Logout() {
    return <InputButton value="Logout" className="px-8" />;
  }
  return (
    <>
      <Head>
        <title>Login | Sujan Studio</title>
        <meta
          name="description"
          content="Discover Sujan Studio, your trusted source for professional photography services in Adelaide, South Australia, and beyond. We serve various locations, including South Australia, Victoria, New South Wales, and Queensland. Contact us today for captivating moments captured."
        />
      </Head>
      <main className="bg-light-grey text-project-100 flex justify-center py-10">
        <form
          className="grid gap-7 text-xl lg:text-5xl max-w-2xl min-w-[min(100%,580px)] p-6 border border-project-200 rounded-md"
          onSubmit={onSubmit}
        >
          {status === "authenticated" ? <Logout /> : <LoginForm />}
        </form>
      </main>
    </>
  );
}
