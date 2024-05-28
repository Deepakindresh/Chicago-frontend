export default function Navbar() {
  return (
    <div className="flex justify-between items-center bg-[#142849] h-fit w-full p-4">
      <div className="text-2xl">Chicago Crime</div>
      <div className="flex space-x-4 cursor-pointer">
        <div>Home</div>
        <div>Search</div>
        <div>Analysis</div>
      </div>
    </div>
  );
}
