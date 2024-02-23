import type {Metadata} from "next";

import {getPage, PageData} from '../lib/api'

export async function generateMetadata({ params }): Promise<Metadata> {
    const pageData: PageData = await getPage(params.slug);
    return {
        title: pageData.seoOverride?.title || `${pageData.title} | Hospůdka u Ježka`,
        description: pageData.seoOverride?.description,
    }
}

export default async function Page({ params }) {
    const pageData: PageData = await getPage(params.slug);
    return (
        <main className="prose w-full py-10 px-5 mx-auto">
            <h1 className="text-3xl font-bold">
                {pageData.title}
            </h1>
        </main>
    );
}
