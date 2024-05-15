import React from "react";

const HEADING_CLASS = "text-xl font-bold";
const PARAGRAPH_CLASS = "";
const ProfileDetail = () => {
  return (
    <section className="w-full bg-gray-100 shadow-md text-center p-4 m-2">
      <h2 className={HEADING_CLASS}>Who Am I?</h2>
      <p className={PARAGRAPH_CLASS}>{'"치지직 스트리머 고졍"'}</p>
      <h2 className={HEADING_CLASS}>Career</h2>
      <p className={PARAGRAPH_CLASS}>무직자</p>
      <h2 className={HEADING_CLASS}>Skills</h2>
      <p className={PARAGRAPH_CLASS}>모르겟어요</p>
    </section>
  );
};

export default ProfileDetail;
