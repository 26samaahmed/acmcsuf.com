<script lang="ts">
  import AcmButton from '$lib/components/button/button.svelte';
</script>

<map name="capy-power">
  <area
    alt="General Team"
    title="General Team"
    href="/teams#general"
    coords="200,10 160,50 200,90 240,50 "
    shape="polygon"
  />
  <area
    alt="AI Team"
    title="AI Team"
    href="/teams#ai"
    coords="330,60 290,100 330,140 370,100"
    shape="polygon"
  />
  <area
    alt="Design Team"
    title="Design Team"
    href="/teams#design"
    coords="370,170 330,210 370,250 410,210"
    shape="polygon"
  />
  <area
    alt="Dev Team"
    title="Dev Team"
    href="/teams#dev"
    coords="330,290 290,330 330,370 370,330"
    shape="polygon"
  />
  <area
    alt="Algo Team"
    title="Algo Team"
    href="/teams#algo"
    coords="200,340 160,380 200,420 240,380"
    shape="polygon"
  />
  <area
    alt="Node buds Team"
    title="Node Buds Team"
    href="/teams#nodebuds"
    coords="80,290 40,330 80,370 120,330"
    shape="polygon"
  />
  <area
    alt="Open Source Software Team"
    title="Open Source Software Team"
    href="/teams#oss"
    coords="50,170 10,210 50,250 90,210"
    shape="polygon"
  />
  <area
    alt="Game Dev Team"
    title="Game Dev Team"
    href="/teams#gamedev"
    coords="90,60 50,100 90,140 130,100"
    shape="polygon"
  />
</map>

<section class="hero-container">
  <div class="hero-inner-container">
    <div class="hero-text">
      <h1 class="acm-heavier size-xl">
        <span>We are the largest</span> <span class="multicolor-text">Computer Science</span>
        <span>community at CSUF</span>
      </h1>
      <div class="join-button">
        <AcmButton text="Join today!" link="/discord" redirect={true} />
      </div>
    </div>

    <img
      usemap="#capy-power"
      src="/assets/capy-power.svg"
      alt="Chip the Capybara surrounded by all ACM Team badges"
    />
  </div>
</section>

<style>
  section {
    display: grid;
  }

  section .hero-inner-container {
    display: grid;
    grid-template-columns: 1fr;
    align-items: center;
    gap: 1em;
  }

  section .hero-inner-container .hero-text {
    display: grid;
    align-items: center;
    text-align: center;
    gap: 1em;
  }

  section .hero-inner-container .hero-text span {
    display: block;
  }

  /* Since we gave a display block to the span elements within the h1, 
   * each will cover the entire page width, causing issues with the 
   * multicolor linear-gradient (covering the webpage width rather than 
   * the actual text ONLY). Giving a display of inline-block to the span 
   * containing the multicolor text resolved this issue.
   */
  section .hero-inner-container .hero-text span.multicolor-text {
    display: inline-block;
    background: var(--acm-union);
    background-clip: text;
    -webkit-background-clip: text;
    color: transparent;
  }

  section .hero-inner-container .hero-text .join-button {
    display: grid;
    justify-self: center;
  }

  section .hero-inner-container img {
    max-width: 90%;
    justify-self: center;
  }

  @media screen and (min-width: 1000px) {
    section {
      display: grid;
      place-items: center;
      align-items: center;
    }

    section .hero-inner-container {
      display: grid;
      grid-template-columns: 1fr 1fr;
      align-items: center;
      gap: 4em;
    }

    section .hero-inner-container .hero-text {
      text-align: start;
      margin: 2em;
    }

    section .hero-inner-container .hero-text .join-button {
      justify-self: start;
    }
  }
</style>
