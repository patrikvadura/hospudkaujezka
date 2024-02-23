import type { Metadata } from 'next';

import { getPost, PostData } from '../../lib/api'

export async function generateMetadata({ params }): Promise<Metadata> {
    const postData: PostData = await getPost(params.slug);
    return {
        title: postData.seoOverride?.title || `${postData.title} | Hospůdka u Ježka`,
        description: postData.seoOverride?.description,
    }
}

export default async function Post({ params }) {
    const postData: PostData = await getPost(params.slug);
    return (
        <main className="prose w-full py-10 px-5 mx-auto">
            <h1 className="text-3xl font-bold">
                {postData.title}
            </h1>

            {postData.content && (
                <div
                    dangerouslySetInnerHTML={{
                        __html: postData.content.html
                    }}
                />
            )}
        </main>
    );
}
