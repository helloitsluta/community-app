import { Link } from "react-router-dom"

const JoinSection: React.FC = () => {
  return (
    <section className="bg-gray-600 text-white text-center py-16 lg:py-20 px-4">
      <h3 className="text-2xl lg:text-4xl font-bold mb-4">
        Join Luta - Community App
      </h3>
      <p className="mb-6 lg:text-lg">
        Connect, Share, and Explore with Others!
      </p>
      <div className="animate-bounce">
        <Link
          className="bg-blue-500 text-white rounded-lg px-6 py-2 leading-tight lg:text-lg font-semibold"
          to="/login"
        >
          Get Started
        </Link>
      </div>
    </section>
  )
}

export default JoinSection
