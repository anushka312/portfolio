import React from 'react';
import Typewriter from 'typewriter-effect';

const Home = () => {
  return (
    <div className="bg-gray-100 bg-cover w-screen h-screen font-visby flex">
      {/* Navbar section */}
      <div className="absolute top-0 left-0 w-full p-10 flex justify-between items-center z-10">

        {/* Left side: Logo + Nav */}
        <div className="flex items-center space-x-10">
          <div className="text-xl font-bold">Logo</div>
          <ul className="flex space-x-8 text-gray-600">
            <li className="cursor-pointer hover:text-black">About</li>
            <li className="cursor-pointer hover:text-black">Projects</li>
            <li className="cursor-pointer hover:text-black">Contact</li>
          </ul>
        </div>

        {/* Right side: Socials */}
        <ul className="flex space-x-8 mr-10 text-gray-600">
          <li className="cursor-pointer hover:text-black">LinkedIn</li>
          <li className="cursor-pointer hover:text-black">GitHub</li>
        </ul>

      </div>

      {/* Main Content Section */}
      <div>
        {/* type writer */}
        <div className='text-[120px] font-bold m-10 mt-52'>
          <Typewriter
            options={{
              loop: true,
              delay: 75,
              html: true,
            }}
            onInit={(typewriter) => {
              typewriter
                .pauseFor(1000)
                .typeString("Anushka")
                .pauseFor(1000)
                .deleteAll()
                .typeString('Student')
                .pauseFor(1000)
                .deleteAll()
                .typeString('Developer')
                .pauseFor(1000)
                .deleteAll()
                .start();
            }}
          />
        </div>
        {/* marquee */}
        
      </div>
    </div>
  );
};

export default Home;
