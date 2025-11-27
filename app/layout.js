import { Roboto } from "next/font/google";
import Footer from "../components/Footer";
import "./globals.css";
import Navbar from "../components/Navbar";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  variable: "--font-roboto",
});

export const metadata = {
  title: "Qalamoo Şirniyyat Evi",
  description: "Qalamoo Şirniyyat Evi – Təzə və dadlı şirniyyatlar",
  icons: {
    icon: "/logo.jpg", // public/favicon.ico
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${roboto.variable} antialiased`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
