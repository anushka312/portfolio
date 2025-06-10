import React, { useEffect, useState } from 'react';
import img from '../assets/img.png';
import profile from '../assets/profile.jpg';
import c from '../assets/c.png';
import cpp from '../assets/cpp.svg';
import excel from '../assets/excel.png';
import express from '../assets/express.png';
import ganache from '../assets/ganache.png';
import huff from '../assets/huff.png';
import mongodb from '../assets/mongodb.png';
import node from '../assets/node.png';
import pgsql from '../assets/pgsql.png';
import python from '../assets/python.png';
import r from '../assets/R_logo.svg.png';
import react from '../assets/react.png';
import solidity from '../assets/solidity.png';
import tensorflow from '../assets/tensorflow.png';
import truffle from '../assets/truffle.png';
import linkedin from '../assets/linkedin.png';
import github from '../assets/github.png';
import cimg1 from '../assets/cimg1.png';
import cimg2 from '../assets/cimg2.png';
import secvoteV from '../assets/secvote.mp4';
import resqnetV from '../assets/resqnet.mp4';
import bg from '../assets/bg.jpg';
// import { initThreeScene } from '../app.js';

const Home = () => {
  const dialogues = [
    "Welcome to the Vault",
    "Beware!",
    "the vault is where the criminals live",
    "Move down to access subject file"
  ];
  const cards = [
    {
      id: '001',
      image: cimg1,
      title: 'SecVote',
      description: 'SecVote is our Automated Voter Verification Management System—a comprehensive digital platform designed to handle voter verification, crowd management, slot booking, and real-time tracking for polling booths. It replaces traditional manual processes with a secure, efficient, and scalable solution that ensures smooth operations on election day.',
      links: 'https://secvote.onrender.com/',
      video: { secvoteV }
    },
    {
      id: '002',
      image: cimg2,
      title: 'ResQNet',
      description: 'ResQNet is an AI-powered crisis response platform that detects and verifies emergencies in real time, connecting people to the right help instantly. By centralizing incident data, service coordination, and user support, ResQNet eliminates delays and confusion—delivering swift, location-based assistance when every second counts.',
      links: 'https://devfolio.co/projects/resqnet-84b2',
      video: { resqnetV }
    }
  ];

  const [currentDialogueIndex, setCurrentDialogueIndex] = useState(-1);
  const [cardIndex, setCardIndex] = useState(0);
  const nextCard = () => {
    setCardIndex((prev) => (prev + 1) % cards.length);
  };
  const prevCard = () => {
    setCardIndex((prev) => (prev - 1 + cards.length) % cards.length);
  };


  useEffect(() => {
    // initThreeScene();

    const startTimeout = setTimeout(() => {
      let index = 0;
      setCurrentDialogueIndex(index);

      const interval = setInterval(() => {
        index++;
        if (index < dialogues.length) {
          setCurrentDialogueIndex(index);
        } else {
          clearInterval(interval);
          setCurrentDialogueIndex(-1);
        }
      }, 3000);
    }, 4900);

    return () => clearTimeout(startTimeout);
  }, []);

  return (
    <div className='bg-black'>
      <div className="relative w-full h-screen bg-black text-white overflow-hidden bg-opacity-70">
        {/* Background Image */}
        <div className="relative w-full h-screen">
          {/* <img
            src={img}
            className="absolute inset-0 w-full h-full object-cover"
            style={{ zIndex: 0 }}
          /> */}
          <div
            className="absolute inset-0 bg-black"
            style={{ opacity: 0.3, zIndex: 1 }}
          />
        </div>
        <div className="fixed top-0 left-0 w-full p-10 text-xl z-30">
            <ul className="flex justify-center ">
              <li className="mx-4 ">Home</li>
              <li className="mx-4">About</li>
              <li className="mx-4">Projects</li>
              <li className="mx-4">Contact</li>
            </ul>
          </div>

        {/* Dialogue Text */}
        {currentDialogueIndex !== -1 && (
          <div className="absolute z-20 bottom-10 left-1/2 transform -translate-x-1/2 text-2xl text-yellow-400 italic">
            {dialogues[currentDialogueIndex]}
          </div>
        )}

        <div className="relative z-50 flex flex-col h-full">
         
          

          <div className="flex-grow flex items-center justify-center">
            {/* <div id='container3d'></div> */}
          </div>
        </div>
      </div>

      {/* Other Sections */}
      <div className="relative w-full h-screen bg-black text-white overflow-hidden" id='about'>
        <div className='flex h-full'>
          {/* <img
            src={bg}
            className="absolute w-full h-full object-cover"
            style={{ zIndex: 0}}
          /> */}
          <div className='w-1/3  h-full relative z-10 '></div>
          <div className='flex-1 flex items-center justify-center relative z-10 '>

            <div className='w-5/6 h-5/6 bg-gray-950 rounded-xl p-10 flex  shadow-[0_0_20px_rgba(255,0,0,0.7)]'>
              
              <div>
                
                <div className='aspect-[3/4] w-[250px] bg-white rounded-xl  shadow-[0_0_20px_rgba(0,0,255,0.7)] overflow-hidden '>
                  <img
                    src={profile}
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className='font-Oxanium text-green-500 text-xl pt-3'>Subject name : <p className='text-red-500 inline-block'>Anushka</p> </p>
                <p className='font-Oxanium text-green-500 text-xl pt-3'>Subject Age : <p className='text-red-500 inline-block'>19</p></p>
                <p className='font-Oxanium text-green-500 text-xl pt-3'>Subject Identification :
                  <ul className='pt-2 pl-3 text-red-500'>
                    <li>Web developer</li>
                    <li>Blockchain Developer</li>
                    <li>ML researcher</li>
                  </ul></p>

              </div>
              <div className='p-5 text-white text-2xl font-Oxanium'>
                Description of the subject:

                <div className='py-5 text-white text-xl font-Oxanium text-justify'>
                  Anushka is currently pursuing Computer Science at DTU (2nd year) and spends most of her time building modern frontends,
                  researching about machine learning, and exploring blockchain on the assembly level.
                </div>
                <div className='pb-3 text-red-600 text-xl font-Oxanium'>
                  Skillset:
                  <div className='grid grid-cols-5 gap-4 pt-4'>
                    <div className='flex flex-col items-center'>
                      <img src={c} alt="C" className='w-12 h-12' />
                    </div>
                    <div className='flex flex-col items-center'>
                      <img src={cpp} alt="C++" className='w-12 h-11' />
                    </div>
                    <div className='flex flex-col items-center'>
                      <img src={python} alt="Python" className='w-10 h-10' />
                    </div>
                    <div className='flex flex-col items-center'>
                      <img src={r} alt="R" className='w-12 h-10' />
                    </div>
                    <div className='flex flex-col items-center'>
                      <img src={react} alt="React" className='w-12 h-10' />
                    </div>
                    <div className='flex flex-col items-center'>
                      <img src={express} alt="Express" className='w-12 h-10' />
                    </div>
                    <div className='flex flex-col items-center'>
                      <img src={node} alt="Node.js" className='w-9 h-10' />
                    </div>
                    <div className='flex flex-col items-center'>
                      <img src={mongodb} alt="MongoDB" className='w-10 h-10' />
                    </div>
                    <div className='flex flex-col items-center'>
                      <img src={pgsql} alt="PostgreSQL" className='w-10 h-10' />
                    </div>
                    <div className='flex flex-col items-center'>
                      <img src={solidity} alt="Solidity" className='w-10 h-10' />
                    </div>
                    <div className='flex flex-col items-center'>
                      <img src={ganache} alt="Ganache" className='w-10 h-11' />
                    </div>
                    <div className='flex flex-col items-center'>
                      <img src={truffle} alt="Truffle" className='w-10 h-10' />
                    </div>
                    <div className='flex flex-col items-center'>
                      <img src={huff} alt="Huff" className='w-10 h-10' />
                    </div>
                    <div className='flex flex-col items-center'>
                      <img src={tensorflow} alt="TensorFlow" className='w-10 h-10' />
                    </div>
                    <div className='flex flex-col items-center'>
                      <img src={excel} alt="Excel" className='w-11 h-10' />
                    </div>
                  </div>

                </div>
                <div className='text-red-500 p-3 text-xl'>
                  Links:
                  <div className='grid grid-cols-2 gap-4 mt-2'>
                    <div className='flex flex-col items-center'>
                      <a href="https://www.linkedin.com/in/anushka-532862299/" target="_blank" rel="noopener noreferrer">
                        <img src={linkedin} alt="LinkedIn" className='w-10 h-10 hover:scale-110 transition-transform duration-200' />
                      </a>
                    </div>
                    <div className='flex flex-col items-center'>
                      <a href="https://github.com/anushka312" target="_blank" rel="noopener noreferrer">
                        <img src={github} alt="GitHub" className='w-10 h-10 hover:scale-110 transition-transform duration-200' />
                      </a>
                    </div>
                  </div>
                </div>

              </div>
            </div>


            {/* <h1 className='text-white text-6xl'>Anushka</h1>
            <p>Anushka is currently pursuing Computer Science at DTU (2nd year) and spends most of her time building on the web, exploring machine learning, or reading up on blockchain use-cases. She’s someone who learns best by doing, and loves working on projects that push her to try new tools, break things, and figure them out.</p> */}
          </div>
        </div>
      </div>


      <div className="relative w-full h-screen bg-black text-white overflow-hidden" id='projects'>
        <div className="flex flex-col items-center pt- rounded-xl">
          <h1 className="text-5xl p-14 pb-18">CRIMES REPORTED</h1>

          <div className="w-4/5 h-[70vh] bg-blue-950 rounded-lg shadow-lg flex text-white">
            <button
              onClick={prevCard}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 text-white text-4xl px-4 z-10 hover:scale-110 transition-transform duration-200"
            >
              &#8592;
            </button>
            <div className='w-2/5 h-3/6 bg-black m-5'>
              <img
                src={cards[cardIndex].image}
                className="w-full h-full object-cover" />
              <div className='text-2xl font-Oxanium p-5'>
                <p className='pb-3'>Crime Commited: <span className='text-red-500'>{cards[cardIndex].title}</span></p>
                <p className='pb-3'>Crime ID: <span className='text-green-500'>{cards[cardIndex].id}</span></p>
                <p>Associated Links: <span className='text-red-500'><a href={cards[cardIndex].links} target="_blank" rel="noopener noreferrer" className='text-blue-500 underline'>Crime scene</a></span></p>
              </div>
            </div>
            <div className='font-Oxanium p-5 w-3/5'>
              <p className='text-3xl pb-5'>Description of the crime:</p>
              <p className='text-xl text-justify'>{cards[cardIndex].description}</p>
              <div className='pt-10 flex'>
                <p className='text-2xl text-red-500 w-64 '>Watch the crime unfold here:</p>
                <video controls className='w-2/3 h-60 rounded-md mt-2'>
                  <source src={cards[cardIndex].video} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>


            </div>
            <button
              onClick={nextCard}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 text-white text-4xl px-4 z-10 hover:scale-110 transition-transform duration-200"
            >
              &#8594;
            </button>
          </div>
        </div>
      </div>

      <div className="relative w-full h-screen bg-black text-white overflow-hidden" id='contact'>
        <div className='flex flex-col items-center justify-center h-full text-white'>
          <div className='text-white text-3xl mb-2'>
            Contact the subject at:
          </div>
          <div className='text-red-600 text-2xl font-Oxanium'>
            anushka031205@gmail.com
          </div>
        </div>
      </div>

    </div>
  );
};

export default Home;
