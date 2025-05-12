import React from 'react';
import Typewriter from 'typewriter-effect';

const Home = () => {
  return (
    <div className="bg-gray-100 bg-cover w-screen h-screen font-visby flex">
      {/* Navbar section */}
      <div className="absolute top-0 left-0 w-full p-10 flex items-center z-10">

        <div className="text-xl font-bold">Logo</div>

        {/* Center: Nav */}
        <div className="absolute left-1/2 transform -translate-x-1/2">
          <div className="border-gray-700 rounded-3xl p-2 px-4 border-2 border-solid">
            <ul className="flex space-x-8 text-gray-600">
              <li className="cursor-pointer hover:text-black">About</li>
              <li className="cursor-pointer hover:text-black">Projects</li>
              <li className="cursor-pointer hover:text-black">Contact</li>
            </ul>
          </div>
        </div>

        {/* Right: Socials */}
        <div className="flex-1 flex justify-end">
          <div className="flex justify-center items-center border-gray-700 rounded-3xl p-2 px-4 border-2 border-solid">
            <ul className="flex space-x-8 text-gray-600">
              <li className="cursor-pointer hover:text-black">LinkedIn</li>
              <li className="cursor-pointer hover:text-black">GitHub</li>
            </ul>
          </div>
        </div>
      </div>


      {/* Main Content Section */}
      <div>
        {/* sliding */}
        <div className='mx-10 my-4 mt-52'>
          <div className='text-[120px] font-bold '>
            anushka
          </div>
          <div className='text-4xl'>
            <div className='slide'>
              <div><div>data analyst</div></div>
              <div><div>blockchain developer</div></div>
              <div><div>full-stack developer</div></div>

            </div>
          </div>
          {/* type writer */}
          {/* <div className='text-4xl'>
            <Typewriter
              options={{
                loop: true,
                delay: 75,
                html: true,
              }}
              onInit={(typewriter) => {
                typewriter
                  .typeString("I'm a developer")
                  .pauseFor(1200)
                  .deleteAll()
                  .typeString("a student too")
                  .pauseFor(800)
                  .deleteAll()
                  .typeString("and I love designing ;)")
                  .pauseFor(800)
                  .start();
              }}
            />
          </div> */}

        </div>

      </div>
    </div>
  );
};

export default Home;
