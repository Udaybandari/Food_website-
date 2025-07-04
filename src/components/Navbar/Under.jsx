import React from 'react';

const Under = ({ items = [] }) => {
  return (
    <div
      className="
        hidden group-hover:block 
        transition-all duration-300 ease-in-out
        absolute top-12
        w-52
        bg-white text-black 
        dark:bg-gradient-to-b dark:from-black dark:via-gray-900 dark:to-gray-800 dark:text-white
        rounded-md shadow-xl 
        backdrop-blur-sm bg-opacity-95
        z-50
      "
    >
      <ul className="flex flex-col">
        {items.map((data) => (
          <li key={data.id}>
            <a
              href="#"
              className="
                block px-4 py-2
                text-[15px] font-semibold font-sans
                hover:bg-gray-100 dark:hover:bg-black/30
                hover:text-blue-500
                transition-colors duration-200
              "
            >
              {data.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Under;
