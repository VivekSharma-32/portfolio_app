import {
  FaEnvelope,
  FaLinkedin,
  FaPhoneAlt,
  FaUser,
  FaCheckCircle,
} from "react-icons/fa";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { useTheme } from "../context/ThemeContext";
import { useState } from "react";
import { registerQuery } from "../apis/contact";
import { sanitizeInput } from "../utils/sanitize";
const Contact = () => {
  const [loading, setLoading] = useState(false);
  const [showDialog, setShowDialog] = useState(false);
  const [fireworks, setFireworks] = useState(false);
  const { theme } = useTheme();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    setLoading(true);
    try {
      const sanitizedData = {
        name: sanitizeInput(data.name),
        email: sanitizeInput(data.email),
        mobile: sanitizeInput(data.mobile),
        message: sanitizeInput(data.message),
      };

      const result = await registerQuery(sanitizedData);

      if (result?.success) {
        toast.success(result?.message);
        setShowDialog(true);
        setFireworks(true);
        reset();
      } else {
        toast.error("Unable to save your query.");
      }
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
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
      <h2 className="text-center text-2xl sm:text-4xl md:text-5xl font-bold mb-10">
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
              <p
                className={`${theme === "dark" ? " text-white" : "text-black"}`}
              >
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
                className={`${theme === "dark" ? " text-white" : "text-black"}`}
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
                className={`${theme === "dark" ? " text-white" : "text-black"}`}
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
                {...register("message", { required: "Message is required" })}
              ></textarea>
              {errors.message && (
                <p className="text-red-400 text-sm mt-1">
                  {errors.message.message}
                </p>
              )}
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={loading}
              className={`w-full sm:w-auto px-6 py-3 rounded-full font-semibold border shadow-sm transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer
              ${
                loading ? "opacity-70 cursor-not-allowed" : "hover:scale-105"
              } ${
                theme === "dark"
                  ? "bg-transparent text-white"
                  : "bg-black text-white border-none"
              }`}
            >
              {loading ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>
      </div>

      {/*  Thank You Dialog */}
      {showDialog && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 w-full">
          <div
            className={`rounded-2xl shadow-xl p-8  max-w-sm w-full text-center relative z-10
      ${
        theme === "dark" ? "bg-gray-800 text-white" : "bg-white text-gray-900"
      }`}
          >
            <FaCheckCircle className="text-green-500 text-5xl mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-2">Thank You!</h3>
            <p className="mb-6 text-sm">
              I truly appreciate you reaching out. Your message has been
              received, and I will get back to you shortly. Wishing you a
              wonderful day ahead!
            </p>
            <button
              onClick={() => {
                setShowDialog(false);
                setFireworks(false);
              }}
              className="px-6 py-2 rounded-full font-semibold bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 text-white shadow hover:scale-105 transition cursor-pointer"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Contact;
