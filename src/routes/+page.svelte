
<svelte:head>
    <title>South Bay Robotics</title>
</svelte:head>

<div id="intro" class="section">
    <div id="d-img"></div>
    <div id="d-ovr"></div>

    <h1 id="h-weare" class="intro-header">WE ARE</h1>
    <h1 id="h-sb" class="intro-header">SOUTH BAY</h1>
    <h1 id="h-r" class="intro-header">ROBOTICS</h1>
    <p id="entropy">A community FRC robotics team based in the South San Fransisco Bay Area. <span id="secret-nickname">AKA "The Nekonauts"</span></p>

    <div class="arrow"></div>
</div>

<div id="about" class="section text-section">
    <h1 id="h-about">About</h1>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vel est et
      massa pulvinar tempor in vel magna. Cras vitae augue mattis, viverra sem sed,
      malesuada tellus. Aenean pellentesque ultrices luctus. Sed sed dictum erat.
      Phasellus fringilla at mi aliquam ullamcorper. Vivamus elementum lectus id
      auctor rutrum. Duis pulvinar libero sit amet faucibus aliquet. Duis blandit
      neque non dignissim consequat. Vestibulum semper iaculis purus, imperdiet
      cursus nibh posuere quis. Nulla ut velit a augue porta vestibulum a quis nulla.
      Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere
      cubilia curae;
    </p>

    <p>
      Fusce rhoncus tincidunt libero, nec aliquam nibh convallis vehicula. Donec
      pulvinar ligula leo, vitae dictum libero pulvinar ac. In a vulputate urna.
      Suspendisse euismod nunc tortor. Vestibulum placerat fermentum neque eget
      iaculis. Fusce suscipit quis nulla eget blandit. Etiam ornare lacus non lacinia
      accumsan. Sed eros ipsum, ultrices non quam non, porttitor pulvinar sem. Nunc
      sodales volutpat condimentum. Aliquam vel congue libero, ac dapibus tortor.
      Aliquam erat volutpat.
    </p>

    <p>
      Curabitur pharetra interdum metus, sed pellentesque nunc lacinia et. Nullam
      cursus sodales risus quis mollis. Aenean in elementum mi, non blandit quam.
      Praesent arcu est, accumsan et lacinia sit amet, ullamcorper at justo. Nunc ac
      lorem vitae purus pulvinar eleifend. Sed ut velit est. Sed congue non nunc vel
      tincidunt. Pellentesque consequat dignissim sem, vitae sagittis tellus accumsan
      et.
    </p>

    <p>
      Mauris et tristique risus. Quisque et arcu ut lectus dignissim tempus. Vivamus
      lobortis nisi at sagittis convallis. Donec in lorem neque. Etiam finibus purus
      a erat rhoncus, quis elementum diam lobortis. Maecenas vitae sodales lorem. Sed
      sodales nulla vitae suscipit sollicitudin. Cras aliquam tortor diam, at lacinia
      orci euismod non. Integer consectetur arcu et odio semper cursus.
    </p>

    <p>
      Duis ultricies mauris quis porta imperdiet. Sed sed risus porta, pulvinar metus
      eget, condimentum libero. Mauris pellentesque nisl in tellus lobortis, blandit
      gravida lectus sodales. Phasellus in feugiat turpis, ac sagittis dui. Donec
      gravida nunc vitae mauris lacinia volutpat. Suspendisse venenatis ullamcorper
      nisl quis fermentum. Sed ut sapien fringilla, placerat sapien sed, lobortis
      ligula. Maecenas ullamcorper metus sit amet magna suscipit, faucibus mollis
      ligula euismod. In a odio feugiat, vestibulum est in, imperdiet neque. Donec
      quis fringilla nulla, sit amet pretium risus. Pellentesque tincidunt eros at
      diam luctus, gravida dictum justo sodales. Vestibulum aliquam nisl eu dolor
      dapibus consectetur. Sed ac ultricies nulla. Vivamus pretium ipsum ac
      ullamcorper tristique. Sed vitae facilisis felis. 
    </p>
    <h2 id="tenents">-- Tenents --</h2>
    <div id="d-tenents">
        <div class="ten-wrapper">
          <h3 id="h-education">Education</h3>
          <div id="d-education" class="tenent">
            <p class="ten-text">Preparing the students of today for the industries of tomorrow through hands on experience with industry-standard tools and equipment.</p>
          </div>
        </div>

        <div class="ten-wrapper">
          <h3 id="h-accessibility">Accessibility</h3>
          <div id="d-accessibilty" class="tenent">
            <p class="ten-text">A membership base consisting of 8th-12th graders from all over the South Bay, of all different ethnic, educational, and financial backgrounds.</p>
          </div>
        </div>

        <div class="ten-wrapper">
          <h3 id="h-networking">Networking</h3>
          <div id="d-networking" class="tenent">
            <p class="ten-text">Allowing members to form strong relationships with fellow like-minded individuals passionate in STEM and professionals knowledgeable in their respective fields.</p>
          </div>
        </div>
    </div>
