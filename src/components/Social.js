import info from "../data/info";

export default function Social({ social }) {
  if (social.type == "edu") {
    return (
      <div className="flex flex-row items-center w-full gap-x-1 py-1">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-auto w-6 md:w-7 2xl:w-8"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z"
          />
        </svg>
        <h1 className="text-base md:text-lg 2xl:text-xl">{info.school}</h1>
      </div>
    );
  } else if (social.type == "lab") {
    return (
      <a
        className="w-min whitespace-nowrap"
        href={social.href}
        target="_blank"
        rel="noreferrer"
      >
        <div className="flex flex-row items-center w-full gap-x-1 py-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-auto w-6 md:w-7 2xl:w-8"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
            />
          </svg>
          <h1 className="text-base md:text-lg 2xl:text-xl border-b-2 border-transparent hover:border-b-black transition-[5s] ease-linear">
            Lab
          </h1>
        </div>
      </a>
    );
  } else if (social.type == "gs") {
    return (
      <a
        className="w-min whitespace-nowrap"
        href={social.href}
        target="_blank"
        rel="noreferrer"
      >
        <div className="flex flex-row items-center w-full gap-x-1 py-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-auto w-6 md:w-7 2xl:w-8"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={1.5}
          >
            <path d="M12 14l9-5-9-5-9 5 9 5z" />
            <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
            />
          </svg>
          <h1 className="text-base md:text-lg 2xl:text-xl border-b-2 border-transparent hover:border-b-black transition-[5s] ease-linear">
            Google Scholar
          </h1>
        </div>
      </a>
    );
  } else if (social.type == "rg") {
    return (
      <>
        <a
          className="w-min whitespace-nowrap"
          href={social.href}
          target="_blank"
          rel="noreferrer"
        >
          <div className="flex flex-row items-center w-full gap-x-1 py-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-auto w-6 md:w-7 2xl:w-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8 13v-1m4 1v-3m4 3V8M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z"
              />
            </svg>
            <h1 className="text-base md:text-lg 2xl:text-xl border-b-2 border-transparent hover:border-b-black transition-[5s] ease-linear">
              ResearchGate
            </h1>
          </div>
        </a>
      </>
    );
  } else if (social.type == "orc") {
    return (
      <>
        <a
          className="w-min whitespace-nowrap"
          href={social.href}
          target="_blank"
          rel="noreferrer"
        >
          <div className="flex flex-row items-center w-full gap-x-1 py-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-auto w-6 md:w-7 2xl:w-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
              />
            </svg>
            <h1 className="text-base md:text-lg 2xl:text-xl border-b-2 border-transparent hover:border-b-black transition-[5s] ease-linear">
              ORCID
            </h1>
          </div>
        </a>
      </>
    );
  } else {
    return (
      <>
        <a
          className="w-min whitespace-nowrap"
          href={social.href}
          target="_blank"
          rel="noreferrer"
        >
          <div className="flex flex-row items-center w-full gap-x-1 py-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-auto w-6 md:w-7 2xl:w-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13"
              />
            </svg>
            <h1 className="text-base md:text-lg 2xl:text-xl border-b-2 border-transparent hover:border-b-black transition-[5s] ease-linear">
              {social.name}
            </h1>
          </div>
        </a>
      </>
    );
  }
}
