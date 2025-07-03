import React from 'react';
import image1 from '../../assets/navbar1.png';

import { FaCartShopping } from "react-icons/fa6";
import Darkbutton from './Darkbutton';
import Under from './Under';

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


// Make sure you have enough dropdown arrays for each link
const dropdowns = [[],lister, lister2,  lister5, lister3, lister6];

const Navbar = () => {
  return (
    <nav className='bg-white dark:bg-gray-900 shadow-2xl dark:text-white duration-200'>
      <div className='container sm:py-0 py-3'>
        <div className='flex justify-between items-center'>

          {/* Left section */}
          <div>
            <a
              href="#"
              className='flex flex-row gap-2 text-2xl sm:text-3xl font-bold'
              aria-label="Go to homepage"
            >
              <img src={image1} className='w-10' alt="Foodie Logo" />
              FOODIE
            </a>
          </div>

          {/* Right section */}
          <div className='flex items-center gap-8'>
            <ul className='hidden sm:flex gap-4'>
              {lists.map((dr, index) => (
                <li key={dr.id} className='flex group flex-col relative'>
                  <a
                    href="#"
                    className='py-4 px-4 inline-block  hover:underline decoration-5 decoration-blue-400 text-2xl font-mono'
                  >
                    {dr.name}
                  </a>

                  {/* Safe dropdown */}
                  {dropdowns[index]?.length > 0 && (
                    <Under items={dropdowns[index]} />
                  )}
                </li>
              ))}
            </ul>

            {/* Order button */}
            <div className='bg-gradient-to-r gap-2 group flex from-amber-400 via-amber-500 to-amber-800 px-4 py-2 rounded-full hover:scale-105 transition-transform'>
              <button
                className='hidden group-hover:block text-white'
                aria-label="Order now"
              >
                Order
              </button>
              <FaCartShopping className='text-white text-2xl' />
            </div>

            <Darkbutton />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
