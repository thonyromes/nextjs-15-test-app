import { User, UserResponse } from "./types";

// Pagination could be added later
export const getUsers = async (limit: number = 10, skip: number = 0) => {
  const userData: UserResponse = await fetch(
    `https://dummyjson.com/users?limit=${limit}&skip=${skip}`
  ).then((res) => res.json());
  return userData;
};

export const getUser = async (userId: string) => {
  const userData: User = await fetch(`https://dummyjson.com/users/${userId}`).then((res) => res.json());
  
  return userData;
};
