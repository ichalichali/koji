import React from "react";
import Head from "next/head";
import Header from "../components/Header";
import Banner from "../components/banner";
import SmallCard from "../components/cardS";
import RoomSearch from "../components/search";
import InfoCard from "../components/infoCard";
import Footer from "../components/footer";

export default function Home({ exploreData }) {
  return (
    <div className="">
      <Head>
        <title>KOJI</title>
      </Head>
      <Header />
      <RoomSearch />
      <Banner />
      <main>
        <section className="p-10">
          <h2 className=" text-4xl font-bold py-10">Explore Near By</h2>
          <div className="grid xl:grid-cols-4">
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
        <section className="p-10">
          <h2 className=" text-4xl font-bold py-10">Find yours</h2>
          <div className="grid xl:grid-cols-4">
            {exploreData.map(
              ({
                id,
                img,
                distance,
                location,
                price,
                availability,
                availableRoom,
                internet,
                AC,
                WaterHeater,
              }) => (
                <InfoCard
                  key={id}
                  img={img}
                  distance={distance}
                  location={location}
                  price={price}
                  availability={availability}
                  availableRoom={availableRoom}
                  internet={internet}
                  AC={AC}
                  WaterHeater={WaterHeater}
                />
              )
            )}
          </div>
        </section>
      </main>
      <Footer />
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
