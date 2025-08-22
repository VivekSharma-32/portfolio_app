import { FaEnvelope, FaLinkedin, FaPhoneAlt, FaUser } from "react-icons/fa";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { useTheme } from "../context/ThemeContext";

const Contact = () => {
  const { theme } = useTheme();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    if (data !== "") {
      toast.success("Your message has been submitted successfully.");
      reset();
    }
  };

  return (
    <section
      id="hireme"
      className={`py-20 transition-colors duration-300 ${
        theme === "dark"
          ? "bg-gradient-to-b from-black via-gray-900 to-black text-white"
          : "bg-gradient-to-b from-gray-100 via-white to-gray-100 text-gray-900"
      }`}
    >
      {/* Section Heading */}
      <h2
        className="text-center text-2xl sm:text-4xl md:text-5xl font-bold 
             bg-gradient-to-r from-yellow-400 via-orange-500 to-pink-500 
             bg-clip-text text-transparent mb-10"
      >
        Hire Me
      </h2>

      {/* Main Container */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid gap-10 sm:grid-cols-1 md:grid-cols-2">
        {/* Left Column: Cards */}
        <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-1">
          {/* Phone */}
          <div
            className={`flex flex-col sm:flex-row items-center sm:items-start gap-4 p-5 rounded-2xl shadow-lg transition-all duration-300 hover:scale-105
              ${
                theme === "dark"
                  ? "bg-gray-800/70 hover:shadow-teal-500/40"
                  : "bg-white border hover:shadow-teal-300/40"
              }`}
          >
            <div className="p-3 rounded-full bg-teal-500/20 text-teal-500 shrink-0">
              <FaPhoneAlt size={24} />
            </div>
            <div className="text-center sm:text-left">
              <h3 className="font-semibold text-lg">Phone</h3>
              <p className="text-gray-500 dark:text-gray-300">
                8493018103 / 6006552260
              </p>
            </div>
          </div>

          {/* Email */}
          <div
            className={`flex flex-col sm:flex-row items-center sm:items-start gap-4 p-5 rounded-2xl shadow-lg transition-all duration-300 hover:scale-105
              ${
                theme === "dark"
                  ? "bg-gray-800/70 hover:shadow-red-500/40"
                  : "bg-white border hover:shadow-red-300/40"
              }`}
          >
            <div className="p-3 rounded-full bg-red-500/20 text-red-500 shrink-0">
              <FaEnvelope size={24} />
            </div>
            <div className="text-center sm:text-left">
              <h3 className="font-semibold text-lg">Email</h3>
              <a
                href="mailto:vivek.sharma1275@gmail.com"
                className="hover:underline transition-colors text-gray-500 dark:text-gray-300 hover:text-red-500"
              >
                vivek.sharma1275@gmail.com
              </a>
            </div>
          </div>

          {/* LinkedIn */}
          <div
            className={`flex flex-col sm:flex-row items-center sm:items-start gap-4 p-5 rounded-2xl shadow-lg transition-all duration-300 hover:scale-105
              ${
                theme === "dark"
                  ? "bg-gray-800/70 hover:shadow-blue-500/40"
                  : "bg-white border hover:shadow-blue-300/40"
              }`}
          >
            <div className="p-3 rounded-full bg-blue-500/20 text-blue-500 shrink-0">
              <FaLinkedin size={24} />
            </div>
            <div className="text-center sm:text-left">
              <h3 className="font-semibold text-lg">LinkedIn</h3>
              <a
                href="https://www.linkedin.com/in/vivek-sharma-737672160/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline transition-colors text-gray-500 dark:text-gray-300 hover:text-blue-500"
              >
                Vivek Sharma
              </a>
            </div>
          </div>
        </div>

        {/* Right Column: Form */}
        <div>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className={`grid gap-6 p-6 sm:p-8 rounded-2xl shadow-lg transition-colors duration-300
              ${theme === "dark" ? "bg-gray-800/60" : "bg-white border"}`}
            autoComplete="off"
          >
            {/* Row 1: Name & Email */}
            <div className="grid md:grid-cols-2 gap-4 sm:gap-6">
              {/* Name */}
              <div>
                <label className="block mb-2 font-medium">Name</label>
                <div
                  className={`flex items-center rounded-lg px-3 ${
                    theme === "dark"
                      ? "bg-gray-900"
                      : "bg-gray-100 border border-gray-300"
                  }`}
                >
                  <FaUser className="text-gray-400 mr-2" />
                  <input
                    type="text"
                    placeholder="Enter your name"
                    className="w-full bg-transparent outline-none py-2 text-inherit placeholder-gray-400"
                    {...register("name", { required: "Name is required" })}
                  />
                </div>
                {errors.name && (
                  <p className="text-red-400 text-sm mt-1">
                    {errors.name.message}
                  </p>
                )}
              </div>

              {/* Email */}
              <div>
                <label className="block mb-2 font-medium">Email</label>
                <div
                  className={`flex items-center rounded-lg px-3 ${
                    theme === "dark"
                      ? "bg-gray-900"
                      : "bg-gray-100 border border-gray-300"
                  }`}
                >
                  <FaEnvelope className="text-gray-400 mr-2" />
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full bg-transparent outline-none py-2 text-inherit placeholder-gray-400"
                    {...register("email", {
                      required: "Email is required",
                      pattern: {
                        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                        message: "Invalid email address",
                      },
                    })}
                  />
                </div>
                {errors.email && (
                  <p className="text-red-400 text-sm mt-1">
                    {errors.email.message}
                  </p>
                )}
              </div>
            </div>

            {/* Mobile */}
            <div>
              <label className="block mb-2 font-medium">Mobile</label>
              <div
                className={`flex items-center rounded-lg px-3 ${
                  theme === "dark"
                    ? "bg-gray-900"
                    : "bg-gray-100 border border-gray-300"
                }`}
              >
                <FaPhoneAlt className="text-gray-400 mr-2" />
                <input
                  type="tel"
                  placeholder="Enter your mobile number"
                  maxLength={10}
                  className="w-full bg-transparent outline-none py-2 text-inherit placeholder-gray-400"
                  {...register("mobile", {
                    required: "Mobile Number is required",
                    pattern: {
                      value: /^[0-9]{10}$/,
                      message: "Enter a valid 10-digit mobile number",
                    },
                  })}
                />
              </div>
              {errors.mobile && (
                <p className="text-red-400 text-sm mt-1">
                  {errors.mobile.message}
                </p>
              )}
            </div>

            {/* Message */}
            <div>
              <label className="block mb-2 font-medium">Message</label>
              <textarea
                rows="5"
                placeholder="Write your message..."
                className={`w-full rounded-lg p-3 outline-none resize-none placeholder-gray-400
                  ${
                    theme === "dark"
                      ? "bg-gray-900 text-white"
                      : "bg-gray-100 text-black border border-gray-300"
                  }`}
                {...register("msg", { required: "Message is required" })}
              ></textarea>
              {errors.msg && (
                <p className="text-red-400 text-sm mt-1">
                  {errors.msg.message}
                </p>
              )}
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full sm:w-auto px-6 py-3 rounded-full font-semibold 
             bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 
             shadow-sm transition-all duration-300 hover:shadow-yellow-400/50 hover:scale-102 
             flex items-center justify-center gap-2 cursor-pointer"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
