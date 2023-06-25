<script lang="ts">
    //imports
    import BlogPosts from '$lib/BlogPosts.svelte';
    import type { Post } from '$lib/types.ts';

    //exports
    export let data;

    let posts: Post[] = data.posts;

    //
</script>

<BlogPosts {posts}/>
