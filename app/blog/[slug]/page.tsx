import { getOneData } from "@/action/getOneData";
import { Button } from "@/components/ui/button";
import { singleBlogProps } from "@/lib/interface";
import { urlImageSource } from "@/lib/sanity";
import { PortableText } from "next-sanity";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export const revalidate = 3;
export default async function BlogPost({
  params,
}: {
  params: { slug: string };
}) {
  const data: singleBlogProps = await getOneData(params.slug);
    console.log(data);
  return (
    <section className="mt-8">
    <Button variant='link'>
      <Link href="/">Back</Link>
    </Button>
      <h1 className="text-2xl text-primary font-semibold tracking-wide text-center mt-5">
        My Personal Blog
      </h1>
      <h2 className="mt-4 block lg:text-4xl font-bold lg:leading-8 sm:text-2xl text-center">
        {data.title}
      </h2>
      <Image
        src={urlImageSource(data.titleImage).url()}
        alt="image"
        width={600}
        height={600}
        className="rounded-md mt-5 border h-[350px] w-full object-cover flex  mx-auto"
        priority
      />
      <div className="mt-10 prose prose-blue prose-lg dark:prose-invert ">
        <PortableText value={data.content} />
      </div>
    </section>
  );
}
