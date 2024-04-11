import Image from "next/image";
import React from "react";

export const Subjectcard = () => {
  return (
    <section className="p-4 bg-yellow-50">
      <Image src={require("../../public/qur.png")} alt="" className="mb-8" />
      <div>
        <p>Qur’an</p>
        <p>Trade vol (7d)</p>
      </div>
    </section>
  );
};
