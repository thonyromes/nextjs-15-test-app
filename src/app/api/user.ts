import { User, UserResponse } from "./types";

export const getUsers = async () => {
  const userData: UserResponse = await fetch(
    "https://dummyjson.com/users?limit=10&skip=0"
  ).then((res) => res.json());
  return userData;
};

export const getUser = async (userId: string) => {
  const userData: User = await fetch(`https://dummyjson.com/users/${userId}`).then((res) => res.json());
  
  return userData;
};
