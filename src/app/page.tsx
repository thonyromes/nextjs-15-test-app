import Users from "@/components/Users/Users";
import { Suspense } from "react";

export const metadata = {
  title: "Users List",
};

const HomePage = async () => {
  
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="">
        <h1 className="text-4xl font-bold">User List</h1>
        <Suspense fallback={<div>Loading...</div>}>
          <Users />
        </Suspense>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center"></footer>
    </div>
  );
};

export default HomePage;
