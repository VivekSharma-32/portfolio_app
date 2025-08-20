import { ProductCard } from "../components/Card/Card";

const Projects = () => {
  return (
    <div className="bg-black text-white py-16" id="projects">
      {/* Section Heading */}
      <h2 className="text-3xl text-center mb-10 font-bold italic">
        Recent Projects
      </h2>

      {/* Projects Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-5">
        <ProductCard
          imgUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFXMVsqeqstL0GCNxoVwhjfqmumLoghY4ywQ&s"
          heading="E-commerce Project"
          content="Responsive, secure, and scalable e-commerce platform with cart, payments, and order management."
        />
        <ProductCard
          imgUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFXMVsqeqstL0GCNxoVwhjfqmumLoghY4ywQ&s"
          heading="Multivendor Project"
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
      </div>
    </div>
  );
};

export default Projects;
