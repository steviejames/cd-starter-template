import React from "react";
import templates from "../template";
import Link from "next/link";
import Header from "@/components/Header";

function Page() {
  return (
    <div>
      <Header/>
      {templates.map((item, i) => (
        <Link href={`/${i}`}>
          <p>{item.name}</p>
        </Link>
      ))}
    </div>
  );
}

export default Page;
