import React from 'react';
import Image from 'next/image';
import { IoIosArrowForward } from 'react-icons/io';

const NotFound = () => {
  return (
    <main className="flex items-center justify-center flex-col py-10 px-4 min-h-screen">
      <div className="flex flex-col md:flex-row gap-5 items-center w-full max-w-6xl ">
        <div className="flex flex-col justify-center items-center gap-y-10 w-full md:w-1/2">
          <p className="text-mt-red text-5xl md:text-7xl scale-150 font-bold">
            Oops
          </p>
          <p className="text-3xl md:text-4xl font-light">Page Not Found</p>
          <div className="grid grid-cols-2 gap-x-16 gap-y-4">
            <a
              href="https://www.sosarena.com/portfolio"
              className="flex items-center gap-2 text-xl font-semibold"
            >
              <IoIosArrowForward /> Projects
            </a>
            <a
              href="https://www.sosarena.com/blogs"
              className="flex items-center gap-2 text-xl font-semibold"
            >
              <IoIosArrowForward /> Blogs
            </a>
            <a
              href="https://www.sosarena.com/about"
              className="flex items-center gap-2 text-xl font-semibold"
            >
              <IoIosArrowForward /> About
            </a>
            <a
              className="flex items-center gap-2 text-xl font-semibold"
              href="https://links.sosarena.com"
              target="_blank"
              rel="noreferrer"
            >
              <IoIosArrowForward /> Links
            </a>
          </div>
          <a
            href="https://react.sosarena.com/"
            className="text-white py-2 px-3 rounded-md font-semibold bg-red-700 hover:shadow-red"
          >
            Back to Homepage
          </a>
        </div>
        <div className="w-1 h-56 hidden md:block bg-mt-red" />
        <div className="flex justify-center items-center w-full md:w-1/2">
          <Image
            src="https://res.cloudinary.com/dgt1da1bz/image/upload/v1644929548/not_found_252219e95c.gif"
            alt="not found"
            height="300"
            width="450"
            objectFit="cover"
          />
        </div>
      </div>
    </main>
  );
};

export default NotFound;
