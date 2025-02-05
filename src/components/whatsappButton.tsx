import { useNavigate } from "react-router-dom";
import whatspp from "../assets/images/whatsapp.png";

interface WhatsAppButtonProps {
  className?: string;
  variant?: "icon" | "button";
  children?: React.ReactNode;
}

export const WhatsAppLink: React.FC<WhatsAppButtonProps> = ({
  className = "",
  variant = "icon",
  children,
}) => {
  const navigate = useNavigate();
  const whatsappUrl =
    "https://wa.me/5511991430995?text=Ola,%20gostaria%20de%20fazer%20um%20or%C3%A7amento%20com%20voc%C3%AAs";

  const handleWhatsAppClick = (e: React.MouseEvent) => {
    e.preventDefault();
    window.open(whatsappUrl, "_blank");
    navigate("/obrigado");
  };

  if (variant === "icon") {
    return (
      <button
        onClick={handleWhatsAppClick}
        className={`block fixed bottom-4 right-4 z-50 hover:scale-110 transition-transform duration-200 ${className}`}
      >
        <img src={whatspp} alt="Botão Whatsapp" width={80} height={80} />
      </button>
    );
  }

  return (
    <button
      onClick={handleWhatsAppClick}
      className={`rounded-md bg-green-700 px-6 py-3 text-lg font-semibold text-white hover:bg-[#006400] ${className}`}
    >
      {children || "Faça um orçamento"}
    </button>
  );
};
