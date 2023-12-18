import { NextComponentType } from "next";
import { useSession } from "next-auth/react";

import { useRouter } from "next/router";

const withAdmin = (WrappedComponent: NextComponentType) => {
  return function AdminComponent(props: any) {
    const Router = useRouter();
    const session = useSession();
    if (typeof window !== "undefined") {
      const { status, data } = session;
      const isAuthenticated = status === "authenticated";
      const isLoading = status === "loading";
      // console.log(data);
      if (!isLoading && !isAuthenticated) {
        Router.push({
          pathname: "/",
        });

        return <div className="text-center min-h-screen">Loading...</div>;
      }

      if (isLoading) {
        return <div className="text-center min-h-screen">Loading...</div>;
      }
      if (data && 'role' in data && data.role === "admin")
        return <WrappedComponent {...props} />;
      else
        return 
    }

    return <div className="text-center min-h-screen">Loading...</div>;
  };
};

export default withAdmin;
