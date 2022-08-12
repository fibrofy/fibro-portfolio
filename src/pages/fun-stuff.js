import fun from "../data/fun.js";
import Image from "next/image";

export default function Fun() {
  return (
    <div className="w-full h-auto min-h-screen flex flex-col items-center">
      <main className="flex flex-col w-full h-full max-w-5xl items-center justify-center">
        <div className="flex flex-col py-16 w-full px-5">
          <h1 className="text-3xl md:text-4xl 2xl:text-5xl font-bold tracking-tight">
            Fun Stuff :)
          </h1>
          {fun.map((trip, key) => (
            <div className="py-4" key={key}>
              <h2 className="text-xl md:text-2xl 2xl:text-3xl font-semibold tracking-tight text-gray-900">
                {trip.name}
              </h2>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-6 h-full w-full py-2 items-center justify-center">
                {trip.photos.map((e) => (
                  <li
                    className="py-2 relative w-full h-64 shadow-xl rounded-lg overflow-hidden hover:translate-y-[-0.125rem] transition-[5s] ease-linear"
                    key={e}
                  >
                    <Image
                      layout="fill"
                      objectFit="cover"
                      objectPosition="center center"
                      draggable="false"
                      alt={e}
                      src={`/img/fun/${e}`}
                    />
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
