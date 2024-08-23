import type { Metadata } from "next";

import "./globals.css";
import { ReactNode } from "react";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";

export const metadata: Metadata = {
  title: "Write your blog",
  description: "Blogs related to software engineering",
  keywords: "software blogs, code blogs, shiva's blog",
};

const MainLayout = ({ children }: { children: ReactNode }) => {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
};

export default MainLayout;
