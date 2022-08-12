import Image from "next/image";
import icon from "../../public/img/fibro.jpg";
import info from "../data/info";
import Social from "../components/Social";

export default function Home() {
  return (
    <div className="w-full h-auto min-h-screen flex flex-col items-center">
      <main className="flex flex-col w-full h-full max-w-5xl items-center justify-center">
        <div className="flex flex-col w-full h-full justify-center px-5 pb-16">
          <div className="flex flex-col items-center py-16 gap-y-2">
            <div className="relative overflow-hidden rounded-full w-36 h-36 shadow-lg">
              <Image
                layout="fill"
                objectFit="cover"
                objectPosition="center center"
                placeholder="blur"
                draggable="false"
                alt={info.name}
                src={icon}
              />
            </div>
            <h1 className="text-3xl md:text-4xl 2xl:text-5xl font-bold tracking-tight text-center">
              {info.name}
            </h1>
            <p className="text-sm md:text-base 2xl:text-lg tracking-tighter text-center">
              {info.blurb}
            </p>
          </div>
          <div className="flex flex-col h-full w-full py-4">
            <h1 className="text-2xl md:text-3xl 2xl:text-4xl font-bold tracking-tight">
              About Me
            </h1>
            <p className="text-base md:text-lg 2xl:text-xl tracking-tight leading-6 py-2">
              {info.bio}
            </p>
          </div>
          <div className="flex flex-col h-full w-full py-4">
            <h1 className="text-2xl md:text-3xl 2xl:text-4xl font-bold tracking-tight">
              Research
            </h1>
            <p className="text-base md:text-lg 2xl:text-xl tracking-tight leading-6 py-2">
              {info.researchBio}
            </p>
          </div>
          <div className="flex flex-col h-full w-full py-4 gap-y-2">
            <h1 className="text-2xl md:text-3xl 2xl:text-4xl font-bold tracking-tight py-2">
              Socials
            </h1>
            {info.socials.map((social, key) => (
              <Social social={social} key={key} />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
