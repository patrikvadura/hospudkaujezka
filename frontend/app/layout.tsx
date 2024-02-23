import { Inter } from "next/font/google";
import "./globals.css";
import {Providers} from "./providers";
import Header from "@/app/components/Header/index";
import {NextFont} from "next/dist/compiled/@next/font";

const inter: NextFont = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {

      return (
          <html lang="en">
            <body className={inter.className}>
              <Providers>
                  <Header />
                {children}
              </Providers>
            </body>
          </html>
      );
}
