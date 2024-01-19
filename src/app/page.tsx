import React from "react";
import templates from "../template";
import Link from "next/link";

function Page() {
  return (
    <div>
      <h1>Template Maker</h1>
      {templates.map((item, i) => (
        <Link href={`/${i}`}>
          <p>{item.name}</p>
        </Link>
      ))}
    </div>
  );
}

export default Page;
