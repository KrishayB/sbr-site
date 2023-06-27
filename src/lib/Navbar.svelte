<script>
    import { base } from "$app/paths";
</script>

<nav id="navbar">
    <a href="{base}/"><img id="logo" src="{base}/favicon.png" alt="south bay robotics logo [svg]"/></a>
    <div id="nav-links">
        <a class="keep-mobile" href="{base}/">Home</a>
        <a href="{base}/#about">About</a>
        <a href="{base}/#donate">Donate</a>
        <a class="keep-mobile" href="{base}/blog">Blog</a>
        <a class="keep-mobile" id="join" href="https://docs.google.com/forms/d/e/1FAIpQLSfj4eeyhy6bzLdCWyisMMxD3JDiBKqnas9Op9Cj2_PMZOSEsg/viewform">Join</a>
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
        font-size: 1.75em;
        display: flex;
        align-items: center;
        justify-content: space-evenly;
    }

    #nav-links a {
        padding: 2px 4px;
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
        background-color: var(--purple);
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

    #join {
        border: 2px solid var(--text-color);
        text-align: center;
        width: 4em;
    }

    @media screen and (max-width: 900px) {
        #nav-links a:not(.keep-mobile) {
            display: none;
        }
    }
</style>
