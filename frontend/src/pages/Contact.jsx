import { FaEnvelope, FaLinkedin, FaPhoneAlt, FaUser } from "react-icons/fa";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const Contact = () => {
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
      className="bg-gradient-to-b from-black via-gray-900 to-black text-white py-20"
      id="contact"
    >
      {/* Section Heading */}
      <h2
        className="text-center text-2xl sm:text-4xl md:text-5xl font-bold 
             bg-gradient-to-r from-yellow-400 via-orange-500 to-pink-500 
             bg-clip-text text-transparent mb-10"
      >
        Get in Touch
      </h2>

      {/* Main Container: Left (Contacts) + Right (Form) */}
      <div className="max-w-6xl mx-auto px-6 grid gap-12 sm:grid-cols-1 md:grid-cols-2">
        {/* Left Column: Contact Cards */}
        <div className="grid gap-8">
          {/* Phone */}
          <div className="flex items-center gap-4 p-5 rounded-2xl bg-gray-800/70 shadow-lg hover:shadow-teal-500/40 transition-all duration-300 hover:scale-105">
            <div className="p-3 rounded-full bg-teal-500/20 text-teal-400">
              <FaPhoneAlt size={24} />
            </div>
            <div>
              <h3 className="font-semibold text-lg">Phone</h3>
              <p className="text-gray-300">8493018103 / 6006552260</p>
            </div>
          </div>

          {/* Email */}
          <div className="flex items-center gap-4 p-5 rounded-2xl bg-gray-800/70 shadow-lg hover:shadow-red-500/40 transition-all duration-300 hover:scale-105">
            <div className="p-3 rounded-full bg-red-500/20 text-red-400">
              <FaEnvelope size={24} />
            </div>
            <div>
              <h3 className="font-semibold text-lg">Email</h3>
              <a
                href="mailto:vivek.sharma1275@gmail.com"
                className="text-gray-300 hover:text-red-400 hover:underline transition-colors"
              >
                vivek.sharma1275@gmail.com
              </a>
            </div>
          </div>

          {/* LinkedIn */}
          <div className="flex items-center gap-4 p-5 rounded-2xl bg-gray-800/70 shadow-lg hover:shadow-blue-500/40 transition-all duration-300 hover:scale-105">
            <div className="p-3 rounded-full bg-blue-500/20 text-blue-400">
              <FaLinkedin size={24} />
            </div>
            <div>
              <h3 className="font-semibold text-lg">LinkedIn</h3>
              <a
                href="https://www.linkedin.com/in/vivek-sharma-737672160/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-blue-400 hover:underline transition-colors"
              >
                Vivek Sharma
              </a>
            </div>
          </div>
        </div>

        {/* Right Column: Contact Form */}
        <div>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="grid gap-6 bg-gray-800/60 p-8 rounded-2xl shadow-lg"
            autoComplete="off"
          >
            {/* Row 1: Name + Email */}
            <div className="grid md:grid-cols-2 gap-6">
              {/* Name */}
              <div>
                <label className="block mb-2 font-medium">Name</label>
                <div className="flex items-center bg-gray-900 rounded-lg px-3">
                  <FaUser className="text-gray-400 mr-2" />
                  <input
                    type="text"
                    placeholder="Enter your name"
                    className="w-full bg-transparent outline-none py-2 text-white placeholder-gray-400"
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
                <div className="flex items-center bg-gray-900 rounded-lg px-3">
                  <FaEnvelope className="text-gray-400 mr-2" />
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full bg-transparent outline-none py-2 text-white placeholder-gray-400"
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
              <div className="flex items-center bg-gray-900 rounded-lg px-3">
                <FaPhoneAlt className="text-gray-400 mr-2" />
                <input
                  type="tel"
                  placeholder="Enter your mobile number"
                  maxLength={10}
                  className="w-full bg-transparent outline-none py-2 text-white placeholder-gray-400"
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
                className="w-full bg-gray-900 rounded-lg p-3 text-white placeholder-gray-400 outline-none resize-none"
                {...register("msg", { required: "Message is required" })}
              ></textarea>
              {errors.msg && (
                <p className="text-red-400 text-sm mt-1">
                  {errors.msg.message}
                </p>
              )}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full sm:w-auto px-6 py-3 rounded-full font-semibold 
             bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 
             shadow-sm transition-all duration-300 
             hover:shadow-yellow-400/50 hover:scale-102 
             flex items-center justify-center gap-2 cursor-pointer"
            >
              <span
                className="bg-clip-text text-transparent 
                   bg-gradient-to-r from-black via-gray-800 to-black 
                   group-hover:from-white group-hover:via-yellow-200 group-hover:to-white 
                   transition-all duration-300"
              >
                Send Message
              </span>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
