import { deleteUser } from "@/libs/action";

import { fetchMongoDB } from "@/libs/action";
async function fetchUsers() {
  return await (
    await fetch("http://localhost:4000/users", {
      next: {
        revalidate: 10,
      },
    })
  ).json();
}
export default async function UserList() {
  // const users = await fetchUsers();
  const users = await fetchMongoDB();

  return (
    <>
      <ul className="flex flex-col gap-4">
        {users &&
          users.map((users: { id: string; name: string; email: string }) => {
            return (
              <li key={users.id} className="bg-white w-[300px] p-3 rounded-lg">
                <div>
                  <h1>{users.name}</h1>
                  <p>{users.email}</p>
                  <div className="flex justify-end gap-4">
                    <form action={deleteUser}>
                      <input type="hidden" name="id" value={users.id} />
                      <button className=" underline text-rose-400">삭제</button>
                    </form>
                  </div>
                </div>
              </li>
            );
          })}
      </ul>
    </>
  );
}
