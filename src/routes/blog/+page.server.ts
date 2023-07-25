import dummy_posts from '$lib/dummy_posts.json';
import blog_posts from '$lib/blog_posts.json';

/* fetch blog posts? */

export async function load() {
    //return fake posts
    return {
        posts: blog_posts.length !== 0 ? blog_posts : dummy_posts,
    }
}
