import dummy_posts from '$lib/dummy_posts.json';

/* fetch blog posts? */

export async function load() {
    //return fake posts
    return {
        posts: dummy_posts,
    }
}
