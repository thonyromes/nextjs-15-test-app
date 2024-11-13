import { getUsers } from "@/app/api/user";
import UserCard from "../Card/UserCard";

const Users = async () => {
  const userData = await getUsers();

  return (
    <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 p-4">
          {userData.users.map((user) => (
            <UserCard key={user.id} id={user.id} age={user.age} firstName={user.firstName} lastName={user.lastName} image={user.image} />
          ))}
        </div>
  )
};

export default Users;
