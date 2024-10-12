import React, { useState } from 'react';
import mLogo from "../assets/images/logo.png";
import mPhoto from "../assets/images/mainphoto.jpeg";
import img1 from "../assets/images/1.jpeg";
import img2 from "../assets/images/2.jpeg";
import img3 from "../assets/images/3.jpeg";
import pisoDeck from "../assets/images/piso-deck.jpeg";
import pisoMadeira from "../assets/images/piso-madeira.jpeg";
import estruturaImage from "../assets/images/estrutura.jpeg"; 


const Header: React.FC = () => (
  <header className="container mx-auto flex items-center justify-between p-4">
    <img
      src={mLogo}
      alt="Criadeck Logo"
      className="h-10 w-auto brightness-0 invert"
    />
    <nav className="hidden space-x-4 md:flex">
      {["Secao 1", "Secao 2", "Secao 3", "Secao 4"].map((item) => (
        <a
          key={item}
          href={`#${item.toLowerCase()}`}
          className="font-semibold text-gray-300 hover:text-green-600"
        >
          {item}
        </a>
      ))}
    </nav>
    <div className="flex items-center space-x-4">
      <button className="rounded-md border border-green-500 px-4 py-2 text-green-500 hover:bg-green-500 hover:text-white">
        Contato
      </button>
      <button className="md:hidden text-white">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
        <span className="sr-only">Menu</span>
      </button>
    </div>
  </header>
);


const CriadeckPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-800">
      <Header />

    </div>
  );
};

export default CriadeckPage;