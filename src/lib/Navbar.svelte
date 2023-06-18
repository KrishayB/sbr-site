
<nav id="navbar">
    <a href="/"><img id="logo" alt="south bay robotics logo" src="/favicon.png"></a>
    <div id="nav-links">
        <a class="keep-mobile" href="/">Home</a>
        <a href="/#about">About</a>
        <a href="/#donate">Donate</a>
        <a href="/#contact">Contact</a>
        <a class="keep-mobile" href="/blog">Blog</a>
    </div>
</nav>

<style>
    #navbar {
        padding: 0px 10px;
        background-color: black;
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
        color: var(--primary-text-dark);
        text-decoration: none;
        display: inline-block;
        position: relative;
    }

    #nav-links a:hover {
        color: var(--hover-text-dark);
    }

    /* nesting styles would be pretty useful here... */

    #nav-links a::before {
        display: block;
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        background-color: var(--highlight);
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
