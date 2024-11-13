"use client";

import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";

type UserCardProps = {
  image?: string;
  firstName?: string;
  lastName?: string;
  age?: number | string;
  id: string | number;
};

const UserCardStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
`;

const UserCard = ({ image, firstName, lastName, age, id }: UserCardProps) => {
  return (
    <Link href={`/${id}`}>
      <UserCardStyled>
        {image && (
          <div>
          <Image src={image} alt={firstName || ""} width={100} height={100} />
        </div>
      )}
      <p>{firstName}</p>
      <p>{lastName}</p>
      <p>{age}</p>
    </UserCardStyled>
      </Link>
  );
};

export default UserCard;
