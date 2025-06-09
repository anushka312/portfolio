import React, { useEffect, useState } from 'react';
import img from '../assets/img.png';
import { initThreeScene } from '../app.js';

const Home = () => {
  const dialogues = [
    "Welcome to the Vault",
    "I'm Michi, your guide",
    "Every skill gained is an asset",
    "Scroll down to find 'hers'"
  ];

  const [currentDialogueIndex, setCurrentDialogueIndex] = useState(-1);

  useEffect(() => {
    initThreeScene();

    const startTimeout = setTimeout(() => {
      let index = 0;
      setCurrentDialogueIndex(index);

      const interval = setInterval(() => {
        index++;
        if (index < dialogues.length) {
          setCurrentDialogueIndex(index);
        } else {
          clearInterval(interval);
          setCurrentDialogueIndex(-1); // Hide text after last dialogue
        }
      }, 3000);
    }, 4900);

    return () => clearTimeout(startTimeout);
  }, []);

  return (
    <div>
      <div className="relative w-full h-screen bg-black text-white overflow-hidden bg-opacity-70">
        {/* Background Image */}
        <div className="relative w-full h-screen">
          <img
            src={img}
            className="absolute inset-0 w-full h-full object-cover"
            style={{ zIndex: 0 }}
          />
          <div
            className="absolute inset-0 bg-black"
            style={{ opacity: 0.3, zIndex: 1 }}
          />
        </div>


        {/* Dialogue Text */}
        {currentDialogueIndex !== -1 && (
          <div className="absolute z-20 bottom-10 left-1/2 transform -translate-x-1/2 text-2xl text-yellow-400 italic">
            {dialogues[currentDialogueIndex]}
          </div>
        )}

        <div className="relative z-10 flex flex-col h-full">
          {/* Navbar */}
          <div className="fixed top-0 left-0 w-full p-10 text-xl ">
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

      {/* Other Sections */}
      <div className="relative w-full h-screen bg-black text-white overflow-hidden" id='about'></div>
      <div className="relative w-full h-screen bg-black text-white overflow-hidden" id='projects'></div>
      <div className="relative w-full h-screen bg-black text-white overflow-hidden" id='contact'></div>
    </div>
  );
};

export default Home;
