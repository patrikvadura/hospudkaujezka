import React from "react";
import {Providers} from "./providers";
import { Inter } from "next/font/google";
import {NextFont} from "next/dist/compiled/@next/font";
import Header from "@/app/ui/Header/index";
import TopBar from "@/app/ui/Topbar";
import "./globals.css";

const inter: NextFont = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {

      return (
          <html lang="en">
            <body className={inter.className}>
              <Providers>
                  <TopBar />
                  <Header />
                  {children}
              </Providers>
            </body>
          </html>
      );
}
