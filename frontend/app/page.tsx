import React from "react";
import type { Metadata } from "next";

import { getPost } from "@/app/lib/api";
import { seoHomepage } from "@/app/lib/meta";
import { Card, CardHeader, Image, Link } from "@nextui-org/react";
import ContactForm from "@/app/components/ContactForm";
import Hero from "@/app/components/Hero";

export async function generateMetadata(): Promise<Metadata> {
    const { title, description, image } = seoHomepage.props;
    const backendPath:string|undefined = process.env.NEXT_PUBLIC_API;

    return {
        title: `${title}`,
        description: description,
        openGraph: {
            images: [
                { url: image }
            ]
        }
    }
}

export default async function Home() {
    const response = await getPost(undefined,['coverImage']);
    const posts = response.data;

    const backendPath:string|undefined = process.env.NEXT_PUBLIC_API;

    return (
        <main id="main">
            <Hero />

            <div className="container mt-24 space-y-32">
                <div id="room-list" className="space-y-16">
                    <h2 className="mb-10 text-h2 text-center text-primary">
                        Nabídka našeho ubytování
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {posts.map((post: any) => {
                            return (
                                <div key={post.id} className="p-4">
                                    <Link href={`/posts/${post.attributes.slug}`} className="flex flex-col ">
                                        <Card className="col-span-12 sm:col-span-4 h-[300px]">
                                            <CardHeader className="absolute z-10 top-1 flex-col !items-start">
                                                <h4 className="text-white font-medium text-xl">
                                                    {post.attributes.title}
                                                </h4>
                                            </CardHeader>

                                            {post.attributes.coverImage && (
                                                <Image
                                                    removeWrapper
                                                    alt={post.attributes.title}
                                                    className="z-0 w-full h-full object-cover"
                                                    src={backendPath + post.attributes.coverImage.data.attributes.url}
                                                    isZoomed
                                                />
                                            )}
                                        </Card>
                                    </Link>
                                </div>
                            );
                        })}
                    </div>
                </div>

                <div id="reservation" className="space-y-16">
                    <div className="mt-16 max-w-screen-md mx-auto">
                        <h2 className="mb-10 text-h2 text-center text-primary">
                            Rezervujte si u nás pobyt nebo oslavu
                        </h2>

                        <ContactForm/>
                    </div>
                </div>
            </div>
        </main>
    );
}
