import React from "react";
import Head from 'next/head';
import { Providers } from "./providers";
import { Inter } from "next/font/google";
import { NextFont } from "next/dist/compiled/@next/font";
import Header from "@/app/ui/Header/index";
import HeaderShadow from "@/app/ui/Header/HeaderShadow";
import TopBar from "@/app/ui/Topbar";
import "./globals.css";

const inter: NextFont = Inter({subsets: ["latin"]});

export default function RootLayout({children}: Readonly<{ children: React.ReactNode }>) {

    return (
        <html>
            <Head>
                <link rel="shortcut icon" href="favicon.ico"/>
            </Head>

            <body className={`${inter.className} bg-secondary`}>
                <Providers>
                    <TopBar/>
                    <Header/>
                    <HeaderShadow />
                    {children}
                </Providers>
            </body>
        </html>
    );
}
