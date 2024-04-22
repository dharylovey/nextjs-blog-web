import { client } from "@/lib/sanity";

export const revalidate = 3;

export const getData = async () => {
  const query = `
    *[_type == 'blog'] | order(_createdAt desc){
        title,
          smallDescription,
          'currentSlug': slug.current,
          titleImage
      }
    `;
  const data = await client.fetch(query);

  return data;
};
