import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import img1 from "../assets/images/1.jpeg";
import img2 from "../assets/images/2.jpeg";
import img3 from "../assets/images/3.jpeg";
import img4 from "../assets/images/4.jpeg";
import img5 from "../assets/images/4.jpeg";
import img6 from "../assets/images/5.jpeg";
import img7 from "../assets/images/6.jpeg";
import img8 from "../assets/images/7.jpeg";
import img9 from "../assets/images/8.jpeg";
import mLogo from "../assets/images/logo.png";
import mPhoto from "../assets/images/mainphoto.jpeg";
import pisoDeck from "../assets/images/piso-deck.jpeg";
import pisoMadeira from "../assets/images/piso-madeira.jpeg";
import estruturaImage from "../assets/images/7.jpeg";
import whatspp from "../assets/images/whatsapp.png";

interface StructureType {
  name: string;
  image: string;
  title: string;
  description: string;
}

interface FloorType {
  name: string;
  image: string;
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
    href="https://wa.me/11991430995?text=Ola,%20gostaria%20de%20fazer%20um%20or%C3%A7amento%20com%20voc%C3%AAs"
    target="_blank"
    rel="noopener noreferrer"
    className="block fixed bottom-4 right-4 z-50 hover:scale-110 transition-transform duration-200"
  >
    <img src={whatspp} alt="Botão Whatsapp" width={80} height={80} />
  </a>

);

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="container mx-auto flex items-center justify-between p-4">
      <img
        src={mLogo}
        alt="LDTPisos Logo"
        className="h-10 w-auto brightness-0 invert"
      />
      <nav
        className={`${
          isMenuOpen ? "block" : "hidden"
        } space-y-4 md:space-y-0 md:space-x-4 md:flex`}
      >
        <a className="block font-semibold text-gray-300 hover:text-green-600">
          LTD PISOS
        </a>
      </nav>
      <div className="flex items-center space-x-4">
        <a
          className="rounded-md border border-green-500 px-4 py-2 text-green-500 hover:bg-green-500 hover:text-white"
          target="_blank"
          href="https://wa.me/11991430995?text=Ola,%20gostaria%20de%20fazer%20um%20or%C3%A7amento%20com%20voc%C3%AAs"
        >
          {" "}
          Contato{" "}
        </a>
      </div>
    </header>
  );
}

const MainSection: React.FC = () => (
  <AnimatedSection>
    <main className="container mx-auto flex flex-col items-center justify-between px-4 py-16 md:flex-row">
      <div className="mb-8 max-w-2xl text-center md:mb-0 md:text-left">
        <h1 className="mb-4 text-4xl font-bold text-white">
          Aluguel de pisos de madeira
        </h1>
        <p className="mb-6 text-xl text-green-400">
          Somos a base do entretenimento.
        </p>
        <p className="mb-8 text-gray-300">
          Desenvolvemos, fabricamos e alugamos soluções sustentáveis em pisos de
          madeira modulares para eventos. Nossa expertise garante a melhor
          experiência para o seu público.
        </p>
        <a
          target="_blank"
          href="https://wa.me/11991430995?text=Ola,%20gostaria%20de%20fazer%20um%20or%C3%A7amento%20com%20voc%C3%AAs"
          className="rounded-md bg-green-700 px-6 py-3 text-lg font-semibold text-white hover:bg-[#006400] "
        >
          Faça um orçamento
        </a>
      </div>
      <div className="relative h-64 w-full md:h-96 md:w-1/2 border-4 border-green-500 rounded-xl border-opacity-20 hover:scale-105 duration-300 ">
        <img
          src={mPhoto}
          alt="Pisos plásticos empilhados"
          className="h-full w-full object-cover rounded-lg "
        />
      </div>
    </main>
  </AnimatedSection>
);

const ImageSection: React.FC = () => {
  const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9];
  return (
    <AnimatedSection>
      <div>
        <h2 className="mb-8 text-center text-3xl font-bold text-white">
          Portfólio
        </h2>
        <section className="container mx-auto mt-16 grid grid-cols-1 gap-8 px-4 md:grid-cols-3 ">
          {images.map((image, index) => (
            <div
              key={index}
              className="relative h-48 overflow-hidden rounded-lg transition-transform hover:scale-105"
            >
              <img
                src={image}
                alt={`exemplo de uso ${index + 1}`}
                className="h-full w-full object-cover"
              />
            </div>
          ))}
        </section>
      </div>
    </AnimatedSection>
  );
};

