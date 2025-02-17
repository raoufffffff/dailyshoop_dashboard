import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiMenu, FiSearch, FiX } from "react-icons/fi";
import { Link, NavLink } from "react-router-dom";
import TyoeLinks from "../LinksType"; // Import the type links component

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false); // State for mobile menu
  const [searchOpen, setSearchOpen] = useState(false); // State for search bar

  const navLinks = [
    {
      name: "Add Item",
      link: "add"
    },
    {
      name: "Order",
      link: "order"
    },
    {
      name: "scan",
      link: "read"
    },
    {
      name: "see evry item",
      link: "evry"
    }
  ];

  return (
    <nav className="bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 text-white shadow-md">
      <div className="container mx-auto flex items-center justify-between px-4 py-3">
        {/* Logo */}
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="text-xl font-semibold cursor-pointer"
        >
          <Link to="/" className="hover:text-yellow-300 transition-colors">Dailyashoop</Link>
        </motion.div>

        {/* Links (Desktop) */}
        <div className="hidden md:flex space-x-8">
          {navLinks.map((link, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="transition-transform duration-200 cursor-pointer"
            >
              <Link to={`/${link.link}`} className="hover:underline text-lg">{link.name}</Link>
            </motion.div>
          ))}
        </div>

        {/* Search Icon */}
        <motion.div
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setSearchOpen(!searchOpen)}
          className="cursor-pointer md:ml-6"
        >
          <FiSearch size={24} className="hover:text-yellow-300 transition-colors" />
        </motion.div>

        {/* Hamburger Menu (Mobile) */}
        <motion.div
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
          className="block md:hidden cursor-pointer"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FiX size={28} /> : <FiMenu size={28} />}
        </motion.div>
      </div>

      {/* Type Links Component */}
      <div className="hidden md:block">
        <TyoeLinks />
      </div>

      {/* Search Bar */}
      <AnimatePresence>
        {searchOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="bg-white px-6 py-4 shadow-lg"
          >
            <div className="flex items-center">
              <input
                type="text"
                placeholder="Search..."
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring focus:ring-indigo-300"
              />
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setSearchOpen(false)}
                className="ml-4 px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700"
              >
                Search
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: "auto" }}
            exit={{ height: 0 }}
            className="bg-indigo-700 md:hidden text-white overflow-hidden"
          >
            <ul className="flex flex-col space-y-4 py-4 px-6">
              {navLinks.map((link, index) => (
                <motion.li
                  key={index}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="cursor-pointer"
                >
                  <Link to={`/${link.link}`} onClick={() => setMenuOpen(false)} className="text-lg hover:underline">
                    {link.name}
                  </Link>
                </motion.li>
              ))}
            </ul>
            {/* Include the type links in the mobile menu */}
            <div className="py-4 px-6">
              <TyoeLinks />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
