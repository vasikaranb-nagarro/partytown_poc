<script>
  import { onMount } from "svelte";
  import { metatags, goto } from "@roxi/routify";

  let tweetblock = true;

  onMount(async () => {
    reload();
  });

  function reload() {
    let elementcontent = `<a
		id="twitter_timeline"
		class="twitter-timeline"
		data-tweet-limit="1"		
		data-chrome="nofooter noborders"
		data-dnt="true"
		href="https://twitter.com/QwikDev">		
	</a>`;
    if (tweetblock) {
      setTimeout(() => {
        tweetblock.innerHTML = elementcontent;
        console.log(tweetblock);
        let script = document.createElement("script");
        script.src = "https://platform.twitter.com/widgets.js";
        document.body.append(script);
        window.dispatchEvent(new CustomEvent("ptupdate"));
      }, 300);
    }
  }
</script>

<button class="glow-on-hover" type="button" on:click={$goto("/")}>back</button>
<div id="tweetBlock" bind:this={tweetblock} />

<style>
  #tweetBlock {
    margin: 0.3rem;
	width: 500px;
	height: 500px;
  }
</style>
