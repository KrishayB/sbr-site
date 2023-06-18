<script lang="ts">
    import Navbar from '$lib/Navbar.svelte';
</script>

<div id="navbar-container">
    <Navbar/>
</div>

<div id="main-container">
    <slot></slot>
</div>

<style>
    #navbar-container {
        position: sticky;
        left: 0;
        top: 0;
        /* make sure it is always on top */
        z-index: 3;
    }

    #main-container {
        position: absolute;
        top: 64px;
        width: 100%;
    }
</style>
