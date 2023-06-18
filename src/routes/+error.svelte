<script lang="ts">
    import { page } from '$app/stores';
</script>

<div id="error-container">
    <h1>{$page.status}</h1>
    <p>{$page.error?.message}</p>
</div>

<style>
    #error-container {
        text-align: center;
    }

    h1 {
        font-size: 5em;
        margin-bottom: 0;
    }
</style>
