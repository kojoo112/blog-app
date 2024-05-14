import Profile from "@/components/Profile";
import FeaturedPost from "@/components/FeaturedPost";
import NonFeaturedPost from "@/components/NonFeaturedPost";

export default function HomePage() {
  return (
    <>
      <Profile />
      <FeaturedPost />
      <NonFeaturedPost />
    </>
  );
}
