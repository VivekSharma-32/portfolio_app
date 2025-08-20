const Footer = () => {
  return (
    <footer className="bg-black text-white border-t border-yellow-50 py-5">
      <div className="flex items-center justify-center px-4">
        <h1 className="text-lg md:text-xl font-semibold text-center">
          &copy; {new Date().getFullYear()} All Rights Reserved. Developed by{" "}
          <span className="text-yellow-400 font-bold">Vivek Sharma</span>
        </h1>
      </div>
    </footer>
  );
};

export default Footer;
