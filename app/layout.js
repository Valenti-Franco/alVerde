import { Inter } from "next/font/google";
import "./globals.css";
import Providers from "./Providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Alverde",
  description: "Ubicado en el corazón de Rosario, el Picódromo Alverde es el destino definitivo para los amantes de la velocidad y la adrenalina. Aquí, los entusiastas de los motores encuentran un espacio dedicado a la emoción de las carreras de autos y motos modificados. Nuestra pista, cuidadosamente diseñada, ofrece un desafío único tanto para pilotos profesionales como aficionados, garantizando una experiencia inigualable en cada evento.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Providers>

        <body className={inter.className}>{children}</body>
      </Providers>
    </html>
  );
}
