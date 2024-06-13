"use server";
import { redirect } from "next/navigation";
import connectDB from "./db";
import { User } from "./modal";
import { revalidatePath } from "next/cache";

export async function fetchMongoDB() {
  connectDB();
  // find all users
  const user = await User.find({});
  return user;
}

export async function insertMongoDB(formData: FormData) {
  connectDB();

  const name = formData.get("name");
  const email = formData.get("email");

  const newUser = new User({
    name,
    email,
  });
  newUser.save();
  revalidatePath("/");
}

export async function deleteMongoDB(formData: FormData) {
  connectDB();

  const id = formData.get("id");
  await User.findByIdAndDelete(id);

  revalidatePath("/");
}

export async function invaliDate() {
  revalidatePath("/");
}

export const serverAction = async (formData: FormData) => {
  const res = await fetch("http://localhost:4000/users", {
    method: "POST",
    body: JSON.stringify(Object.fromEntries(formData)),
    headers: {
      "Content-Type": "application/json",
    },
  });
  if (res.ok) {
    revalidatePath("/"); // 캐시만 지우고 데이터 세팅이 되지 않기 떄문에
    redirect("/"); // 리다이렉트를 사용하는게 좋다.
  }
};

export const deleteUser = async (formData: FormData) => {
  const id = formData.get("id");
  const res = await fetch("http://localhost:4000/users/" + id, {
    method: "DELETE",

    headers: {
      "Content-Type": "application/json",
    },
  });

  revalidatePath("/");
};
