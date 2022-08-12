import info from "../data/info";
import Head from "next/head";

export default function SEO() {
  return (
    <>
      <Head>
        <title>{info.name}</title>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicon/apple-touch-icon.png"
          id="icon"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon/favicon-32x32.png"
          id="icon"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon/favicon-16x16.png"
          id="icon"
        />
        <link rel="manifest" href="/favicon/site.webmanifest" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="title" content={info.name} />
        <meta name="theme-color" content={info.themeColor} />
        <meta name="description" content={info.blurb} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={info.url} />
        <meta property="og:title" content={info.name} />
        <meta property="og:description" content={info.blurb} />
        <meta property="og:image" content={info.previewImg} />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content={info.url} />
        <meta property="twitter:title" content={info.name} />
        <meta property="twitter:description" content={info.blurb} />
        <meta property="twitter:image" content={info.previewImg} />
      </Head>
    </>
  );
}
