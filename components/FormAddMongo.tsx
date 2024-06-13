"use client";
import { serverAction } from "@/libs/action";
import { useRef } from "react";
import { insertMongoDB } from "@/libs/action";
export default function FormAddClient() {
  const ref = useRef<HTMLFormElement>(null);
  return (
    <>
      <form
        ref={ref}
        action={async (formData) => {
          await insertMongoDB(formData);
          ref.current?.reset();
        }}
        className="w-[300px]"
      >
        <input
          type="text"
          name="name"
          placeholder="Enter User Name"
          className="border boreder-gray-300 rounded-md p-2 block  w-full mb-4"
        />
        <input
          type="text"
          name="email"
          placeholder="Enter User Email"
          className="border mb-4 boreder-gray-300 rounded-md p-2 block  w-full"
        />
        <button className=" rounded-md mt-2 block w-full bg-blue-500 text-white p-2">
          save
        </button>
      </form>
    </>
  );
}
