<script lang="ts">
  import { base } from '$app/paths';
</script>

<svelte:head>
    <title>South Bay Robotics</title>
</svelte:head>

<div id="intro" class="section">
    <div id="d-img"></div>
    <div id="d-ovr"></div>

    <div id="h1-container">
        <h1 id="h-weare" class="intro-header">WE ARE</h1>
        <h1 id="h-sb" class="intro-header">SOUTH BAY</h1>
        <h1 id="h-r" class="intro-header">ROBOTICS</h1>
    </div>

    <p id="entropy">
        A community FRC robotics team based in the South San Fransisco Bay Area.
    </p>

    <div class="arrow"></div>
</div>

<div id="about" class="section text-section">
    <h1 id="h-about">About</h1>
    <p>
      South Bay Robotics is an independent, student-led First Robotics team
      participating in the First Robotics Competition (FRC). We are a small and
      spirited team, operating as a garage-based team and upholding our
      commitment to provide a launchpad for all to uncover, experiment, and
      ultimately bring their innovative ideas to life.
    </p>

    <p>
      Our narrative is deeply intertwined with the legacy of Valkyrie Robotics,
      a once-acclaimed community FRC team dedicated to employing
      industry-standard technologies to achieve victory. Unfortunately, 2023
      saw the unexpected dissolution of Valkyrie Robotics due to an array of
      unforeseen events and the departure of key mentors. This left us standing
      at a critical juncture - should we chart our own course or carry the
      beacon of Valkyrie's legacy forward? We chose to honor the latter.
    </p>

    <p>
      As a team primarily comprised of students, we recognize the need for
      creative solutions to address the challenges of today's rapidly evolving
      world. We are devoted to nurturing an environment that inspires
      innovative thinking and ardently actualizes these ideas. Our mission is
      to equip our students to work in STEM and business sectors, molding them
      into influential individuals capable of driving large-scale change. At
      South Bay Robotics, our vision extends beyond just 'competition'; our aim
      is to inspire creation, incite innovation, and instigate revolution. At
      South Bay Robotics, we aren't just building robots; we're building the
      leaders of tomorrow.
    </p>

    <h2 id="tenents">Core Tenents</h2>
    <div id="d-tenents">
        <div>
            <div id="d-education" class="tenent">
                <h3 id="h-education">Education</h3>
                <p class="ten-text">Preparing the students of today for the industries of tomorrow through hands on experience with industry-standard tools and equipment.</p>
            </div>
        </div>
        <div>
            <div id="d-accessibilty" class="tenent">
                <h3 id="h-accessibility">Accessibility</h3>
                <p class="ten-text">A membership base consisting of 8th-12th graders from all over the South Bay, of all different ethnic, educational, and financial backgrounds.</p>
            </div>
        </div>
        <div>
            <div id="d-networking" class="tenent">
                <h3 id="h-networking">Networking</h3>
                <p class="ten-text">Allowing members to form strong relationships with fellow like-minded individuals passionate in STEM and professionals knowledgeable in their respective fields.</p>
            </div>
        </div>
    </div>
</div>

<div id="donate" class="section text-section">
    <h1 id="h-donate">Donate</h1>
    <p>
      Thank you so much for considering donating. Generous donor support is the
      lifeblood of South Bay Robotics.
    </p>

    <p>
      As a community team comprised of multiple schools all across the South Bay,
      we unfortunately do not receive the same benefits that exclusive school
      teams do, namely free facilities and guaranteed funding. Consequently, we
      almost exclusively rely on grants and donations - from people like you - to
      exist.
    </p>

    <p>
      Maintaining a team is extremely expensive, and every dollar for us
      counts. <b>Thank you - our gratefulness cannot be overstated.</b>
    </p>

    <img id="i-team" src="{base}/photos/team.jpg" alt="Team Barbeque"/>

    <form method="post" action="https://www.paypal.com/cgi-bin/webscr" class="paypal-button" target="_top"><div class="hide" id="errorBox"></div><input type="hidden" name="button" value="donate"><input type="hidden" name="item_name" value="Charitable Donation"><input type="hidden" name="quantity" value="1"><input type="hidden" name="currency_code" value="USD"><input type="hidden" name="shipping" value="0"><input type="hidden" name="tax" value="0"><input type="hidden" name="cmd" value="_donations"><input type="hidden" name="business" value="chairman@valkyrierobotics.com"><input type="hidden" name="bn" value="JavaScriptButton_donate"><input type="hidden" name="env" value="www"><button id="b-dono" type="submit" class="paypal-button large">Donate</button></form>
</div>

