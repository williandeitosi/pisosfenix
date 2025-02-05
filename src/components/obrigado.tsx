import { useEffect } from "react";

declare global {
  interface Window {
    gtag: (...args: any[]) => void;
    dataLayer: any[];
  }
}

export default function ObrigadoPage() {
  useEffect(() => {
    if (typeof window.gtag === "function") {
      window.gtag("event", "conversion", {
        send_to: "AW-16851579722",
        transaction_id: "",
      });
    }
  }, []);

  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center px-4">
      <div className="max-w-md w-full bg-white rounded-lg shadow-xl p-8 text-center">
        <h1 className="text-4xl font-bold mb-4 text-green-500">
          Obrigado pelo contato!
        </h1>
        <p className="text-xl mb-6 text-gray-600">
          Recebemos sua mensagem e entraremos em contato em breve.
        </p>
        <div className="mb-8">
          <a
            href="/"
            className="inline-block w-full bg-green-700 text-white font-bold py-3 px-4 rounded hover:bg-green-500 transition duration-300 mb-4"
          >
            ← Voltar para a página inicial
          </a>
        </div>
      </div>
    </div>
  );
}
