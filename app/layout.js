import { Inter } from "next/font/google";
import "./globals.css";
import { getServerSession } from "next-auth";
import Header from "./components/UI/Header";
import Logout from "./components/UI/Logout";
import Footer from "./components/UI/Footer";


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default async function RootLayout({ children }) {


  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}