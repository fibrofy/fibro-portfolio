import peerReviewed from "../data/peerReviewed.js";
import otherPubs from "../data/otherPubs.js";

export default function Publications() {
  return (
    <div className="w-full h-auto min-h-screen flex flex-col items-center">
      <main className="flex flex-col w-full h-full max-w-5xl items-center justify-center px-5">
        <div className="flex flex-col py-16 gap-y-2 w-full">
          <h1 className="text-3xl md:text-4xl 2xl:text-5xl font-bold tracking-tight">
            Publications
          </h1>
          <h2 className="text-lg md:text-xl 2xl:text-2xl tracking-tighter font-semibold">
            Peer Reviewed
          </h2>
          <ul className="list-decimal list-inside">
            {peerReviewed.map((e, key) => (
              <li className="py-2" key={key}>
                <h1 className="inline font-semibold">{e.name}</h1>
                <p>{e.cite}</p>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex flex-col py-16 gap-y-2 w-full">
          <h1 className="text-3xl md:text-4xl 2xl:text-5xl font-bold tracking-tight">
            Other Publications
          </h1>
          <ul className="list-decimal list-inside">
            {otherPubs.map((e, key) => (
              <li className="py-2" key={key}>
                <h1 className="inline font-semibold">{e.name}</h1>
                <p>{e.cite}</p>
              </li>
            ))}
          </ul>
        </div>
      </main>
    </div>
  );
}
