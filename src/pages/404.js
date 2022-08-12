import Link from "next/link";
import Image from "next/image";

export default function Error() {
  return (
    <div className="w-full h-auto min-h-screen flex flex-col items-center justify-center">
      <main className="flex flex-col gap-y-8 w-full h-full max-w-5xl items-center justify-center px-5">
        <h1 className="text-3xl md:text-4xl 2xl:text-5xl font-bold tracking-tight"></h1>
        <div className="py-2 relative w-full h-[50vh] shadow-xl shadow-gray-500 rounded-lg overflow-hidden select-none">
          <Image
            layout="fill"
            objectFit="cover"
            objectPosition="center center"
            draggable="false"
            placeholder="blur"
            alt={"404 Shark"}
            src={`/img/fun/shark.jpg`}
          />
          <h1 className="absolute inset-0 left-0 top-12 text-white text-6xl md:text-7xl 2xl:text-8xl text-center font-black tracking-tight select-none">
            404 Error
          </h1>
          <h1 className="absolute inset-x-2 left-0 bottom-4 text-white text-xl md:text-2xl 2xl:text-3xl text-center font-bold tracking-tight select-none">
            Uh oh! Couldn't find that page. This shark may have eaten it...
          </h1>
        </div>
        <Link href="/">
          <span className="shadow-lg px-4 py-2 2xl:px-6 2xl:py-3 font-semibold bg-accent text-base md:text-lg 2xl:text-xl text-white rounded-lg cursor-pointer hover:translate-y-[-0.125rem] ease-linear transition-[5s]">
            Return home
          </span>
        </Link>
      </main>
    </div>
  );
}
