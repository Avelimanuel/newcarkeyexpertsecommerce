import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useState } from "react";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // State to toggle the mobile menu

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div>
     
      <div className="bg-white shadow-2xl p-4">
        {/* Desktop Menu */}
        <div className="hidden md:flex justify-between items-center text-lg font-bold">
          <Link to="/smart-keys" className="px-3 py-2 hover:text-orange-500 transition duration-200">
            Car Key Experts
          </Link>
          {/* <Link to="/#" className="px-3 py-2 hover:text-orange-500 transition duration-200">
            Our Services
          </Link>
          <Link to="/car-key-covers" className="px-3 py-2 hover:text-orange-500 transition duration-200">
            Key-covers
          </Link>
          <Link to="/car-key-shells" className="px-3 py-2 hover:text-orange-500 transition duration-200">
            Key-shells
          </Link>
          <Link to="/car-batteries" className="px-3 py-2 hover:text-orange-500 transition duration-200">
            Car-batteries
          </Link> */}
          {/* <Link to="/admin" className="px-3 py-2 hover:text-blue-500 transition duration-200">
            Admin
          </Link> */}
        </div>

        {/* Mobile Menu */}
        <div className="md:hidden flex justify-between items-center">
          <button onClick={toggleMenu} className="text-gray-800 focus:outline-none">
            <svg
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
              )}
            </svg>
          </button>
        </div>

        {/* Dropdown Menu */}
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={isOpen ? { opacity: 1, height: "auto" } : { opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
          className="flex flex-col md:hidden overflow-hidden"
        >
          {/* <Link to="/smart-keys" className="px-4 py-2 hover:bg-orange-200 transition duration-200">
            Smart-keys
          </Link>
          
          <Link to="/#" className="px-4 py-2 hover:bg-orange-200 transition duration-200">
            Key-covers
          </Link>
          <Link to="/#" className="px-4 py-2 hover:bg-orange-200 transition duration-200">
            Key-shells
          </Link>
          <Link to="/#" className="px-4 py-2 hover:bg-orange-200 transition duration-200">
            Car-batteries
          </Link> */}
          <Link to="/#" className="px-4 py-2 hover:bg-blue-200 transition duration-200">
            Admin
          </Link>
        </motion.div>
      </div>
    </div>
  );
};
