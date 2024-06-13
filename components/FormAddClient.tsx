"use client";
import { invaliDate } from "@/libs/action";
import React, { useState } from "react";

export default function FormAddClient() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handlerOnChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    set: React.Dispatch<React.SetStateAction<string>>
  ) => {
    set(e.target.value);
  };

  const onSubmitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const res = await fetch("http://localhost:4000/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email }),
    });

    if (res.ok) {
      console.log("ok!");
      invaliDate();
    }
  };

  const postUser = async () => {
    // return await (
    //   await fetch("http://localhost:4000/users", {
    //     method: "POST",
    //     body: JSON.stringify({ name: name, email: email }),
    //   })
    // ).json();
  };

  return (
    <>
      <form action="" className="w-[300px]" onSubmit={onSubmitHandler}>
        <input
          type="text"
          name="name"
          placeholder="Enter User Name"
          className="border boreder-gray-300 rounded-md p-2 block  w-full mb-4"
          onChange={(e) => handlerOnChange(e, setName)}
          value={name}
        />
        <input
          type="text"
          name="email"
          placeholder="Enter User Email"
          className="border mb-4 boreder-gray-300 rounded-md p-2 block  w-full"
          onChange={(e) => handlerOnChange(e, setEmail)}
          value={email}
        />
        <button
          className=" rounded-md mt-2 block w-full bg-blue-500 text-white p-2"
          onClick={postUser}
        >
          save
        </button>
      </form>
    </>
  );
}
