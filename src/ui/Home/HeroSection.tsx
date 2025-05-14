const HeroSection: React.FC = () => {
  return (
    <section className="text-center py-20 lg:py-40 px-4">
      <h2 className="text-2xl lg:text-4xl font-bold mb-4">
        Welcome to Luta - Community App
      </h2>
      <p className="text-gray-600 mb-6 lg:text-lg">
        Connect with your community. Share and explore!
      </p>
      <div className="flex justify-center space-x-4">
        <span className="text-blue-600 font-bold">
          <span className="text-xl">5,000+</span> members
        </span>
        <span className="text-blue-600 font-bold">
          <span className="text-xl">1,200+</span> posts shared
        </span>
      </div>
    </section>
  )
}

export default HeroSection
