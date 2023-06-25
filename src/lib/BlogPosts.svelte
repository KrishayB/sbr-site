<script lang="ts">
    //imports
    import { onMount } from 'svelte';
    import { base } from "$app/paths";
    import { page } from "$app/stores"; 
    import type { Post } from '$lib/types.ts';
    import PostTags from '$lib/PostTags.svelte';
    import { format_timestamp } from '$lib/utils.ts';

    //exports
    export let posts: Post[];

    posts = posts.sort((a, b) => {
        if (a.timestamp > b.timestamp) {
            return -1;
        } else {
            return 1;
        }
    });

    //posts to show
    let show_posts = posts;
    let tag_filter: string | null;
    let clicked: boolean;

    $: {
        if (clicked) {
            //short delay before reload, so url changes
            setTimeout(() => window.location.reload(), 250);
        }
    }

    onMount(() => {
        tag_filter = $page.url.searchParams.get("tag_filter");
        if (tag_filter) {
            show_posts = posts.filter((item) => item.tags.includes(tag_filter!));
            if (tag_filter === "Latest" && posts[0]) {
                show_posts = [posts[0]];
            }
        } else {
            show_posts = posts;
        }
    });
</script>

<div id="blog-grid">
    {#if tag_filter}
        <span><a id="clear-filter" href="{base}/blog" on:click={
            () => {
                clicked = true;
            }
        }>Clear Filters?</a></span>
        <br>
    {/if}
    {#each show_posts as post, index}
        <div class="post-box">
            <div>
                {#if index === 0}
                    <PostTags tags={["Latest", ...post.tags]} bind:clicked={clicked}/>
                {:else}
                    <PostTags tags={post.tags}/>
                {/if}
            </div>
            <h3 class="post-title"><a href="{base}/blog/{ post.slug }">{ post.title }</a></h3>
            <span class="post-info">{ post.author } - { format_timestamp(post.timestamp) }</span>
        </div>
    {/each}
</div>

<style>
    #clear-filter {
        color: currentColor;
    }

    #blog-grid {
        display: grid;
        grid-template-columns: 50% 50%;
        column-gap: 25px;
        row-gap: 25px;
    }

    .post-box {
        border: 1px solid currentColor;
        border-radius: 14px;
        padding: 14px;
    }

    .post-box:first-child {
        grid-column: 1 / 3;
    }

    .post-box .post-title {
        font-size: 2em;
    }

    .post-box:first-child .post-title {
        font-size: 2.4em;
    }

    .post-box a {
        color: currentColor;
    }

    .post-title {
        margin: 0px 0px 5px 0px;
    }

    @media screen and (max-width: 1000px) {
        #blog-grid {
            grid-template-columns: 100%;
        }

        .post-box:first-child {
            grid-column: 1 / 2;
        }
    }
</style>
