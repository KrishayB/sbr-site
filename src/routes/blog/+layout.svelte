
<!--should be inherited from the other layout-->

<div id="posts-container">
    <slot></slot>
</div>

<style>
    #posts-container {
        box-sizing: border-box;
        padding: 25px 10%;
        /* lo siento for hardcoding */
        min-height: calc(100vh - 64px - 46px - 2em);
    }
</style>
