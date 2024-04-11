import Image from "next/image";
import React from "react";
import { Subjectcard } from "./subjectcard";

export const Subject = () => {
  return (
    <div className="p-10 px-32 space-y-3">
      <h1 className="font-bold text-4xl text-yellow-700">What we offer</h1>
      <p>
        At Markazul-Bayan, we provide access to a wealth of resources, including
        authentic texts, multimedia materials, and interactive sessions,
        fostering an environment conducive to holistic learning.
      </p>
      <Subjectcard />
    </div>
  );
};
