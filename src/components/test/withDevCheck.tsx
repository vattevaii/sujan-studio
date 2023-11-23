import { useRouter } from "next/router";
import { useEffect } from "react";

const withDevCheck = <P extends object>(
  WrappedComponent: React.ComponentType<P>
) => {
  const HOCComponent: React.FC<P> = (props) => {
    const router = useRouter();

    // Check if not in development mode
    useEffect(() => {
      if (process.env.NODE_ENV !== "development") {
        // Redirect to another page or show an error message
        router.push("/"); // Redirect to the home page or another page of your choice
      }
    }, []);

    // Render the wrapped component if in development mode
    return process.env.NODE_ENV === "development" ? (
      <WrappedComponent {...props} />
    ) : null;
  };

  return HOCComponent;
};

export default withDevCheck;
