import React, {useEffect} from 'react';
import img from '../assets/img.jpg';
import { initThreeScene } from '../app.js';


const Home = () => {
  useEffect(() => {
    initThreeScene(); 
  }, []);
  return (
    <div className="relative w-screen h-screen bg-black text-white overflow-hidden">
      {/* Background Image */}
      <img
        src={img}
        alt="background"
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
        style={{ zIndex: 0 }}
      />
      <div className="relative z-10 flex flex-col h-full">
        {/* Navbar */}
        <div className="fixed top-0 left-0 w-full p-10 text-lg ">
          <ul className="flex justify-center">
            <li className="mx-4">Home</li>
            <li className="mx-4">About</li>
            <li className="mx-4">Projects</li>
            <li className="mx-4">Contact</li>
          </ul>
        </div>

        <div className="flex-grow flex items-center justify-center">
          <div id='container3d'></div>
        </div>
      </div>
    </div>
  );
};

export default Home;
