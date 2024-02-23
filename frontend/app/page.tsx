"use client";
import {Card, CardHeader, CardFooter, Image, Link, Button} from "@nextui-org/react";
import { Icon } from '@iconify/react';
import { getPosts, Post } from './lib/api';

export default async function Home() {
    const posts: Post[] = await getPosts();

    return (
        <main className="prose w-full py-10 px-5 mx-auto">

            <h1 className="text-3xl font-bold">Posts</h1>

            <div className="grid grid-cols-3">
                {posts.map((post: Post) => {
                    return (
                        <div key={post.id} className="p-4">
                            <Card isFooterBlurred className="w-full h-[300px] col-span-12 sm:col-span-7">
                                <CardHeader className="absolute z-10 top-0 flex-col items-start px-4 py-6">
                                    <h4 className="text-white/90 font-medium text-xl">
                                        {post.title}
                                    </h4>
                                </CardHeader>

                                {post.coverImage && (
                                    <Image
                                        removeWrapper
                                        alt={post.title}
                                        className="z-0 w-full h-full object-cover"
                                        src={post.coverImage.url}
                                        isZoomed
                                    />
                                )}

                                <CardFooter className="absolute bg-black/40 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100">
                                    <Button href={`/posts/${post.slug}`} as={Link} color="primary" variant="bordered" radius="full" size="sm" startContent={<Icon icon="lucide:bed-double" />}>
                                        Více informací
                                    </Button>
                                </CardFooter>
                            </Card>
                        </div>
                    );
                })}
            </div>
        </main>
    );
}
