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
    <link rel="stylesheet" href="{base}/makoto.css">
</svelte:head>

<BlogPost {post}/>
