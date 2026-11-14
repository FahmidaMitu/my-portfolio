import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 px-6 bg-white text-gray-800 max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-8">About Me</h2>
      <div className="bg-gray-50 p-8 rounded-2xl shadow-md border border-gray-100 space-y-6">
        <p className="text-gray-600 leading-relaxed text-center md:text-left">
          I am a dedicated Computer Science and Engineering graduate with strong technical capabilities in full-stack web development. I love turning complex problems into clean, intuitive, and high-performing digital experiences.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
          <div className="p-5 bg-white rounded-xl shadow-sm border border-gray-100 space-y-3">
            <h3 className="font-semibold text-blue-600 text-lg border-b pb-2">Background & Goals</h3>
            <div>
              <span className="font-medium text-gray-700">Education:</span>
              <p className="text-sm text-gray-600">B.Sc. in Computer Science and Engineering</p>
            </div>
            <div>
              <span className="font-medium text-gray-700">Career Goals:</span>
              <p className="text-sm text-gray-600">To build scalable web systems and grow as a professional Software Engineer.</p>
            </div>
          </div>

          <div className="p-5 bg-white rounded-xl shadow-sm border border-gray-100 space-y-3">
            <h3 className="font-semibold text-blue-600 text-lg border-b pb-2">Profile Information</h3>
            <div className="grid grid-cols-2 gap-2 text-sm">
              <div>
                <span className="font-medium text-gray-700 block">Name: Fahmida Sultana</span>
                <span className="text-gray-600">Frontend Developer</span>
              </div>
              <div>
                <span className="font-medium text-gray-700 block">Email:</span>
                <span className="text-gray-600">fahmidamitu57@gmail.com</span>
              </div>
              <div>
                <span className="font-medium text-gray-700 block">Location:</span>
                <span className="text-gray-600">Bangladesh</span>
              </div>
              <div>
                <span className="font-medium text-gray-700 block">Availability:</span>
                <span className="text-gray-600">Freelance / Full-time</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;