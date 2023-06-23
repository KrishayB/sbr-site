<script lang="ts">
    //imports
    import { base } from "$app/paths";
    import type { Post } from '$lib/types.ts';

    //exports
    export let posts: Post[];

    //
</script>

<div id="blog-grid">
    {#each posts as post}
        <div class="post-box">
            <h3 class="post-title"><a href="{base}/blog/{ post.slug }">{ post.title }</a></h3>
        </div>
    {/each}
</div>

<style>
    #blog-grid {
        display: grid;
        grid-template-columns: auto auto;
    }

    .post-box:first-child {
        grid-column: 1 / 3;
    }

    .post-box .post-title {
        font-size: 1.5em;
    }

    .post-box:first-child .post-title {
        font-size: 2.2em;
    }

    .post-box a {
        color: currentColor;
    }
</style>
