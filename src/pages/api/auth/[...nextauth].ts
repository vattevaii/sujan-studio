import NextAuth, { AuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
const NEXTAUTH_SECRET = process.env.NEXTAUTH_SECRET;

export const authOptions: AuthOptions = {
  // Configure one or more authentication providers
  secret: NEXTAUTH_SECRET,
  callbacks: {
    session: async ({ session, token }) => {
    //   console.log(session, token);
      return { role: token.role, ...session };
    },
    jwt: async ({ account, user, token }) => {
    //   console.log("USER:", user);
      if (user && "role" in user) token.role = user.role;
      return token;
    },
  },
  providers: [
    CredentialsProvider({
      // The name to display on the sign in form (e.g. 'Sign in with...')
      name: "Credentials",
      // The credentials is used to generate a suitable form on the sign in page.
      // You can specify whatever fields you are expecting to be submitted.
      // e.g. domain, username, password, 2FA token, etc.
      // You can pass any HTML attribute to the <input> tag through the object.
      credentials: {
        username: { label: "Username", type: "text", placeholder: "jsmith" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        // You need to provide your own logic here that takes the credentials
        // submitted and returns either a object representing a user or value
        // that is false/null if the credentials are invalid.
        // e.g. return { id: 1, name: 'J Smith', email: 'jsmith@example.com' }
        // You can also use the `req` object to obtain additional parameters
        // (i.e., the request IP address)
        // const res = await fetch("/your/endpoint", {
        //     method: 'POST',
        //     body: JSON.stringify(credentials),
        //     headers: { "Content-Type": "application/json" }
        // })
        const response: Response = {
          ok: true,
          headers: new Headers({ "Content-Type": "application/json" }),

          json() {
            return new Promise((resolve, reject) => {
              resolve({
                id: 1,
                name: "J Smith",
                email: "jsmith@example.com",
                role: "admin",
              });
            });
          },
          redirected: false,
          status: 0,
          statusText: "",
          type: "basic",
          url: "",
          clone: function (): Response {
            throw new Error("Function not implemented.");
          },
          body: null,
          bodyUsed: false,
          arrayBuffer: function (): Promise<ArrayBuffer> {
            throw new Error("Function not implemented.");
          },
          blob: function (): Promise<Blob> {
            throw new Error("Function not implemented.");
          },
          formData: function (): Promise<FormData> {
            throw new Error("Function not implemented.");
          },
          text: function (): Promise<string> {
            throw new Error("Function not implemented.");
          },
        };

        const user = await response.json();
        console.log(
          "Credentials:" + credentials?.username + " " + credentials?.password
        );
        console.log("Username Match:", credentials?.username === "sarthak");
        console.log("Password Match:", credentials?.password === "sarthak");
        // If no error and we have user data, return it
        if (
          credentials?.username === "sarthak" &&
          credentials?.password === "sarthak"
        )
          if (response.ok && user) {
            return user;
          }
        // Return null if user data could not be retrieved
        return null;
      },
    }),
  ],
};

export default NextAuth(authOptions);
