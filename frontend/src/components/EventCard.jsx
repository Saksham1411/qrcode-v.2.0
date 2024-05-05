import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { format } from "date-fns";
import { WobbleCard } from "./ui/wobble-card";
const Card = () => {
  const [event, setEvent] = useState(null);
  useEffect(() => {
    axios
      .get("/getEvent")
      .then((res) => {
        console.log(res.data);
        setEvent(res.data.events);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <>
      {!event && (
        <div className="text-4xl">
          You have no events Create a{" "}
          <Link
            to={"/home/newevent"}
            className=" border-b border-gray-400 rounded-lg hover:border-none"
          >
            new Event
          </Link>{" "}
        </div>
      )}
      {event &&
        event.map((eve) => (
          <WobbleCard containerClassName="border-2 bg-opacity-70">
            <div className="flex flex-col gap-3 p-8 max-w-80 rounded-xl bg-transparent text-white bg-opacity-80 font-normal font-mono">
              <h1 className="text-3xl font-bold">
                Event Name{" "}
                <span className="text-2xl font-normal">{eve.name}</span>
              </h1>
              <h2 className="text-2xl font-bold">
                Event code{" "}
                <span className="text-xl font-normal">{eve.code}</span>
              </h2>
              <div className="flex justify-between gap-3 text-lg">
                <div className="flex flex-col ">
                  <p className="font-semibold">date</p>
                  {format(new Date(eve.date), "dd-MM-yy")}
                </div>
                <div className="flex flex-col">
                  <p className="font-semibold">time</p>
                  {eve.time}
                </div>
              </div>
              <p className="text-lg font-bold">
                {" "}
                Address{" "}
                <span className="text-md font-normal">{eve.address}</span>
              </p>
            </div>
          </WobbleCard>
        ))}
    </>
  );
};

export default Card;
