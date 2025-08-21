import { ProductCard } from "../components/Card/Card";

const Projects = () => {
  return (
    <div className="bg-black text-white py-16" id="projects">
      {/* Section Heading */}
      <h2
        className="text-center text-2xl sm:text-4xl md:text-5xl font-bold 
             bg-gradient-to-r from-yellow-400 via-orange-500 to-pink-500 
             bg-clip-text text-transparent mb-10"
      >
        Recent Projects
      </h2>

      {/* Projects Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <ProductCard
          imgUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFXMVsqeqstL0GCNxoVwhjfqmumLoghY4ywQ&s"
          heading="E-commerce Project"
          content="Responsive, secure, and scalable e-commerce platform with cart, payments, and order management."
        />
        <ProductCard
          imgUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFXMVsqeqstL0GCNxoVwhjfqmumLoghY4ywQ&s"
          heading="Multivendor E-commerce Project"
          content="A complete marketplace solution supporting multiple vendors, inventory management, and transactions."
        />
        <ProductCard
          imgUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFXMVsqeqstL0GCNxoVwhjfqmumLoghY4ywQ&s"
          heading="Real Estate Project"
          content="Property listing platform with search filters, agent profiles, and virtual tour support."
        />
        <ProductCard
          imgUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFXMVsqeqstL0GCNxoVwhjfqmumLoghY4ywQ&s"
          heading="URL Shortener"
          content="Lightning-fast URL shortener with custom aliases, QR codes, and click analytics—built for shareability and scale."
        />
        <ProductCard
          imgUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFXMVsqeqstL0GCNxoVwhjfqmumLoghY4ywQ&s"
          heading="Job Portal"
          content="A modern Job Portal that connects employers with job seekers—featuring smart search, resume uploads, applicant tracking, and role-based dashboards for seamless recruitment."
        />
      </div>
    </div>
  );
};

export default Projects;
