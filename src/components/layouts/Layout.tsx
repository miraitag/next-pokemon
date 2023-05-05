import { Navbar } from "@/components/ui";
import Head from "next/head";

interface ILayoutProps {
  children?: JSX.Element | JSX.Element[];
  title?: string;
}

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
      </Head>

      <Navbar />

      <main style={{ width: "95%", margin: "0 auto" }}>{children}</main>
    </>
  );
};