<style>
    .section {
        width: 100%;
        min-height: calc(100vh - 50px);
        box-sizing: border-box;
        font-size: 2.5vh;
    }

    .section:first-child {
        height: calc(100vh - 64px);
        overflow-x: hidden;
        padding-left: 0;
        color: var(--text-color);
    }

    #intro {
        position: relative;
        min-height: 675px;
    }

    #d-img {
        position: absolute;
        width: 100%;
        height: 100%;
        background-image: url("/photos/rgbrobot.png");
        background-size: cover;
        background-position: bottom;
        background-attachment: fixed;
        background-repeat: no-repeat;
        z-index: 0;
    }

    #d-ovr {
        position: absolute;
        width: 100%;
        height: 100%;
        background-color: var(--bg2-color);
        opacity: 0.5;
        z-index: 0;
    }

    #h1-container {
      display: flex;    
      align-items: end;
      flex-direction: column;
      justify-content: start;
    }

    @keyframes slidefromright {
        0% {
            transform: translateX(300vw);
        }
        100% {
            transform: translateX(0);
        }
    }

    .intro-header {
        z-index: 1;
        margin: .5em 0 0 0;
        font-size: 2.5em;
        font-size: max(46px, 2.5em);
        padding: 0 12px;
        transform: translateX(300vw);
        animation-name: slidefromright;
        animation-duration: 1s;
        animation-fill-mode: forwards;
    }

    #h-weare {
        margin-top: 1.75em;
        min-width: 300px;
        width: 82vw;
        color: var(--bg-color);
        background-color: var(--red);
    }

    #h-sb {
        min-width: 280px;
        width: 72vw;
        color: var(--bg-color);
        background-color: var(--green);
        animation-delay: 0.5s;
    }

    #h-r {
        min-width: 260px;
        width: 62vw;
        color: var(--bg-color);
        background-color: var(--blue);
        animation-delay: 1s;
    }

    #entropy {
        color: var(--text-color);
        bottom: 5em;
        position: absolute;
        margin-left: auto;
        margin-right: auto;
        left: 0;
        right: 0;
        text-align: center;
        width: 50%;
    }

    .arrow {
        position: absolute;
        bottom: 0;
        width: 100%;
        height: 20px;
        background-color: var(--bg-color);
    }

    .arrow:before, .arrow:after {
        content: '';
        position: absolute;
        bottom: 100%;
        width: 50%;
        box-sizing: border-box;
    }

    .arrow:before {
        right: 50%;
        border-bottom: 50px solid var(--bg-color);
        border-right: 50px solid transparent;
    }

    .arrow:after {
        left: 50%;
        border-bottom: 50px solid var(--bg-color);
        border-left: 50px solid transparent;
    }


    .text-section {
        display: flex;
        align-items: center;
        flex-direction: column;
    }

    .text-section > h1 {
        color: var(--text-color);
    }

    .text-section > h2 {
        color: var(--text-color);
    }

    .text-section > p {
        color: var(--text-color);
        width: 80%;
        max-width: 1000px;
        font-size: .9em;
    }

    #about {
        background-color: var(--bg-color);
    }

    @keyframes fadein {
        from {
            opacity: 0;
        }

        to {
            opacity: 1;
        }
    }

    #d-tenents {
        width: max(350px, 50%);
        display: inline-flex;
        justify-content: space-between;
        position: relative;
        margin-bottom: 5em;
    }

    .tenent {
        width: 7.5em;
        height: 3.5em;
        transition: .5s;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 2em;
        flex-direction: column;
        backdrop-filter: blur(20px);
        opacity: 0.95;
        background-color: rgba(0, 0, 0, 0.5);
    }

    .tenent:hover {
        width: 100%;
        height: auto;
        z-index: 3;
    }

    .tenent:hover > .ten-text {
        display: block;
        opacity: 0;
        animation-name: fadein;
        animation-fill-mode: forwards;
        animation-duration: .5s;
        animation-delay: .5s;
    }

    .ten-text {
        display: none;
        width: 75%;
    }

    #d-education {
        border: 3px solid var(--red);
        position: absolute;
        left: 0;
        text-align: center;
        /*background-color: color-mix(in srgb, var(--red) 25%, var(--bg-color));*/
        background-color: var(--mix-1);
    }

    #d-education > p {
        color: var(--red);
    }

    #h-education {
        color: var(--red);
    }

    #d-accessibilty{
        border: 3px solid var(--green);
        position: absolute;
        transform: translateX(-50%);
        text-align: center;
        /*background-color: color-mix(in srgb, var(--green) 25%, var(--bg-color));*/
        background-color: var(--mix-2);
    }

    #d-accessibilty > p {
        color: var(--green);
    }

    #h-accessibility{
        color: var(--green);
    }

    #d-networking {
        border: 3px solid var(--blue);
        position: absolute;
        right: 0;
        text-align: center;
        /*background-color: color-mix(in srgb, var(--blue) 25%, var(--bg-color));*/
        background-color: var(--mix-3);
    }

    #d-networking > p {
        color: var(--blue);
    }

    #h-networking{
        color: var(--blue);
    }

    #donate {
        background-color: var(--bg2-color);
    }

    #b-dono {
        all: unset;
        border: 1px solid var(--purple);
        color: var(--purple);
        padding: .5em .5em .5em .5em;
        cursor: pointer;
        margin: 2em 0 2em 0;
        font-size: 1.5em;
    }

    #b-dono:hover {
        background-color: var(--purple);
        color: var(--bg2-color);
    }

    #i-team {
        width: 70%;
        max-width: 800px;
        margin-top: 5em;
    }

    @media screen and (max-width: 980px) {
        #d-img {
            /* smaller image for mobile */
            background-image: url("/photos/rgbrobot_mobile.png");
        }

        #entropy {
            width: 70%;
            font-size: 1.25em;
            bottom: 7em;
        }

        .intro-header {
            font-size: min(55px, 2.5em);
        }
    }
</style>
