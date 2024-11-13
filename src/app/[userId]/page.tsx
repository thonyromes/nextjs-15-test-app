import Image from "next/image";
import { Metadata } from "next/types";
import { getUser } from "../api/getUsers";

type UserPageProps = {
  params: Promise<{ userId: string }>;
}

export const generateMetadata = async ({ params }: UserPageProps): Promise<Metadata> => {
  const { userId } = await params;

  const user = await getUser(userId);
  
  return {
    title: `${user.firstName} ${user.lastName}`,
    description: `User ${user.firstName} ${user.lastName}`,
  };
};


const UserPage = async ({ params }: UserPageProps) => {

  const { userId } = await params;

  const user = await getUser(userId);

  return (
    <div className="flex flex-col items-center justify-center gap-4 pt-4">
      {user?.image &&
      (
      <div>
        <Image src={user.image} alt={`${user.firstName} ${user.lastName}`} width={100} height={100} />
      </div>
      )
      }
      <div>
        <dl>
          <dt className="font-bold">First Name</dt>
          <dd>{user.firstName}</dd>
          <dt className="font-bold">Last Name</dt>
          <dd>{user.lastName}</dd>
          <dt className="font-bold">Age</dt>
          <dd>{user.age}</dd>
        </dl>
      </div>
    </div>
  )
};

export default UserPage;
