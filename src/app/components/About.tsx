import { motion } from "framer-motion";

const About = () => {
  return (
    <section
      id="about"
      className="py-14 bg-black text-white border-t border-b border-gray-700"
    >
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-10 md:space-y-0">
          {/* Left: Avatar and Info */}
          <div className="flex items-start space-x-6">
            {/* Avatar with Shadow */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <img
                src="/path-to-your-avatar/avatar.png"
                alt="Madan Bhat"
                className="w-20 h-20 rounded-full object-cover shadow-lg"
              />
            </motion.div>

            {/* Text Info with Max Width */}
            <div style={{ maxWidth: "800px" }}>
              <h3 className="text-2xl font-bold text-white mb-2">Madan Bhat</h3>
              <p className="text-gray-400 mb-4">
                I'm a dedicated software developer with over 5 years of
                experience. My expertise lies in building intuitive mobile and
                web applications that prioritize user experience and
                performance. I’m passionate about bringing ideas to life through
                clean, well-structured code.
              </p>

              {/* More Info Button */}
              <motion.a
                whileHover={{ scale: 1.1 }}
                href="#"
                className="inline-flex items-center text-purple-500 hover:underline"
              >
                More info
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="ml-1 h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17 13l-4 4m0 0l-4-4m4 4V3"
                  />
                </svg>
              </motion.a>
            </div>
          </div>

          {/* Right: Things I Offer */}
          <div className="mt-8 md:mt-0 md:ml-8 w-full md:w-auto border border-gray-500 p-6 rounded-md">
            <h4 className="text-lg font-semibold text-gray-200 mb-6 uppercase tracking-wide text-center">
              Things I Offer
            </h4>
            <div className="flex flex-col space-y-4">
              <p className="text-sm text-gray-300 flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 text-green-500 mr-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                Responsive web development
              </p>
              <p className="text-sm text-gray-300 flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 text-green-500 mr-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                Mobile app development
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
