import React from "react";
import Image from "next/image";
import Link from "next/link";

const Profile = () => {
  const profileImage = require("../../public/images/maskcat.jpg");

  return (
    <section className="text-center">
      <Image
        className="w-64 h-64 rounded-full mx-auto"
        src={profileImage}
        alt="mask_cat"
        priority
      />
      <h2 className="text-2xl font-bold">아령하세여 고졍입니다.</h2>
      <h3 className="text-lg font-semibold">FE 개발자가 되고싶은 사람</h3>
      <p className="font-light">긍정적으로 재밌게 일하자!</p>
      <Link href="/contact">
        <button className="bg-yellow-400 py-1 px-3 rounded-lg font-bold mt-1">
          Contact Me
        </button>
      </Link>
    </section>
  );
};

export default Profile;
