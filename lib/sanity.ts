import { createClient } from "next-sanity";
import imageUrlBuilder  from "@sanity/image-url";

export const client = createClient({
    projectId: "alkbjlhz",
    dataset: "production",
    apiVersion: "2022-03-25",
    useCdn: false,
})

const builder = imageUrlBuilder(client);

export function urlImageSource(source: any) {
    return builder.image(source)
}