const FloorTypeSection: React.FC = () => {
  const [selectedFloor, setSelectedFloor] = useState<FloorType | null>(null);

  const floorTypes: FloorType[] = [
    {
      name: "Piso deck",
      image: pisoDeck,
      description:
        "Nosso piso deck é perfeito para áreas externas, oferecendo durabilidade e estética. Feito de materiais resistentes às intempéries, é ideal para eventos ao ar livre, piscinas e terraços.",
    },
    {
      name: "Piso Madeira",
      image: pisoMadeira,
      description:
        "O piso madeira combina a beleza natural da madeira com a praticidade do plástico. É excelente para eventos internos, proporcionando um ambiente acolhedor e sofisticado, sem a necessidade de manutenção intensiva.",
    },
  ];

  const openModal = (floor: FloorType) => {
    setSelectedFloor(floor);
  };

  const closeModal = () => {
    setSelectedFloor(null);
  };

  return (
    <AnimatedSection>
      <section className="container mx-auto mt-16 px-4">
        <h2 className="mb-8 text-center text-3xl font-bold text-white">
          Nossos Tipos de Piso
        </h2>
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
                <h3 className="text-xl font-semibold text-white">
                  {floor.name}
                </h3>
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
    </AnimatedSection>
  );
};

const StructureSection: React.FC = () => {
  const structures: StructureType[] = [
    {
      name: "DECK",
      image: pisoMadeira,
      title: "Estrutura de Deck",
      description:
        "Nossa estrutura de deck oferece uma base sólida e durável para eventos ao ar livre. Projetada para suportar grandes cargas e resistir às intempéries, é perfeita para festivais, feiras e exposições externas.",
    },
    {
      name: "MADEIRA",
      image: estruturaImage,
      title: "Estrutura de Madeira",
      description:
        "A estrutura de madeira combina elegância e resistência. Ideal para eventos internos, proporciona um visual sofisticado e acolhedor, mantendo a estabilidade necessária para diversos tipos de ocasiões.",
    },
  ];

  const [selectedStructure, setSelectedStructure] = useState<StructureType>(
    structures[0]
  );

  useEffect(() => {
    setSelectedStructure(structures[0]);
  }, []);

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

        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="w-full lg:w-1/2 mb-8 lg:mb-0">
            <img
              src={selectedStructure.image}
              alt={selectedStructure.title}
              className="rounded-lg object-cover w-full h-[400px]"
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
              href="https://wa.me/11991430995?text=Ola,%20gostaria%20de%20fazer%20um%20or%C3%A7amento%20com%20voc%C3%AAs"
              className="rounded-md bg-green-700 px-6 py-3 text-lg font-semibold text-white hover:bg-[#006400] "
            >
              Faça um orçamento
            </a>
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
              />
              <p className="text-sm">
                Somos a base do entretenimento. Desenvolvemos, fabricamos e
                alugamos soluções sustentáveis em pisos plásticos modulares para
                eventos.
              </p>
            </div>
            <div className="w-full md:w-1/3">
              <h3 className="text-lg font-semibold mb-4"> Contato</h3>
              <p className="mb-2">Email: pisosldt@outlook.com.br</p>
              <p className="mb-2">Telefone: (11) 9 9143-0995</p>
              <div className="flex space-x-4 mt-4">
                <a href="#" className="text-gray-300 hover:text-green-500">
                  <span className="sr-only">Facebook</span>
                  <svg
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
                <a href="#" className="text-gray-300 hover:text-green-500">
                  <span className="sr-only">Instagram</span>
                  <svg
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div className="mt-8 border-t border-gray-700 pt-8 text-center">
            <p className="text-sm">
              © {currentYear} LDTPisos. Todos os direitos reservados.
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
        :
        <Header />
        <MainSection />
        <ImageSection />
        <FloorTypeSection />
        <StructureSection />
        <Footer />
      </motion.div>
      <WhatsAppButton />
    </div>
  );
};

export default LDTPisosPage;
