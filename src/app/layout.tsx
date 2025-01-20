import type { Metadata } from "next";
import { M_PLUS_Rounded_1c } from "next/font/google";
import "./globals.css";

const Rounded = M_PLUS_Rounded_1c({
  variable: "--font-geist-rounded",
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"],
});


export const metadata: Metadata = {
  title: "El mapa terapéutico - Karina",
  description: "Conviértete en la terapeuta que facilita cambios inmediatos y transforma vidas desde la 1ra. sesión.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es_ES">
      <body
        className={`${Rounded.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
