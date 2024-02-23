import React from "react";

import { getPost } from "@/app/lib/api";
import { Card, CardHeader, Image, Link } from "@nextui-org/react";

export default async function Home() {
    const response = await getPost(undefined,['coverImage']);
    const posts = response.data;

    const backendPath:string|undefined = process.env.NEXT_PUBLIC_API;

    return (
        <main className="container">

            <h1 className="text-3xl font-bold">Posts</h1>

            <div className="grid grid-cols-3 gap-4">
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
        </main>
    );
}
