import info from "../data/info";
import Link from "next/link";

export default function Footer() {
  const startDateObj = new Date("January 1, 2022");
  const currentDateObj = new Date();
  const startYear = startDateObj.getFullYear();
  const currentYear = currentDateObj.getFullYear();
  return (
    <div className="z-10 flex h-auto w-full items-center justify-center px-5 pt-2 pb-4 border-t-[1px] border-t-gray-100 bg-white">
      <h1 className="font-semibold">
        &copy;{" "}
        {startYear == currentYear ? currentYear : `${startYear}-${currentYear}`}{" "}
        {info.name}
        {" | Site by "}
        <Link href={"https://szhao.dev/"}>
          <span className="bg-gradient-to-tl cursor-pointer from-blue-600 to-blue-400 bg-clip-text font-semibold text-transparent">
            Stanley Zhao
          </span>
        </Link>
      </h1>
    </div>
  );
}
