import FormAddClient from "@/components/FormAddClient";
import FormAddServer from "@/components/FormAddServer";
import FormAddMongo from "@/components/FormAddMongo";
import UserListMongo from "@/components/UserListMongo";

import UserList from "@/components/UserList";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="flex flex-col justify-center items-center h-screen gap-8">
        <FormAddMongo />
        <UserListMongo />
      </div>
    </>
  );
}
