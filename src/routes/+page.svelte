
<svelte:head>
    <title>South Bay Robotics</title>
</svelte:head>

<div id="intro" class="section">
    <h1 id="h-weare" class="intro-header">WE ARE</h1>
    <h1 id="h-sb" class="intro-header">SOUTH BAY</h1>
    <h1 id="h-r" class="intro-header">ROBOTICS</h1>
    <p id="entropy">A FRC robotics team based in the South San Fransisco Bay Area <span id="secret-nickname">AKA "The Nekonauts"</span></p>
</div>

<div id="about" class="section">
    <h1>About (placeholder)</h1>
</div>

<div id="donate" class="section">
    <h1>Donate (placeholder)</h1>
</div>

<div id="contact" class="section">
    <h1>Contact (placeholder) (might change to a footer section)</h1>
</div>

<style>
    .section {
        width: 100%;
        height: 100vh;
        box-sizing: border-box;
        padding-left: 5px;
    }

    .section:first-child {
        height: calc(100vh - 64px);
        overflow-x: hidden;
        padding-left: 0;
        color: var(--text-color);
    }

    .intro-header {
        position: relative;
        font-size: 3.5em;
        box-sizing: border-box;
        padding: 10px 10px 0px 10px;
        background-color: var(--accent-color);
    }

    #intro {
        background-color: var(--bg-color);
    }

    #h-weare {
        top: 12vh;
        left: 10vw;
        width: 90vw;
    }

    #h-sb {
        top: 10vh;
        left: 15vw;
        width: 85vw;
    }

    #h-r {
        top: 8vh;
        left: 20vw;
        width: 80vw;
    }

    /* entropy... intro-p... */
    #entropy {
        max-width: 80vw;
        position: relative;
        top: 5vh;
        left: 20vw;
    }

    #secret-nickname {
        display: none;
    }

    @media screen and (max-width: 950px) {
        .section {
            height: 65vh !important;
        }

        .intro-header {
            font-size: 2em;
        }

        #h-weare {
            top: 5vh;
            left: 10vw;
        }

        #h-sb {
            top: 3vh;
            left: 15vw;
        }

        #h-r {
            top: 1vh;
            left: 20vw;
        }

        #entropy {
            top: 1vh;
        }
    }
</style>
