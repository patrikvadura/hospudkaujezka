"use client";
import React, { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { Navbar, NavbarMenuToggle, NavbarMenu, NavbarMenuItem, NavbarBrand, NavbarContent, NavbarItem, Image, Link, Button } from "@nextui-org/react";
import { Icon } from "@iconify/react";
import { ThemeSwitcher } from "@/app/ui/ThemeSwitcher";

import { getPage } from "@/app/lib/api";

export default function Header() {
    const [pages, setPages] = React.useState([]);
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);
    const [scrollPosition, setScrollPosition] = useState(0); // add this

    const { theme, setTheme } = useTheme()

    const toggleTheme = ():void => {
        setTheme(theme === "dark" ? "light" : "dark");
    };

    useEffect(() => {
        async function fetchPages() {
            const response = await getPage(undefined, ['coverImage']);
            setPages(response.data);
        }
        fetchPages();
    }, []);

    useEffect(() => {
        const updateScroll = () => {
            setScrollPosition(window.scrollY || document.documentElement.scrollTop);
        }
        window.addEventListener('scroll', updateScroll);
        return () => window.removeEventListener('scroll', updateScroll);
    }, []);

    return (
        <Navbar className="bg-primary" maxWidth="xl" isBordered onMenuOpenChange={setIsMenuOpen}>
            <NavbarBrand>
                <Link href="/" className="text-black">
                    <Image
                        className={`rounded-none h-32 z-30 transition duration-300 ease-in-out ${scrollPosition > 50 ? '-bottom-6 scale-75' : 'bottom-0 scale-100'}`}
                        src={`/${theme === "dark" ? "logo_default.svg" : "logo_default.svg"}`}
                        alt="Next.js Logo"
                    />
                </Link>
            </NavbarBrand>

            <NavbarContent className="hidden sm:flex gap-8" justify="end">
                {pages.map((page: any) => {
                    return (
                        <NavbarItem key={page.id} isActive>
                            <Link
                                href={`/${page.attributes.slug}`}
                                className="text-secondary font-bold">
                                {page.attributes.title}
                            </Link>
                        </NavbarItem>
                    );
                })}
            </NavbarContent>

            <ThemeSwitcher/>

            <NavbarItem className="hidden lg:flex">
                <Button as={Link} color="secondary" href="/rezervace" variant="solid" className="font-bold" startContent={<Icon icon="lucide:calendar-days" />}>
                    Rezervace
                </Button>
            </NavbarItem>

            <NavbarMenuToggle
                aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                className="sm:hidden text-secondary"
            />

            <NavbarMenu className="flex flex-col justify-center items-center">
                {pages.map((page: any) => {
                    return (
                        <NavbarMenuItem key={page.id}>
                            <Link
                                href={`/${page.attributes.slug}`}
                                className="!text-h3 !font-bold text-primary">
                                {page.attributes.title}
                            </Link>
                        </NavbarMenuItem>
                    );
                })}

                <NavbarMenuItem>
                    <Link
                        href="/rezervace"
                        className="!text-h3 !font-bold text-primary">
                        <Icon icon="lucide:calendar-days" className="mr-3" />
                        Rezervace
                    </Link>
                </NavbarMenuItem>
            </NavbarMenu>
        </Navbar>
    );
}
