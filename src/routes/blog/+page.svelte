<script lang="ts">
    //imports
    import BlogPosts from '$lib/BlogPosts.svelte';
    import type { Post } from '$lib/types.ts';

    //exports
    export let data;

    let posts: Post[] = data.posts;

    //
</script>

<div id="posts-container">
    <BlogPosts {posts}/>
</div>

<style>
    #posts-container {
        box-sizing: padding-box;
        padding: 12px 10%;
    }
</style>
