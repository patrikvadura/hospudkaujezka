"use client";
import React, { useState, useEffect } from "react";
import { Navbar, NavbarMenuToggle, NavbarMenu, NavbarMenuItem, NavbarBrand, NavbarContent, NavbarItem, Image, Link, Button } from "@nextui-org/react";
import { Icon } from "@iconify/react";
import { ThemeSwitcher } from "../ThemeSwitcher";
import { getNavigations, Navigation } from '../../lib/api';

export default function Header() {
    const [navigations, setNavigation] = useState<Navigation[]>([]);
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

    useEffect(() => {
        const fetchNavigations = async () => {
            const navigationsFromApi:Navigation[] = await getNavigations();
            setNavigation(navigationsFromApi);
        }

        void fetchNavigations();
    }, []);

    return (
        <Navbar maxWidth="full" isBordered onMenuOpenChange={setIsMenuOpen}>
            <NavbarContent>
                <NavbarBrand>
                    <Link href="/" className="text-black">
                        <Image
                            className="h-6 rounded-none"
                            src="/next.svg"
                            alt="Next.js Logo"
                        />
                    </Link>
                </NavbarBrand>

                <NavbarContent className="hidden sm:flex gap-8" justify="end">
                    {navigations.map((item: Navigation) => {
                        return item.link.map((link: any, index: number) => { // Link is now an array
                            if (link.page) {
                                return (
                                    <NavbarItem key={item.id + "_" + index}>
                                        <Link
                                            href={link.page?.slug}
                                            className="font-bold">
                                            {link.displayText}
                                        </Link>
                                    </NavbarItem>
                                );
                            } else {
                                return (
                                    <NavbarItem key={item.id + "_" + index}>
                                        <Link
                                            href={link.externalUrl}
                                            className="font-bold">
                                            {link.displayText}
                                        </Link>
                                    </NavbarItem>
                                );
                            }
                        })
                    })}
                </NavbarContent>

                <ThemeSwitcher/>

                <NavbarItem className="hidden lg:flex">
                    <Button as={Link} color="primary" href="/rezervace" variant="solid" startContent={<Icon icon="lucide:calendar-days" />}>
                        Rezervace
                    </Button>
                </NavbarItem>

                <NavbarMenuToggle
                    aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                    className="sm:hidden"
                />
            </NavbarContent>

            <NavbarMenu>
                {navigations.map((item: Navigation) => {
                    return item.link.map((link: any, index: number) => { // Link is now an array
                        if (link.page) {
                            return (
                                <NavbarMenuItem key={item.id + "_" + index}>
                                    <Link
                                        href={link.page?.slug}
                                        className="font-bold">
                                        {link.displayText}
                                    </Link>
                                </NavbarMenuItem>
                            );
                        } else {
                            return (
                                <NavbarMenuItem key={item.id + "_" + index}>
                                    <Link
                                        href={link.externalUrl}
                                        className="font-bold">
                                        {link.displayText}
                                    </Link>
                                </NavbarMenuItem>
                            );
                        }
                    })
                })}
            </NavbarMenu>
        </Navbar>
    );
}
