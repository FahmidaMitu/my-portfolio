import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8 text-center">
      <p className="text-lg font-semibold mb-2">Developed by Fahmida Sultana</p>
      <div className="flex justify-center space-x-6 text-sm text-gray-400 mb-4">
        <a href="https://github.com/FahmidaMitu" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition">GitHub</a>
        <a href="https://www.linkedin.com/in/fahmida-sultana-058994253/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition">LinkedIn</a>
        <a href="https://www.facebook.com/Fahmida.Sultana.Mitu05" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition">Facebook</a>
      </div>
      <p className="text-xs text-gray-500">© 2026 All rights reserved.</p>
    </footer>
  );
};

export default Footer;