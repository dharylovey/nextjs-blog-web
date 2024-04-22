import { title } from "process";

export default {
    name: 'blog',
    title: 'Blog',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Title of blog post',
            type: 'string',
        },
        {
            name: 'slug',
            title: 'Slug of blog post',
            type: 'slug',
            options: {
                source: 'title',
            }
        },
        {
            name: 'titleImage',
            type: 'image',
            title: 'Title image',
        },
        {
            name: 'smallDescription',
            type: 'text',
            title: 'Small description',
        },
        {
            name: 'content',
            type: 'array',
            title: 'Content',
            of: [
                {
                    type: 'block',
                }
            ]
        }
    ]
}   