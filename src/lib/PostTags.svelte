<script lang="ts">
    //imports
    import { base } from "$app/paths";

    //exports
    export let tags: string[];
    export let clicked: boolean = false;
</script>

<div id="post-tags">
    <!--max 5 tags-->
    {#each tags.slice(0, 5) as tag}
        <span class="post-tag" title={tag.toLowerCase()}><a href="{base}/blog/?tag_filter={tag}#" on:click={
            () => {
                clicked = true;
            }
        }>{ tag }</a></span>
    {/each}
</div>

<style>
    .post-tag {
        padding: 3px 6px;
        margin-right: 6px;
        border-radius: 14px;
        border: 1px solid currentColor;
        display: inline-block;
        margin-bottom: 5px;
    }

    .post-tag a {
        text-decoration: none;
        color: currentColor;
    }

    .post-tag:hover {
        cursor: pointer;
    }

    .post-tag[title="latest"] {
        color: var(--yellow);
    }

    .post-tag[title="tech"] {
        color: var(--aqua);
    }
                
    .post-tag[title="software"] {
        color: var(--red);
    }

    .post-tag[title="hardware"] {
        color: var(--green);
    }

    .post-tag[title="embedded"] {
        color: var(--blue);
    }

    .post-tag[title="update"] {
        color: var(--orange);
    }

    .post-tag[title="travel"] {
        color: var(--purple);
    }
</style>
