import type { Metadata } from "next";
import { M_PLUS_Rounded_1c } from "next/font/google";
import "./globals.css";
import Script from "next/script";

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
        <Script
          id="facebook-pixel"
          strategy="afterInteractive"
        >
          {`
          !function(f,b,e,v,n,t,s)
          {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
          n.callMethod.apply(n,arguments):n.queue.push(arguments)};
          if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
          n.queue=[];t=b.createElement(e);t.async=!0;
          t.src=v;s=b.getElementsByTagName(e)[0];
          s.parentNode.insertBefore(t,s)}(window, document,'script',
          'https://connect.facebook.net/en_US/fbevents.js');
          fbq('init', '1386218571513573');
          fbq('track', 'ViewContent');
        `}
        </Script>
        <noscript>
          <img height="1" width="1" style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=1386218571513573&ev=ViewContent&noscript=1"
          />
        </noscript>
        {children}
      </body>
    </html>
  );
}
