import type { Metadata } from "next";

import "./globals.css";
import { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Write your blog",
  description: "Blogs related to software engineering",
  keywords: "software blogs, code blogs, shiva's blog",
};

const MainLayout = ({ children }: { children: ReactNode }) => {
  return (
    <html lang="en">
      <body>
        <main>{children}</main>
      </body>
    </html>
  );
};

export default MainLayout;
