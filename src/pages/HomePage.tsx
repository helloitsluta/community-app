import FeaturedPosts from "../ui/Home/FeaturedPosts"
import HeroSection from "../ui/Home/HeroSection"
import JoinSection from "../ui/Home/JoinSection"
import Layout from "../ui/Home/Layout"

function HomePage() {
  return (
    <Layout>
      <HeroSection />
      <FeaturedPosts />
      <JoinSection />
    </Layout>
  )
}

export default HomePage
