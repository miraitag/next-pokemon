import { Navbar } from "@/components/ui";
import Head from "next/head";

interface ILayoutProps {
  children?: JSX.Element | JSX.Element[];
  title?: string;
}

const origin = typeof window === "undefined" ? "" : window.location.origin;

export const Layout = ({ children, title = "Pokemon App" }: ILayoutProps) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="author" content="Tahuilán" />
        <meta
          name="description"
          content={`Información sobre el pokemón ${title}`}
        />
        <meta name="keywords" content={`${title}, pokemon, pokedex`} />
        <meta property="og:title" content={`Información sobre ${title}`} />
        <meta
          property="og:description"
          content={`Esta es la página sobre ${title}`}
        />
        <meta property="og:image" content={`${origin}/img/banner.png`} />
      </Head>

      <Navbar />

      <main style={{ width: "95%", margin: "0 auto" }}>{children}</main>
    </>
  );
};
