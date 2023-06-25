<script lang="ts">
    //imports
    import type { Post } from '$lib/types.ts';
    import PostTags from '$lib/PostTags.svelte';
    import { parse_md_to_html } from '$lib/makoto.ts';
    import { format_timestamp } from '$lib/utils.ts';

    //exports
    export let post: Post;
</script>

<div>
    <div>
        <div>
            <PostTags tags={post.tags}/>
        </div>
        <h1 id="post-title">{ post.title }</h1>
        <span id="post-info">{ post.author } - { format_timestamp(post.timestamp) }</span>
        {#if post.cover_image}
            <br>
            <img id="post-cover-image" alt={ post.cover_alt ? post.cover_alt : post.title+" cover image" } src={post.cover_image}>
        {/if}
    </div>
    <div id="post-content">
        <!--actual post content-->
        {@html parse_md_to_html(post.md_content)}
    </div>
</div>

<style>
    #post-title {
        font-size: 2.7em;
    }

    #post-cover-image {
        max-width: 100%;
    }
</style>
