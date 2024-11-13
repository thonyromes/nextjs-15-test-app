This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, select the node version (20+) 
```bash
nvm use 20
```
then run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Task and Instructions

To learn more about Next.js, take a look at the following resources:

- API Integration: fetch a list of users records from 'https://dummyjson.com/users?limit=<number>&skip=<number>'

- Rendering: Use UserCard component to render the list of users on the page, the card should only display these fields (image, firstName, lastName and age).

- Styling & Responsiveness: style the UserCard with Styled-Components, You can use tailwind for page/general styling and responsiveness. On medium and lager screens display  UserCard in Grid-2 layout, and on smaller screens Grid-1 .

- Navigation: Create a User details page, the UserCard should be able to navigate to the details page which will other details about the user.



## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
