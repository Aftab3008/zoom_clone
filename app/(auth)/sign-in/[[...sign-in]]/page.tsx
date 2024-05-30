import { SignIn } from "@clerk/nextjs";

export default function page() {
  return (
    <SignIn
      appearance={{
        elements: {
          formButtonPrimary:
            "bg-blue-1 text-white hover:bg-white hover:text-blue-1",
        },
      }}
    />
  );
}
