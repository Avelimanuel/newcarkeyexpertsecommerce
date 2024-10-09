import { useEffect, useState } from "react";
import { getSmartKeys } from "../../hooks/getSmartKeys.jsx";
import { motion, AnimatePresence } from "framer-motion";
import RemoteKeys from "../remote-keys/index.jsx";
import Hero from "@/sections/Hero.jsx";

const containerVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      staggerChildren: 0.2,
      when: "beforeChildren",
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.3 },
  },
};

const services = [
  "Car Key Programming",
  "Car Key Cutting",
  "Car Key Repair",
  "GPS Car Track Installation",
  "Car Computer Repairs",
  "Car Alarm Installation",
  "Car Key Batteries",
  "Car Diagnosis",
  "Car Key Covers",
  "Car Key Batteries",
  "DPF Delete",
  "Catalytic Error Delete",
  "Car Electrical Troubleshooting",
];

const Smartkeys = () => {
  const { allsmartKeys, loading, error } = getSmartKeys();
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = 4;

  // Auto-slide logic using setTimeout
  useEffect(() => {
    const timeout = setTimeout(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % totalSlides);
    }, 5000);

    return () => clearTimeout(timeout);
  }, [currentSlide]);

  if (loading) {
    return <div className="text-center text-lg font-semibold">Loading...</div>;
  }

  if (error) {
    return <div className="text-center text-lg text-red-600">Error...</div>;
  }

  return (
    <div className="bg-gradient-to-r from-indigo-100 to-red-300 min-h-screen">
      <div className="bg-red-500 p-3"><h4 className="text-white text-2xl font-bold text-center">0716 884 011</h4></div>
      <Hero />

      {/* Infinite Scrolling Services Section */}
      <div className="w-full bg-indigo-200 py-4 overflow-hidden">
        <div className="flex animate-scroll whitespace-nowrap w-[200%] md:w-[150%] lg:w-[100%]">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 30 }}
              transition={{ duration: 0.3 }}
              className="text-lg font-bold text-indigo-800 px-4 py-2 mx-2 bg-white shadow-md rounded-lg border border-indigo-300"
            >
              {service}
            </motion.div>
          ))}
        </div>
      </div>

      <div className="flex flex-col justify-center items-center min-h-screen p-6">
        <motion.div
          className="w-full max-w-7xl mx-auto p-4"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {allsmartKeys.length > 0 ? (
            <motion.div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
              {allsmartKeys.map((smartkey) => (
                <motion.div
                  key={smartkey._id}
                  className="bg-gradient-to-l from-indigo-200 to-red-100 rounded-lg shadow-lg p-5 hover:shadow-2xl hover:scale-105 transform transition duration-300 ease-in-out"
                  variants={itemVariants}
                >
                  <img
                    src={smartkey.productImageUrl}
                    alt={smartkey.productName}
                    className="w-full h-40 object-contain sm:h-48 rounded-lg mb-4"
                    loading="lazy"
                  />
                  <div className="text-center">
                    <h2 className="text-lg sm:text-xl font-bold text-gray-900">
                      {smartkey.productName}
                    </h2>
                    <h3 className="text-sm sm:text-md text-gray-700 mt-2">
                      {smartkey.productDescription}
                    </h3>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          ) : (
            <div className="text-center text-lg font-medium">
              No smart keys found
            </div>
          )}
        </motion.div>
      </div>

      {/* CSS Animation for scrolling */}
      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(100%);
          }
          100% {
            transform: translateX(-100%);
          }
        }

        .animate-scroll {
          animation: scroll 35s linear infinite; /* Slower scroll speed */
        }
      `}</style>

      <RemoteKeys />
    </div>
  );
};

export default Smartkeys;