</div>

<div id="donate" class="section text-section">
    <h1 id="h-donate">Donate</h1>
    <p>
      Thank you so much for considering donating. Generous donor support is
      lifeblood of keeping South Bay Robotics.
    </p>

    <p>
      As a community team comprised of multiple schools all across the South Bay,
      we unfortunately do not receive the same benefits that exclusive school
      teams do, namely free facilities and guaranteed funding. Consequently, we
      almost exclusively rely on grants and donations- from people like you- to
      exist.
    </p>

    <p>
      Maintaining a team is extremely expensive, and every dollar for us
      counts. Thank you- our gratefulness cannot be overstated.
    </p>

    <a id="a-dono" href="https://www.paypal.com/donate/?business=89Q74XTTVBRMS&no_recurring=0&item_name=TESTING+PAYPAL+EMBED&currency_code=USD">paypal.me/[INSERT DESTINATION]</a>
</div>

<div id="contact">
  <i class="icon fa-solid fa-envelope"></i>
  <i class="icon fa-brands fa-github"></i>
  <i class="icon fa-brands fa-instagram"></i>
</div>

<style>
    .section {
        width: 100%;
        min-height: calc(100vh - 50px);
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
    }

    #intro {
        position: relative;
    }

    #d-img {
        position: absolute;
        width: 100%;
        height: 100%;
        background-image: url("/photos/rgbrobot.jpg");
        background-size: cover;
        background-position: bottom;
        background-attachment: fixed;
        background-repeat: no-repeat;
    }

    .arrow {
      position: absolute;
      bottom: 0;
      width: 100%;
      height: 20px;
      background-color: var(--bg-color);
    }
    .arrow:before,
    .arrow:after {
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

    #d-ovr {
        position: absolute;
        width: 100%;
        height: 100%;
        background-color: var(--bg-color);
        opacity: 0.60;
    }

    #h-weare {
        top: 12vh;
        left: 10vw;
        width: 90vw;
        background-color: var(--red);
        color: var(--bg-color);
    }

    #h-sb {
        top: 10vh;
        left: 15vw;
        width: 85vw;
        background-color: var(--green);
        color: var(--bg-color);
    }

    #h-r {
        top: 8vh;
        left: 20vw;
        width: 80vw;
        background-color: var(--blue);
        color: var(--bg-color);
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
    }

    #about {
        background-color: var(--bg-color);
    }

    #d-tenents {
        display: flex;
        justify-content: space-evenly;
        align-items: start;
        width: 100%;
        margin-bottom: 2em;
    }

    #d-education {
        background-color: var(--red);
    }
    #h-education {
        color: var(--red);
    }

    #d-accessibilty{
        background-color: var(--green);
    }
    #h-accessibility{
        color: var(--green);
    }

    #d-networking {
        background-color: var(--blue);
    }
    #h-networking{
        color: var(--blue);
    }

    .ten-wrapper {
        width: 10em;
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
    }

    .tenent {
        width: 2em;
        height: 2em;
        transition: .8s;
        overflow: hidden;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 1em;
    }
    .tenent:hover {
        width: 20em;
        height: 10em;
    }
    .tenent:hover > .ten-text {
      display: block;    
    }
    .ten-text {
      display: none;
      text-align: center;
    }

    #donate {
        background-color: var(--bg2-color);
    }

    #a-dono {
        all: unset;
        border: 1px solid var(--purple);
        color: var(--purple);
    }

    #contact {
      display: flex;
      flex-direction: row !important;
      justify-content: center;
      gap: 2.5em;
    }

    .icon {
        font-size: 2.5em;
    }

    #entropy {
        max-width: 80vw;
        position: relative;
        top: 5vh;
        left: 20vw;
    }

    #secret-nickname {
        display: none;
    }

/* No alternate rules for now */
/*
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
*/
</style>
