import React from 'react';

const Hero = () => {
  return (
    <section id="home" className="pt-32 pb-20 bg-gray-800 text-white text-center px-6">
      <div className="max-w-3xl mx-auto flex flex-col items-center">
        <img 
          src="/Fahmida.JPG" 
          alt="Profile" 
          className="w-32 h-32 rounded-full object-cover border-4 border-blue-500 shadow-xl mb-6"
        />
        
        <h1 className="text-3xl md:text-4xl font-semibold mb-2 text-white">
          Hello, I'm Fahmida Sultana
        </h1>
        
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-blue-400">
          Frontend Developer
        </h2>

        <p className="text-gray-300 text-base md:text-lg mb-8 max-w-xl leading-relaxed">
          Passionate Computer Science graduate building interactive and responsive web applications using React, Python, and modern technologies.
        </p>

        <div className="flex gap-4">
          <a href="#projects" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium shadow-lg transition">
            View Projects
          </a>
          <a href="/resume.pdf" download="Resume.pdf" className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-medium shadow-lg transition">
            Download CV
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;