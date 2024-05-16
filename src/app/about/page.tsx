import React from "react";
import Profile from "@/components/Profile";
import ProfileDetail from "@/components/ProfileDetail";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Me",
  description: "고졍의 소개",
};

const AboutPage = () => {
  return (
    <div>
      <Profile />
      <ProfileDetail />
    </div>
  );
};

export default AboutPage;
