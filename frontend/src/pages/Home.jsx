import React, { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import DecryptEffect from './DecryptEffect.jsx';
import { useTypewriter, Cursor } from 'react-simple-typewriter';
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
import { initThreeScene } from '../app.js';

const Home = () => {
  const dialogues = [
    "Welcome to the Vault",
    "Beware!",
    "the vault is where the criminals live",
    "Move down to access subject file"
  ];
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });
  const { ref: ref1, inView: inView1 } = useInView({ triggerOnce: true, threshold: 0.5 });
  const { ref: ref2, inView: inView2 } = useInView({ triggerOnce: true, threshold: 0.5 });

  const { ref: ref3, inView: inView3 } = useInView({ triggerOnce: true, threshold: 0.5 });

  const cards = [
    {
      id: '001',
      image: cimg1,
      title: 'SecVote',
      description: 'SecVote is our Automated Voter Verification Management System—a comprehensive digital platform designed to handle voter verification, crowd management, slot booking, and real-time tracking for polling booths. It replaces traditional manual processes with a secure, efficient, and scalable solution that ensures smooth operations on election day.',
      links: 'https://secvote.onrender.com/',
      video: secvoteV
    },
    {
      id: '002',
      image: cimg2,
      title: 'ResQNet',
      description: 'ResQNet is an AI-powered crisis response platform that detects and verifies emergencies in real time, connecting people to the right help instantly. By centralizing incident data, service coordination, and user support, ResQNet eliminates delays and confusion—delivering swift, location-based assistance when every second counts.',
      links: 'https://devfolio.co/projects/resqnet-84b2',
      video: resqnetV
    }
  ];

  const [currentDialogueIndex, setCurrentDialogueIndex] = useState(-1);
  const [cardIndex, setCardIndex] = useState(0);
  const [loading, setLoading] = useState(true);

  const [text1] = useTypewriter({
    words: [
      "Preparing override interface...",
      "Decrypting files...",
      "Loading subject : 'Anushka' from the Vault..."
    ],
    loop: 1,
    typeSpeed: 60,
    deleteSpeed: 0,
    delaySpeed: 90,
  });
  const [text2] = useTypewriter({
    words: [
      "anushka031205@gmail.com"
    ],
    loop: true,
    typeSpeed: 70,
    deleteSpeed: 30,
    delaySpeed: 120,
  });

  const [text3] = useTypewriter({
    words: [
      "Watch the crime unfold here:"
    ],
    loop: true,
    typeSpeed: 75,
    deleteSpeed: 0,
    delaySpeed: 100,
  });

  const nextCard = () => {
    setCardIndex((prev) => (prev + 1) % cards.length);
  };
  const prevCard = () => {
    setCardIndex((prev) => (prev - 1 + cards.length) % cards.length);
  };


  useEffect(() => {
    // initThreeScene();

    const timer = setTimeout(() => {
      setLoading(false);
    }, 10000);

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
    }, 12500);

    return () => {
      clearTimeout(startTimeout);
      clearTimeout(timer);
    };
  }, []);

  useEffect(() => {
    if (!loading) {
      const container = document.getElementById('container3d');
      if (container) {
        initThreeScene();
      }
    }
  }, [loading]);

  if (loading) {
    return (
      <div
        className={`fixed inset-0 z-50 bg-black flex text-xl items-center text-green-700 justify-center flex-col transition-transform duration-1000 ease-in-out ${loading ? 'translate-y-0' : '-translate-y-full'
          }`}
      >
        <span>
          <Cursor cursorStyle="> " />
          {text1}
          <Cursor cursorStyle="|" />
        </span>
      </div>



    )
  }
  return (
    <div className='bg-black'>

      <div className="section relative w-full h-screen bg-black text-white overflow-hidden bg-opacity-70" id='home'>
        {/* Background Image */}
        <div className="relative w-full h-screen">
          <img
            src={img}
            className="absolute inset-0 w-full h-full object-cover"
            style={{ zIndex: 0 }}
          />

        </div>
        <div className="fixed top-0 left-0 w-full p-5 text-xl z-30 backdrop-filter backdrop-blur-sm bg-opacity-65 ">
          <div className='flex justify-left mx-4 text-3xl mt-2'>
            Anushka
          </div>
          <ul className="flex justify-center ">
            <li className="mx-4">
              <a href="#home" className="hover:underline">Home</a>
            </li>
            <li className="mx-4">
              <a href="#about" className="hover:underline">About</a>
            </li>
            <li className="mx-4">
              <a href="#projects" className="hover:underline">Projects</a>
            </li>
            <li className="mx-4">
              <a href="#contact" className="hover:underline">Contact</a>
            </li>
          </ul>

        </div>

        {/* Dialogue Text */}
        {
          currentDialogueIndex !== -1 && (
            <div className="absolute z-20 bottom-10 left-1/2 transform -translate-x-1/2 text-2xl text-yellow-400 italic">
              {dialogues[currentDialogueIndex]}
            </div>
          )
        }

        <div className="relative z-50 flex flex-col h-full">



          <div className="flex-grow flex items-center justify-center">
            <div id='container3d'></div>
          </div>
        </div>
      </div >

      {/* Other Sections */}
      <div ref={ref3} className="section relative w-full min-h-screen bg-black text-white overflow-hidden" id="about">
        <div className="flex flex-col md:flex-row h-full">


          <div className="w-full md:w-1/3 h-auto md:h-full md:fixed z-10 bg-black"></div>

          {/* Main content */}
          <div className="flex-1 flex items-center justify-center relative z-10 pt-10 md:pt-0 md:ml-[33.333%] px-4">

            <div className="w-full max-w-6xl mt-12 bg-gray-700 backdrop-blur-lg bg-opacity-30 rounded-xl p-5 md:p-10 shadow-[0_0_20px_rgba(255,0,0,0.7)] flex flex-col md:flex-row gap-8">

              {/* Profile Card */}
              <div className="flex flex-col items-center md:items-start">
                <div className="aspect-[3/4] w-[180px] md:w-[250px] bg-white rounded-xl shadow-[0_0_20px_rgba(0,0,255,0.7)] overflow-hidden">
                  <img src={profile} alt="Profile" className="w-full h-full object-cover" />
                </div>

                <p className="font-Oxanium text-green-500 text-lg md:text-xl pt-3">
                  Subject name:
                  <span className="text-red-500 pl-2">
                    <DecryptEffect text="Anushka" trigger={inView3} />
                  </span>
                </p>

                <p className="font-Oxanium text-green-500 text-lg md:text-xl pt-3">
                  Subject Age:
                  <span className="text-red-500 pl-2">
                    <DecryptEffect text="19" trigger={inView3} />
                  </span>
                </p>

                <div className="font-Oxanium text-green-500 text-lg md:text-xl pt-3">
                  Subject Identification:
                  <ul className="pt-2 pl-4 text-red-500 list-disc">
                    <li><DecryptEffect text="Web developer" trigger={inView3} /></li>
                    <li><DecryptEffect text="Blockchain Developer" trigger={inView3} /></li>
                    <li><DecryptEffect text="ML researcher" trigger={inView3} /></li>
                  </ul>
                </div>
              </div>

              {/* Description & Skills */}
              <div className="text-white text-base md:text-xl font-Oxanium text-justify">
                <h2 className="text-2xl md:text-3xl mb-4">Description of the subject:</h2>
                <p>
                  Anushka is currently pursuing Computer Science at DTU (2nd year) and spends most of her time building modern frontends,
                  researching about machine learning, and exploring blockchain. Additionally, she is also pursuing actuarial science, and progressing
                  in the field of data analytics.
                </p>

                <div className="mt-6 text-red-600">
                  <h3 className="text-xl md:text-2xl mb-2">Skillset:</h3>
                  <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-4 pt-2">
                    {[c, cpp, python, r, react, express, node, mongodb, pgsql, solidity, ganache, truffle, huff, tensorflow, excel].map((imgSrc, i) => (
                      <div key={i} className="flex flex-col items-center">
                        <img src={imgSrc} className="w-10 h-10 hover:scale-110 transition-transform duration-100 ease-in-out" />
                      </div>
                    ))}
                  </div>
                </div>

                {/* Links */}
                <div className="text-red-500 mt-6">
                  <h3 className="text-xl mb-2">Links:</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <a href="https://www.linkedin.com/in/anushka-532862299/" target="_blank" rel="noopener noreferrer" className="flex justify-center">
                      <img src={linkedin} alt="LinkedIn" className="w-10 h-10 hover:scale-110 transition-transform duration-200" />
                    </a>
                    <a href="https://github.com/anushka312" target="_blank" rel="noopener noreferrer" className="flex justify-center">
                      <img src={github} alt="GitHub" className="w-10 h-10 hover:scale-110 transition-transform duration-200" />
                    </a>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="section w-full min-h-screen bg-black text-white overflow-hidden" id="projects">
        <div className="flex flex-col items-center rounded-xl">
          <h1 className="text-3xl sm:text-5xl p-6 sm:p-14 pb-6">CRIMES REPORTED</h1>

          <div className="w-11/12 max-w-6xl bg-blue-950 rounded-lg shadow-lg flex flex-col sm:flex-row text-white relative">

            {/* Left Arrow */}
            <button
              onClick={prevCard}
              className="absolute top-1/2 left-2 -translate-y-1/2 z-20 bg-black bg-opacity-60 rounded-full text-3xl px-3 hover:scale-110 transition-transform duration-200"
            >
              &#8592;
            </button>

            {/* Left Panel */}
            <div className="w-full sm:w-2/5 p-4 flex flex-col">
              <div className="w-full aspect-[4/3] overflow-hidden rounded-md">
                <img
                  src={cards[cardIndex].image}
                  className="w-full h-full object-cover rounded-md"
                  alt="Crime scene"
                />
              </div>
              <div className="text-base sm:text-lg font-Oxanium mt-4">
                <p className="pb-2">
                  Crime Commited: <span className="text-red-500">{cards[cardIndex].title}</span>
                </p>
                <p className="pb-2">
                  Crime ID: <span className="text-green-500">{cards[cardIndex].id}</span>
                </p>
                <p>
                  Associated Links:{' '}
                  <span className="text-red-500">
                    <a
                      href={cards[cardIndex].links}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-500 underline"
                    >
                      Crime scene
                    </a>
                  </span>
                </p>
              </div>
            </div>

            {/* Right Panel */}
            <div className="w-full sm:w-3/5 p-4 font-Oxanium flex flex-col justify-between">
              {/* Right Arrow */}
              <button
                onClick={nextCard}
                className="absolute top-1/2 right-2 -translate-y-1/2 z-20 bg-black bg-opacity-60 rounded-full text-3xl px-3 hover:scale-110 transition-transform duration-200"
              >
                &#8594;
              </button>

              <p className="text-xl sm:text-3xl pb-3">Description of the crime:</p>
              <p className="text-sm sm:text-base md:text-lg text-justify mb-4">
                {cards[cardIndex].description}
              </p>

              <div className="flex flex-col sm:flex-row gap-4 ">
                <p
                  className="text-red-500 text-base sm:text-xl text-center sm:text-left w-full sm:w-1/3"
                  ref={ref2}
                >
                  {inView2 && <span>{text3}</span>}
                </p>

                <video
                  key={cards[cardIndex].video}
                  controls
                  autoPlay
                  muted
                  loop
                  className="w-full sm:w-2/3 h-48 sm:h-60 rounded-md"
                >
                  <source src={cards[cardIndex].video} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          </div>
        </div>
      </div>



      <div className="section relative w-full h-screen bg-black text-white overflow-hidden" id='contact'>
        <div className='flex flex-col items-center justify-center h-full text-white'>
          <div className='text-white text-3xl mb-2'>
            Contact the subject at:
          </div>
          <div className='text-red-600 text-2xl font-Oxanium' ref={ref1}>
            {inView1 && (
              <span>{text2}<Cursor cursorStyle='|' /></span>
            )}

          </div>
        </div>
      </div>

    </div >
  );
};


export default Home;