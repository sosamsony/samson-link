import React from 'react';
import Image from 'next/image';
import {
  AiOutlineGithub,
  AiOutlineInstagram,
  AiOutlineTwitter,
  AiFillLinkedin,
  AiOutlineFacebook,
} from 'react-icons/ai';
import { BiWorld } from 'react-icons/bi';
import { MdArrowForwardIos } from 'react-icons/md';
import { v4 as uuidv4 } from 'uuid';

const linkItems = [
  {
    heading: 'sosamson.com',
    subtext: 'My Website',
    icon: <BiWorld size={36} />,
    color: '#fff',
    bg: '#2c2c6c',
    url: 'https://sosamson.com/',
  },
  {
    heading: '@sosamson',
    subtext: 'My Porfolio',
    icon: <BiWorld size={36} />,
    color: '#fff',
    bg: '#fe6300',
    url: 'https://sosamson.com/portfolio',
  },
  {
    heading: '@sosamson',
    subtext: 'My Resume',
    icon: <BiWorld size={36} />,
    color: '#fff',
    bg: '#1DA1F2',
    url: 'https://sosamson.com/resume',
  },
  {
    heading: '@sosamsony',
    subtext: 'Follow on Github',
    icon: <AiOutlineGithub size={36} />,
    color: '#fff',
    bg: '#333',
    url: 'https://github.com/sosamsony',
  },
  {
    heading: '@sosamsony',
    subtext: 'Follow on Instagram',
    icon: <AiOutlineInstagram size={36} />,
    color: '#fff',
    bg: '#C13584',
    url: 'https://instagram.com/sosamsony',
  },
  {
    heading: '@sosamsony',
    subtext: 'Follow on Twitter',
    icon: <AiOutlineTwitter size={36} />,
    color: '#fff',
    bg: '#1DA1F2',
    url: 'https://twitter.com/sosamsony',
  },
  {
    heading: '@sosamsony',
    subtext: 'Follow on Linkedin',
    icon: <AiFillLinkedin size={36} />,
    color: '#fff',
    bg: '#0077b5',
    url: 'https://www.linkedin.com/in/sosamsony/',
  },
  {
    heading: '@sosamsony',
    subtext: 'Follow on Facebook',
    icon: <AiOutlineFacebook size={36} />,
    color: '#fff',
    bg: '#4267B2',
    url: 'https://facebook.com/sosamsony',
  },
];

const AllLinks = () => {
  return (
    <div className="p-5 flex flex-col gap-5 justify-center items-center">
      <div className="rounded-full w-20 h-20 overflow-hidden shadow-bs1">
        <Image
          src="/samson.jpg"
          alt="logo"
          height={80}
          width={80}
          objectFit="cover"
          priority={true}
        />
      </div>
      {linkItems.map((item) => (
        <a
          href={item.url}
          key={uuidv4()}
          className="flex items-center justify-between max-w-[400px] w-full rounded-md shadow-bs3 hover:shadow-bs1 transition-all duration-300 px-4 py-2 select-none hover:opacity-90"
          target="_blank"
          rel="noreferrer"
          style={{
            background: item.bg,
            color: item.color,
          }}
        >
          <div className="flex items-center gap-3">
            {item.icon}
            <div className="">
              <span className="block font-semibold text-xl">
                {item.heading}
              </span>
              <span className="block font-light">{item.subtext}</span>
            </div>
          </div>
          <MdArrowForwardIos size={30} />
        </a>
      ))}
    </div>
  );
};

export default AllLinks;
