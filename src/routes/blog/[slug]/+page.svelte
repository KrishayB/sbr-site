<script lang="ts">
    //imports
    import { base } from '$app/paths';
    import BlogPost from '$lib/BlogPost.svelte';
    import type { Post } from '$lib/types.ts';

    //exports
    export let data;

    const post: Post = data.post!;

    //
</script>

<svelte:head>
    <title>{ post.title }</title>
    <meta name="keywords" content="{ post.tags.join(", ") }">
    {#if post.description}
        <meta name="description" content="{ post.description }">
    {/if}
    {#if post.cover_image}
        <meta property="og:image" content="{ post.cover_image }">
    {/if}
    <!--images, video, audio can come from anywhere, but scripts can only come from this domain - prevents xss-->
    <meta http-equiv="Content-Security-Policy" content="default-src 'self'; img-src *; media-src *; script-src 'self';" />
    <link rel="stylesheet" href="{base}/makoto.css">
</svelte:head>

<BlogPost {post}/>
