import Image from "next/image";

export default function loading() {
  return (
    <div className="flex items-center justify-center h-screen w-screen">
      <Image src="/icons/loader.svg" alt="loader" height={36} width={36} />
    </div>
  );
}
