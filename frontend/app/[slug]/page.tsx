import React from "react";
import type { Metadata } from "next";

import { getPageBySlug } from "@/app/lib/api";
import renderContent from "@/app/lib/renderContent";

interface ParamsProps {
    params: {
        slug: string;
    };
}

export async function generateMetadata(props: ParamsProps): Promise<Metadata> {
    const pageData = await getPageBySlug(props.params.slug, ['ogImage']);

    const backendPath:string|undefined = process.env.NEXT_PUBLIC_API;

    return {
        title: pageData.data[0].attributes.seoTitle || `${pageData.data[0].attributes.title} | Hospůdka u Ježka`,
        description: pageData.data[0].attributes.seoDescription,
        openGraph: {
            images: [
                { url: backendPath + pageData.data[0].attributes.ogImage.data.attributes.url }
            ]
        },
    }
}

export default async function Page(props: ParamsProps) {
    const pageData = await getPageBySlug(props.params.slug);

    const pageDataContent:any[] = pageData.data[0].attributes.content;

    if (pageData.data.length === 0) return null;

    return (
        <main className="container">
            <h1 className="text-3xl font-bold">
                {pageData.data[0].attributes.title}
            </h1>

            <div>
                {renderContent(pageDataContent)}
            </div>
        </main>
    );
}
