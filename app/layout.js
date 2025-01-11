import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ReduxProvider from "./redux/provider";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className=" bg-white text-fontColor overflow-x-hidden">
        <ReduxProvider>
          <Navbar />
          {children}
          <Footer />
        </ReduxProvider>
      </body>
    </html>
  );
}
