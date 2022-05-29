import Head from "next/head";
import React from "react";

export default function Layout(props) {
  return (
    <>
      <Head>
        <link rel="icon" href="app.svg" />
        <title>Quran App</title>
      </Head>
      {props.children}
    </>
  );
}
