import axios from "axios";
import React, { useState } from "react";
import toast from "react-hot-toast";

const EventForm = () => {
    const [name, setName] = useState("");
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");
    const [address, setAddress] = useState("");

    async function submitHandler(e){
        e.preventDefault();
        try {
            const res = await axios.post('/addEvent',{
                name,date,time,address
            })
            console.log(res);
            toast.success('event created');
        } catch (error) {
            console.log(error);
            toast.error(error.response.data.msg)
        }
    }
  return (
    <>
      <form className="flex flex-col gap-4 border-4 p-8 rounded-xl bg-white bg-opacity-10 font-mono" onSubmit={submitHandler}>
        <input
          type="text"
          placeholder="Event Name"
          className="bg-black text-white text-lg px-4 py-2 rounded-lg"
          value={name}
          onChange={(e)=>setName(e.target.value)}
          />
        <input
          type="date"
          placeholder=""
          className="bg-black text-white text-lg px-4 py-2 rounded-lg"
          value={date}
          onChange={(e)=>setDate(e.target.value)}
          />
        <input
          type="time"
          placeholder=""
          className="bg-black text-white text-lg px-4 py-2 rounded-lg"
          value={time}
          onChange={(e)=>setTime(e.target.value)}
          />
        <input
          type="text"
          placeholder="Address"
          className="bg-black text-white text-lg px-4 py-2 rounded-lg"
          value={address}
          onChange={(e)=>setAddress(e.target.value)}
        />
        <button
          type="submit"
          className="bg-white hover:bg-opacity-80 text-black w-1/2 text-lg px-4 py-2 rounded-lg"
        >
          Submit
        </button>
      </form>
    </>
  );
};

export default EventForm;
