import React, { useState } from 'react';
import image1 from '../../assets/navbar1.png';
import { IoIosArrowUp } from "react-icons/io";
import { FaCartShopping } from "react-icons/fa6";
import { FiMenu, FiX } from "react-icons/fi";
import Darkbutton from './Darkbutton';
import Under from './Under';
import { IoIosArrowDown } from "react-icons/io";

// Dropdown menus
const lister = [
  { id: 1, name: "Lunch Recipes" },
  { id: 2, name: "Appetizers & Snack Recipes" },
  { id: 3, name: "Dinner Recipes" },
  { id: 4, name: "Dessert Recipes" },
  { id: 5, name: "Drink & Cocktail Recipes" },
];

const lister2 = [
  { id: 1, name: "Trending Now" },
  { id: 2, name: "Casserole Recipes" },
  { id: 3, name: "Chili Recipes" },
  { id: 4, name: "Soup Recipes" },
  { id: 5, name: "Pasta Recipes" },
];

const lists = [
  { id: 1, name: "HOME" },
  { id: 2, name: "RECIPES" },
  { id: 3, name: "POPULAR" },
  { id: 4, name: "MEAT&SEAFOOD" },
  { id: 5, name: "HEALTHY&DIET" },
  { id: 6, name: "SEASONAL" },
];

const lister3 = [
  { id: 1, name: "Keto Recipes" },
  { id: 2, name: "Healthy Recipes" },
  { id: 3, name: "Vegetarian Recipes" },
  { id: 4, name: "Vegan Recipes" },
  { id: 5, name: "Mediterranean Diet Recipes" },
  { id: 6, name: "Weight Watchers Recipes" },
  { id: 7, name: "Low-Carb Recipes" },
  { id: 8, name: "Gluten-Free Recipes" },
];

const lister5 = [
  { id: 1, name: "Chicken Recipes" },
  { id: 2, name: "Salmon Recipes" },
  { id: 3, name: "Pork Chop Recipes" },
  { id: 4, name: "Ground Beef Recipes" },
  { id: 5, name: "Shrimp Recipes" },
];

const lister6 = [
  { id: 1, name: "Spring Recipes" },
  { id: 2, name: "Summer Recipes" },
  { id: 3, name: "Fall Recipes" },
  { id: 4, name: "Winter Recipes" },
];

const dropdowns = [[], lister, lister2, lister5, lister3, lister6];

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const[openclose,setOpenclose]=useState(null);
  console.log(openclose)
  return (
    <nav className="bg-white dark:bg-gray-900 shadow-2xl dark:text-white duration-200 relative z-50">
      <div className="container flex justify-between items-center py-3">

        {/* Logo */}
        <a
          href="#"
          className="flex flex-row gap-2 sm:text-6xl text-2xl font-bold"
          aria-label="Go to homepage"
        >
          <img src={image1} className="w-10 sm:w-14" alt="Foodie Logo" />
          FOODIE
        </a>

        {/* Nav Links (desktop) */}
        <ul className="hidden xl:flex gap-4">
          {lists.map((dr, index) => (
            <li key={dr.id} className="flex group flex-col relative">
              <a
                href="#"
                className="py-4 px-4 inline-block hover:underline decoration-5 decoration-blue-400 text-2xl font-mono"
              >
                {dr.name}
              </a>
              {dropdowns[index]?.length > 0 && (
                <Under items={dropdowns[index]} />
              )}
            </li>
          ))}
        </ul>

        {/* Right side: Cart + Dark + Hamburger */}
        <div className="flex items-center gap-4">

          {/* Order button */}
          <div className="bg-gradient-to-r gap-2 group flex from-amber-400 via-amber-500 to-amber-800 px-4 py-2 rounded-full hover:scale-105 transition-transform">
            <button
              className="hidden group-hover:block text-white"
              aria-label="Order now"
            >
              Order
            </button>
            <FaCartShopping className="text-white text-2xl" />
          </div>

          <Darkbutton />

          {/* Hamburger: visible only below xl */}
          <button 
            className="xl:hidden text-2xl relative"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
     {mobileMenuOpen && (
        <div className="absolute top-12 right-0 rounded-md    bg-white dark:bg-gray-950 px-6 py-3 shadow-lg">
          <ul className="space-y-2">
           {lists.map((dr, index) => (
  <li key={dr.id} className="flex flex-col">
    <div className="flex justify-between items-center w-full border-b border-gray-900 dark:border-white py-2">
      <a
        href="#"
        className="text-[12px] font-semibold hover:bg-red-200"
      >
        {dr.name}
      </a>
      {dropdowns[index]?.length > 0 && (
        <button
          onClick={() =>
            setOpenclose(openclose === index ? null : index)
          }
        >
          {openclose === index ? (
            <IoIosArrowUp className=" cursor-pointer" />
          ) : (
            <IoIosArrowDown className="cursor-pointer" />
          )}
        </button>
      )}
    </div>

    {openclose === index && dropdowns[index].length > 0 && (
      <div className="ml-4 border-l-2 border-gray-200 dark:border-gray-700">
        <ul className="space-y-1 pl-2">
          {dropdowns[index].map((item) => (
            <li key={item.id } className='font-semibold py-1  '>
              <a
                href="#"
                className="text-sm    "
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    )}
  </li>
))}
  </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;