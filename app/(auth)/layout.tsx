export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <main className="flex h-screen w-full items-center justify-center">
      {children}
    </main>
  );
}
