import Head from "next/head";
import React from "react";
interface Props {
  children?: React.ReactNode;
  id?: string;
  title?: string;
  description?: string;
}

export default function Main({
  children,
  id,
  title,
  description,
}: Props) {
  return (
    <div id={id}>
      <Head>
        <title>{title}</title>
        <meta
          name="description"
          content={description ? description : "Generated by create next app"}
        />
      </Head>
      <main>{children}</main>
    </div>
  );
}
