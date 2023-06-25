<script lang="ts">
    import Navbar from '$lib/Navbar.svelte';
    import ContactFooter from '$lib/ContactFooter.svelte';
</script>

<div id="navbar-container">
    <Navbar/>
</div>

<div id="main-container">
    <slot></slot>
    <footer id="contact">
        <ContactFooter/>
    </footer>
</div>

<style>
    #navbar-container {
        position: sticky;
        left: 0;
        top: 0;
        /* make sure it is always on top */
        z-index: 4;
    }

    #main-container {
        position: absolute;
        top: 64px;
        width: 100%;
        background-color: var(--bg-color);
        color: var(--text-color);
        min-height: calc(100vh - 64px);
    }

    #contact {
        display: flex;
        flex-direction: row !important;
        justify-content: center;
        gap: 5em;
        background-color: var(--bg-color);
        color: var(--text-color);
        padding: 1em 0em;
    }
</style>
