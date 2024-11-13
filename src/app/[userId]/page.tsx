import Image from "next/image";
import { Metadata } from "next/types";
import { getUser } from "../api/getUsers";

export const generateMetadata = async (userId: string): Promise<Metadata> => {
  const user = await getUser(userId);
  return {
    title: `${user.firstName} ${user.lastName}`,
    description: `User ${user.firstName} ${user.lastName}`,
  };
};

const UserPage = async ({ params }: { params: { userId: string } }) => {

  const { userId } = await params;

  const user = await getUser(userId);

  return (
    <div className="flex">
      {user?.image &&
      (
      <div>
        <Image src={user.image} alt={`${user.firstName} ${user.lastName}`} width={100} height={100} />
      </div>
      )
      }
      <div>
        <ul>
          <li>{user.firstName}</li>
          <li>{user.lastName}</li>
          <li>{user.age}</li>
        </ul>
      </div>
    </div>
  )
};

export default UserPage;
