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
      //   tweetblock.innerHTML = elementcontent;
      //   let script = document.createElement("script");
      //   script.src = "https://platform.twitter.com/widgets.js";
      //   //script.type = 'text/partytown'
      //   script.async = false;
      //   document.body.append(script);
      //   window.dispatchEvent(new CustomEvent("ptupdate"));
      setTimeout(() => {
        tweetblock.innerHTML = elementcontent;
        console.log(tweetblock);
        let script = document.createElement("script");
        script.src = "https://platform.twitter.com/widgets.js";
        script.charset = "utf-8";
        script.type = "text/partytown";
        // script.async = false;
        document.body.append(script);
        window.dispatchEvent(new CustomEvent("ptupdate"));
      }, 300);
    }
  }
</script>

<div id="tweetBlock" bind:this={tweetblock} />
<button on:click={$goto("/")}>back</button>

<style>
  #tweetBlock {
    margin: 0.3rem;
  }
</style>
