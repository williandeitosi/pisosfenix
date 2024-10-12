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

const MainSection: React.FC = () => (
  <main className="container mx-auto flex flex-col items-center justify-between px-4 py-16 md:flex-row">
    <div className="mb-8 max-w-2xl text-center md:mb-0 md:text-left">
      <h1 className="mb-4 text-4xl font-bold text-white">Aluguel de pisos plásticos</h1>
      <p className="mb-6 text-xl text-green-400">Somos a base do entretenimento.</p>
      <p className="mb-8 text-gray-300">
        Desenvolvemos, fabricamos e alugamos soluções sustentáveis em pisos plásticos modulares para eventos.
        Nossa expertise garante a melhor experiência para o seu público.
      </p>
      <button className="rounded-md bg-green-700 px-6 py-3 text-lg font-semibold text-white hover:bg-[#006400]">
        Faça um orçamento
      </button>
    </div>
    <div className="relative h-64 w-full md:h-96 md:w-1/2">
      <img
        src={mPhoto}
        alt="Pisos plásticos empilhados"
        className="h-full w-full object-contain"
      />
    </div>
  </main>
);

const ImageSection: React.FC = () => {
  const images = [img1, img2, img3];
  return (
    <section className="container mx-auto mt-16 grid grid-cols-1 gap-8 px-4 md:grid-cols-3">
      {images.map((image, index) => (
        <div key={index} className="relative h-48 overflow-hidden rounded-lg">
          <img
            src={image}
            alt={`exemplo de uso ${index + 1}`}
            className="h-full w-full object-cover"
          />
        </div>
      ))}
    </section>
  );
};

interface FloorType {
  name: string;
  image: string;
  description: string;
}

const FloorTypeSection: React.FC = () => {
  const [selectedFloor, setSelectedFloor] = useState<FloorType | null>(null);

  const floorTypes: FloorType[] = [
    {
      name: "Piso deck",
      image: pisoDeck,
      description: "Nosso piso deck é perfeito para áreas externas, oferecendo durabilidade e estética. Feito de materiais resistentes às intempéries, é ideal para eventos ao ar livre, piscinas e terraços."
    },
    {
      name: "Piso Madeira",
      image: pisoMadeira,
      description: "O piso madeira combina a beleza natural da madeira com a praticidade do plástico. É excelente para eventos internos, proporcionando um ambiente acolhedor e sofisticado, sem a necessidade de manutenção intensiva."
    }
  ];

  const openModal = (floor: FloorType) => {
    setSelectedFloor(floor);
  };

  const closeModal = () => {
    setSelectedFloor(null);
  };

  return (
    <section className="container mx-auto mt-16 px-4">
      <h2 className="mb-8 text-center text-3xl font-bold text-white">Nossos Tipos de Piso</h2>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        {floorTypes.map((floor) => (
          <div
            key={floor.name}
            className="cursor-pointer overflow-hidden rounded-lg bg-gray-700 transition-transform hover:scale-105"
            onClick={() => openModal(floor)}
          >
            <img
              src={floor.image}
              alt={floor.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold text-white">{floor.name}</h3>
              <p className="mt-2 text-gray-300">Clique para saber mais</p>
            </div>
          </div>
        ))}
      </div>
      {selectedFloor && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg p-6 max-w-md">
            <h3 className="text-2xl font-bold mb-2">{selectedFloor.name}</h3>
            <p className="text-gray-700 mb-4">{selectedFloor.description}</p>
            <img
              src={selectedFloor.image}
              alt={selectedFloor.name}
              className="w-full rounded-lg mb-4"
            />
            <button
              onClick={closeModal}
              className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
            >
              Fechar
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

const StructureSection: React.FC = () => (
  <section className="container mx-auto flex flex-col-reverse items-center justify-between px-4 py-16 md:flex-row">
    <div className="relative h-64 w-full md:h-96 md:w-1/2 mb-8 md:mb-0">
      <img
        src={estruturaImage}
        alt="Nossa estrutura"
        className="h-full w-full object-cover rounded-lg"
      />
    </div>
    <div className="max-w-2xl text-center md:text-left md:ml-8">
      <h2 className="mb-4 text-4xl font-bold text-white">Nossa estrutura</h2>
      <p className="mb-6 text-xl text-green-400">Solidez e qualidade em cada peça.</p>
      <p className="mb-8 text-gray-300">
        Nossa estrutura é projetada para oferecer máxima estabilidade e durabilidade. 
        Utilizamos materiais de alta qualidade e tecnologias avançadas para garantir 
        que nossos pisos atendam às mais exigentes demandas de eventos e instalações.
      </p>
      <button className="rounded-md bg-green-700 px-6 py-3 text-lg font-semibold text-white hover:bg-[#006400]">
        Faça um orçamento
      </button>
    </div>
  </section>
);

const WhatsAppButton: React.FC = () => (
  <div className="fixed bottom-4 right-4">
    <button className="rounded-full bg-green-500 p-3 text-white hover:bg-green-600">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
      <span className="sr-only">Contato via WhatsApp</span>
    </button>
  </div>
);

const CriadeckPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-800">
      <Header />
      <MainSection />
      <ImageSection />
      <FloorTypeSection />
      <StructureSection />
      <WhatsAppButton />
    </div>
  );
};

export default CriadeckPage;