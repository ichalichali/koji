import React from "react";
import Head from "next/head";
import Header from "../components/Header";
import Banner from "../components/banner";
import SmallCard from "../components/cardS";

export default function Home({ exploreData }) {
  return (
    <div className="">
      <Head>
        <title>KOJI</title>
      </Head>

      <Header />
      <Banner />

      <main>
        <section className="p-10">
          <h2 className=" text-4xl font-bold py-10">Explore Near By</h2>
          <div className="grid grid-cols-1 sm: grid-cols-2 lg: grid-cols-3 xl:grid-cols-4">
            {exploreData.map((post) => (
              <SmallCard
                key={post.id}
                img={post.img}
                distance={post.distance}
                location={post.location}
              />
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}

import fsPromises from "fs/promises";
import path from "path";
export async function getStaticProps() {
  const filePath = path.join(process.cwd(), "/data/room.json");
  const jsonData = await fsPromises.readFile(filePath);
  const exploreData = JSON.parse(jsonData);

  return {
    props: {
      exploreData,
    },
  };
}
