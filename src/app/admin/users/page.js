import injectToken from "@/app/actions";
import { UserProvider } from "@/features/context/UserContext";
import { getAllRoles } from "@/lib/services/roles";
import { getUsers } from "@/lib/services/user/userServices";
import dynamic from "next/dynamic";
const UserList = dynamic(() => import("@/components/User/UserList"));
const UserForm = dynamic(() => import("@/components/User/UserForm"));
async function page() {
  await injectToken();
  const users = await getUsers({ limit: 5, page: 1 });
  const roles = await getAllRoles();
  return (
    <>
      <UserProvider>
        <UserForm roles={roles} />
        <UserList users={users} />
      </UserProvider>
    </>
  );
}

export default page;
