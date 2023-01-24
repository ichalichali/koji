import React from "react";
import Head from "next/head";
import Header from "../components/Header";
import Banner from "../components/banner";

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>KOJI</title>
      </Head>

      <Header />
      <Banner />

      <main>
        <section>
          <h2 className=" text-4xl font-bold px-10">Explore Near By</h2>
        </section>
      </main>
    </div>
  );
}
