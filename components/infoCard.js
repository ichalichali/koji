import React from "react";

async function infoCard({ roomList }) {
  const filePath = path.join(process.cwd(), "../data/room.json");
  const jsonData = await fsPromises.readFile(filePath);
  const roomList = JSON.parse(jsonData);
  return (
    <div className=" flex">
      <div className=" grid lg:grid-cols-4 gap-6">
        {roomList.map((item) => {
          <div className=" shadow-lg rounded-lg">
            <img className=" rounded-t-lg" src={item.img} alt="" />
            <div className=" p-5">
              <h2 className=" text-3xl font-bold text-slate-700 mb-3">
                {item.title}
              </h2>
              <p className=" text-lg font-normal text-slate-300">{item.text}</p>
            </div>
          </div>;
        })}
      </div>
    </div>
  );
}

export default infoCard;
