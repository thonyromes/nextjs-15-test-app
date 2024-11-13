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
  className?: string;
};

const UserCardStyled = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  border: 1px solid #ccc;
  border-radius: 0.5rem;
  padding: 1rem;
  width: 100%;
  max-width: 320px;
`;

const UserCard = ({ image, firstName, lastName, age, id, className }: UserCardProps) => {
  return (
      <UserCardStyled className={className} href={`/${id}`}>
        {image && (
          <div>
          <Image src={image} alt={firstName || ""} width={100} height={100} />
        </div>
      )}
      <p>{firstName}</p>
      <p>{lastName}</p>
      <p>{age}</p>
    </UserCardStyled>
  );
};

export default UserCard;
