import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { ProductCard } from "../components/Card/Card";

const Projects = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <div
      id="projects"
      className={`py-16 ${
        theme === "dark" ? "bg-black text-white" : "bg-white text-black"
      }`}
    >
      {/* Section Heading */}
      <h2
        className="text-center text-2xl sm:text-4xl md:text-5xl font-bold 
             mb-10"
      >
        Recent Projects
      </h2>

      {/* Projects Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <ProductCard
          imgUrl="/assets/images/projects/ecommerce.avif"
          heading="Multivendor E-commerce Project"
          content="A complete marketplace solution supporting multiple vendors, inventory management, and transactions."
        />
        <ProductCard
          imgUrl="/assets/images/projects/real-estate.avif"
          heading="Real Estate Project"
          content="Property listing platform with search filters, agent profiles, and virtual tour support."
        />
        <ProductCard
          imgUrl="/assets/images/projects/url-shortener.avif"
          heading="URL Shortener"
          content="Lightning-fast URL shortener with custom aliases, QR codes, and click analytics—built for shareability and scale."
        />
        <ProductCard
          imgUrl="/assets/images/projects/job-portal.avif"
          heading="Job Portal"
          content="A modern Job Portal that connects employers with job seekers—featuring smart search, resume uploads, applicant tracking, and role-based dashboards for seamless recruitment."
        />
      </div>
    </div>
  );
};

export default Projects;
