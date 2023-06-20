<script>
  import { base } from "$app/paths";
</script>

<nav id="navbar">
    <a href="{base}/"><img id="logo" src="{base}/favicon.svg" alt="south bay robotics logo [svg]"/></a>
    <div id="nav-links">
        <a class="keep-mobile" href="{base}/">Home</a>
        <a href="{base}/#about">About</a>
        <a href="{base}/#donate">Donate</a>
        <a href="{base}/#contact">Contact</a>
        <a class="keep-mobile" href="{base}/blog">Blog</a>
    </div>
</nav>

<style>
    #navbar {
        padding: 0px 10px;
        background-color: var(--bg2-color);
        height: 64px;
        /* grid my beloved */
        display: grid;
        grid-template-columns: 64px auto;
    }

    #logo {
        width: 64px;
        height: 64px;
    }

    #nav-links {
        margin: auto;
    }

    #nav-links a {
        margin: 0 5vw;
        padding: 2px;
        color: var(--text-color);
        text-decoration: none;
        display: inline-block;
        position: relative;
    }

    /* nesting styles would be pretty useful here... */

    #nav-links a::before {
        display: block;
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        background-color: var(--accent-color);
        opacity: 0.5;
        height: 100%;
        /* highlight transition. I think its cool, please dont remove */
        width: 0;
        transition: width 0.6s;
    }

    #nav-links a:hover::before {
        /* highlight transition */
        width: 100%;
        transition: width 0.6s;
    }

    @media screen and (max-width: 900px) {
        #nav-links a:not(.keep-mobile) {
            display: none;
        }
    }
</style>
