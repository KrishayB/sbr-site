import { error } from '@sveltejs/kit';
import dummy_posts from '$lib/dummy_posts.json';
import blog_posts from '$lib/blog_posts.json';

/* fetch blog post? */

export async function load({ params }) {
    //return fake posts
    let post = (blog_posts.length === 0 ? dummy_posts : blog_posts).find((item) => item.slug === params.slug);
    if (!post) {
        throw error(404, {
            message: "Not Found",
        });
    }
    return {
        post,
    }
}
