import { getData } from "@/action/getData";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { blogCard } from "@/lib/interface";
import { urlImageSource } from "@/lib/sanity";
import Image from "next/image";
import Link from "next/link";

export const revalidate = 3;
export default async function Home() {
  const data: blogCard[] = await getData();
  // console.log(data);
  return (
    <>
      <h1 className="text-center text-primary text-2xl font-semibold mt-5">Blog Post</h1>
      <main className="grid grid-cols-1 md:grid-cols-2  mt-10 gap-4 pb-10">
        {data.map((post, idx) => (
          <Card key={idx} className="">
            <Image
              src={urlImageSource(post.titleImage).url()}
              alt="image"
              width={500}
              height={500}
              className="rounded-md h-[200px] object-cover flex items-center justify-center"
              priority
            />
            <CardContent className="mt-4">
              <h3 className="line-clamp-1 font-bold text-lg">{post.title}</h3>
              <p className="line-clamp-3 text-sm mt-2 text-slate-600 dark:text-slate-400">
                {post.smallDescription}
              </p>
              <Button asChild className="w-full mt-5">
                <Link href={`/blog/${post.currentSlug}`}>Read More...</Link>
              </Button>
            </CardContent>
          </Card>
        ))}
      </main>
    </>
  );
}
