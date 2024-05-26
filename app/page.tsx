import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-start">
      <div className="flex justify-between bg-green-900 h-full w-full p-4">
        <div className="text-2xl">Chicago Crime Analysis</div>
        <div className="flex space-x-4">
          <div>Home</div>
          <div>About Us</div>
        </div>
      </div>
    </main>
  );
}
