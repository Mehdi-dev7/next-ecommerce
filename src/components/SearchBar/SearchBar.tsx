"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";


export default function SearchBar() {

  const router = useRouter();

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Implement search logic here
    const formData = new FormData(e.currentTarget);
    const name = formData.get("name") as string;

    if (name) {
      // Redirect to search results page or perform search
      router.push(`/list?name=${name}`);
    }
  };

  return (
    <form className="flex items-center justify-between gap-4 bg-gray-100 p-2 rounded- flex-1" onSubmit={handleSearch}>
      <input
        type="text"
        name="name"
        placeholder="Search..."
        className="flex-1 bg-transparent outline-none"
      />
      <button className="cursor-pointer">
        <Image src="/search.png" alt="Search" width={16} height={16} />
      </button>
      </form>
  )
}