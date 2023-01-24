import React from "react";
import Head from "next/head";
import Header from "../components/Header";
import Banner from "../components/banner";

export default function Home({ exploreData }) {
  return (
    <div className="">
      <Head>
        <title>KOJI</title>
      </Head>

      <Header />
      <Banner />

      <main>
        <section>
          <h2 className=" text-4xl font-bold p-10">Explore Near By</h2>

          {exploreData?.map((item) => {
            <h1>{item.location}</h1>;
          })}
        </section>
      </main>
    </div>
  );
}

export async function getStaticProps() {
  const exploreData = await fetch("http://localhost:3000/data").then((res) =>
    res.json()
  );

  return {
    props: {
      exploreData,
    },
  };
}
