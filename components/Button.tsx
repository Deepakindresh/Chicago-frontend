export default function Button({
  text,
  onClick,
}: {
  text: string;
  onClick?: () => void;
}) {
  return (
    <button
      className=" bg-gradient-to-r from-[#142849] to-[#1e4179] overflow-visible text-slate-200 font-bold py-2 px-4 rounded h-[3rem] w-[8rem] transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-200"
      onClick={onClick}
      type="submit"
    >
      {text}
    </button>
  );
}
