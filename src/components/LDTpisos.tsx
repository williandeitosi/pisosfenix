import { motion, useInView } from "framer-motion";
import React, { useState } from "react";
import img1 from "../assets/images/1.jpeg";
import img2 from "../assets/images/2.jpeg";
import img3 from "../assets/images/3.jpeg";
import img4 from "../assets/images/4.jpeg";
import img6 from "../assets/images/5.jpeg";
import img7 from "../assets/images/6.jpeg";
import {
  default as estruturaImage,
  default as img8,
} from "../assets/images/7.jpeg";
import img9 from "../assets/images/8.jpeg";
import deck from "../assets/images/deck-capa.jpg";
import mLogo from "../assets/images/logo.png";
import mPhoto from "../assets/images/mainphoto.jpeg";
import img5 from "../assets/images/novo-deck.jpg";
import whatspp from "../assets/images/whatsapp.png";

import logo2m from "../assets/clientes/2m.jpeg";
import logoAfinal from "../assets/clientes/afinal.jpeg";
import logoCenaria from "../assets/clientes/cenaria.png";
import logoDeep from "../assets/clientes/deep.png";
import logoMaxxy from "../assets/clientes/maxxy.png";
import logoProloja from "../assets/clientes/prolojacenografia_logo.jpeg";
import logoVertical from "../assets/clientes/vertical.png";

interface StructureType {
  name: string;
  image: string;
  title: string;
  description: string;
}

interface AnimatedSectionProps {
  children: React.ReactNode;
}

const AnimatedSection: React.FC<AnimatedSectionProps> = ({ children }) => {
  const ref = React.useRef(null);
  const inView = useInView(ref, {
    once: true,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 1 }}
    >
      {children}
    </motion.div>
  );
};

const WhatsAppButton: React.FC = () => (
  <a
    href="https://wa.me/5511991430995?text=Ola,%20gostaria%20de%20fazer%20um%20or%C3%A7amento%20com%20voc%C3%AAs"
    target="_blank"
    rel="noopener noreferrer"
    className="block fixed bottom-4 right-4 z-50 hover:scale-110 transition-transform duration-200"
  >
    <img src={whatspp} alt="Botão Whatsapp" width={80} height={80} />
  </a>
);

function Header() {
  return (
    <header className="md:mx-20 flex items-center justify-between p-4">
      <div className="flex flex-col md:flex-row gap-2 items-center">
        <img
          src={mLogo}
          alt="Pisos Fênix"
          className="h-8 md:h-10 w-auto brightness-0 invert"
        />
        <div className="flex flex-col">
          <h1 className=" font-semibold text-gray-300 text-xl mx-auto md:mx-0 ">
            Pisos Fênix
          </h1>
          <p className=" font-semibold text-gray-300 text-xs md:text-sm">
            LDT Locação de Pisos e Palcos Ltda
          </p>
        </div>
      </div>
      <div className="flex items-center space-x-4">
        <p className="rounded-md px-4 py-2 text-green-500 md:text-xl text-sm">
          (11)99143-0995
        </p>
      </div>
    </header>
  );
}

const MainSection: React.FC = () => (
  <AnimatedSection>
    <main className="md:mx-20 flex flex-col items-center justify-between px-4 py-16 md:flex-row">
      <div className="mb-8 max-w-2xl text-center md:mb-0 md:text-left">
        <h1 className="mb-4 text-4xl font-bold text-white">
          Aluguel de pisos para eventos
        </h1>
        <p className="mb-6 text-xl text-green-400">
          Somos a base do entretenimento.
        </p>
        <p className="mb-8 text-gray-300">
          Nossa empresa esta no mercado a mais de 20 anos, fabricando e locando
          pisos para seu evento. Trabalhamos com tablados de madeira, pisos deck
          e pisos de ferro com regulagem de altura, atendemos todos os tipos de
          eventos.
        </p>
        <a
          target="_blank"
          href="https://wa.me/5511991430995?text=Ola,%20gostaria%20de%20fazer%20um%20or%C3%A7amento%20com%20voc%C3%AAs"
          className="rounded-md bg-green-700 px-6 py-3 text-lg font-semibold text-white hover:bg-[#006400] "
        >
          Faça um orçamento
        </a>
      </div>
      <div className="relative h-64 w-full md:h-96 md:w-2/5 border-4 border-green-500 rounded-xl border-opacity-20 hover:scale-105 duration-300 ">
        <img
          src={mPhoto}
          alt="Pisos plásticos empilhados"
          className="h-full w-full object-cover rounded-lg "
          loading="lazy"
        />
      </div>
    </main>
  </AnimatedSection>
);

