import React from "react";
import type { Metadata } from "next";

import { getSinglePostType } from "@/app/lib/api";

import PrivacyPolicy from '@/app/components/CookieConsent/PrivacyPolicy';

export async function generateMetadata(): Promise<Metadata> {
    return {
        title: `Ochrana osobních údajů | Hospůdka u Ježka`,
        description: 'Soubory cookie používáme k analýze údajů o našich návštěvnících, ke zlepšení našich webových stránek nebo k tomu, abychom vám poskytli skvělý zážitek z webu.',
    }
}

export default async function Page() {
    const pageData = await getSinglePostType('privacy-policy');

    return <PrivacyPolicy pageData={pageData} />;
}
