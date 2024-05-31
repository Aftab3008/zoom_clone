import { StreamVideoProvider } from "@/providers/StreamClientProvider";

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <main>
      <StreamVideoProvider>{children}</StreamVideoProvider>
    </main>
  );
}
