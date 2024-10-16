import React from "react";
import { useRouter } from "next/router";

export default function CourseDetail() {
  const { query, asPath } = useRouter();

  return (
    <div>
      <h1 className="text-3xl font-bold">{query.title}</h1>
      <p>{query.description}</p>
    </div>
  );
}
