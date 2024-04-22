import { client } from "@/lib/sanity";

export const revalidate = 3;
export const getOneData = async (slug: string) => {
  const query = `
  *[_type == 'blog' && slug.current == '${slug}' ]{
    'currentSlug': slug.current,
      title,
      content,
      titleImage
  }[0]
  `;
  const data = await client.fetch(query);
  return data;
};