const ImageSection: React.FC = () => {
  const images = [img2, img5, img1, img3, img4, img6, img7, img8, img9];
  return (
    <AnimatedSection>
      <div>
        <h2 className="mb-8 text-center text-3xl font-bold text-white">
          Portfólio
        </h2>
        <section className=" md:mx-20 mt-16 grid grid-cols-1 gap-8 px-4 md:grid-cols-3 ">
          {images.map((image, index) => (
            <div
              key={index}
              className="relative h-48 overflow-hidden rounded-lg transition-transform hover:scale-105"
            >
              <img
                src={image}
                alt={`exemplo de uso ${index + 1}`}
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </div>
          ))}
        </section>
      </div>
    </AnimatedSection>
  );
};

const StructureSection: React.FC = () => {
  const structures: StructureType[] = [
    {
      name: "DECK",
      image: deck,
      title: "Estrutura de Deck",
      description:
        "Nosso piso deck é composto com a base em estrutura metalica, pés ajustáveis para nivelamento da area, e madeira tratada resistente ao tempo. Perfeito para eventos externos e internos. Suportando pesos, ideal para festivais, feiras, exposições e eventos corporativos.",
    },
    {
      name: "FERRO",
      image: estruturaImage,
      title: "Estrutura de Ferro",
      description: `Nosso piso de ferro é projetado para garantir agilidade, alinhamento e nivelamento para a montagem do evento. Ele é composto por travessas de metal e um sistema de regulagem de altura, por meio de um pé ajustável (macaquinho). Além disso, utilizamos uma placa de madeira de 1x1 com 25mm de espessura para reforçar ainda mais a estrutura, sendo possível adicionar uma chapa de madeira de 2,20 x 1,10, parafusada em cima destas placas, proporcionando maior resistência e estabilidade ao piso, onde receberá o acabamento final (forração em carpete, vinílico ou de sua preferência). Também trabalhamos com tablados de madeira, módulos inteiros com diversas medidas. Outra opção para o seu evento.`,
    },
  ];

  const [selectedStructure, setSelectedStructure] = useState<StructureType>(
    structures[0]
  );

  return (
    <AnimatedSection>
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-4xl font-bold text-white text-center mb-8">
          Nossa Estrutura
        </h2>

        <div className="flex justify-center mb-8">
          <div className="flex w-full max-w-md overflow-hidden rounded-md">
            {structures.map((structure, index) => (
              <button
                key={structure.name}
                onClick={() => setSelectedStructure(structure)}
                className={`flex-1 py-2 px-4 text-sm font-medium transition-all ${
                  selectedStructure?.name === structure.name
                    ? "bg-green-500 text-white shadow-lg"
                    : "bg-gray-700 text-gray-300 hover:bg-green-400 hover:text-white hover:shadow-md"
                } ${index === 0 ? "rounded-l-md" : ""} ${
                  index === structures.length - 1 ? "rounded-r-md" : ""
                }`}
              >
                {structure.name}
              </button>
            ))}
          </div>
        </div>

        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 md:mx-20">
          <div className="w-full lg:w-1/2 mb-8 lg:mb-0">
            <img
              src={selectedStructure.image}
              alt={selectedStructure.title}
              className="rounded-lg object-cover w-full h-[400px]"
              loading="lazy"
            />
          </div>
          <div className="w-full lg:w-1/2 lg:pl-8">
            <h3 className="text-3xl font-bold text-green-400 mb-4">
              {selectedStructure.title}
            </h3>
            <p className="text-gray-300 mb-6">
              {selectedStructure.description}
            </p>
            <a
              target="_blank"
              href="https://wa.me/5511991430995?text=Ola,%20gostaria%20de%20fazer%20um%20or%C3%A7amento%20com%20voc%C3%AAs"
              className="rounded-md bg-green-700 px-6 py-3 text-lg font-semibold text-white hover:bg-[#006400] "
            >
              Faça um orçamento
            </a>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center px-4 md:px-8">
          <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white text-center my-8 md:my-12">
            Nossos Clientes
          </h3>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-6 md:gap-8 max-w-7xl">
            <div className="w-24 h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 rounded-full overflow-hidden hover:scale-110 transition-transform duration-300">
              <img
                className="w-full h-full object-cover"
                src={logo2m}
                alt="2m"
                loading="lazy"
              />
            </div>

            <div className="w-24 h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 rounded-full overflow-hidden hover:scale-110 transition-transform duration-300">
              <img
                className="w-full h-full object-cover"
                src={logoAfinal}
                alt="afinal"
                loading="lazy"
              />
            </div>

            <div className="w-24 h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 rounded-full overflow-hidden hover:scale-110 transition-transform duration-300">
              <img
                className="w-full h-full object-cover"
                src={logoCenaria}
                alt="cenaria"
                loading="lazy"
              />
            </div>

            <div className="w-24 h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 rounded-full overflow-hidden hover:scale-110 transition-transform duration-300">
              <img
                className="w-full h-full object-cover"
                src={logoDeep}
                alt="deep"
                loading="lazy"
              />
            </div>

            <div className="w-24 h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 rounded-full overflow-hidden hover:scale-110 transition-transform duration-300">
              <img
                className="w-full h-full object-content"
                src={logoMaxxy}
                alt="maxxy"
                loading="lazy"
              />
            </div>

            <div className="w-24 h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 rounded-full overflow-hidden hover:scale-110 transition-transform duration-300">
              <img
                className="w-full h-full object-cover"
                src={logoProloja}
                alt="prolojacenografia_logo"
                loading="lazy"
              />
            </div>

            <div className="w-24 h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 rounded-full overflow-hidden hover:scale-110 transition-transform duration-300">
              <img
                className="w-full h-full object-cover"
                src={logoVertical}
                alt="vertical"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>
    </AnimatedSection>
  );
};

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <AnimatedSection>
      <footer className="bg-gray-900 text-gray-300 py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-between items-center">
            <div className="w-full md:w-1/3 mb-6 md:mb-0">
              <img
                src={mLogo}
                alt="LDTPisos Logo"
                className="h-10 w-auto brightness-0 invert mb-4"
                loading="lazy"
              />
              <p className="text-sm">
                Somos a base do entretenimento. Desenvolvemos, fabricamos e
                alugamos nossos pisos modulares para eventos.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold my-4">Endereço</h3>
              <p>Rua Dr Jose Cioff, 102</p>
              <p>São Mateus - São Paulo/ SP</p>
              <p>CEP: 03963-050</p>
            </div>
            <div className="w-full md:w-1/3">
              <h3 className="text-lg font-semibold my-4"> Contato</h3>
              <p className="mb-2">Email: pisosldt@outlook.com.br</p>
              <p className="mb-2">Telefone: (11)99143-0995</p>
              <div className="flex space-x-4 mt-4"></div>
            </div>
          </div>
          <div className="mt-8 border-t border-gray-700 pt-8 text-center">
            <p className="text-sm">
              © {currentYear} Pisos Fênix. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </footer>
    </AnimatedSection>
  );
};

const LDTPisosPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-800">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <Header />
        <MainSection />
        <ImageSection />
        <StructureSection />
        <Footer />
      </motion.div>
      <WhatsAppButton />
    </div>
  );
};

export default LDTPisosPage;
