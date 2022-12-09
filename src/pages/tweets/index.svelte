<script>
  import { onMount } from "svelte";
  import { afterPageLoad, goto } from "@roxi/routify";

  let tweetblock = true;

  onMount(async () => {
    reload();
  });

  function logPageLoad() {
    window.dtrum?.setPage({
			name: '\tweets',
			group: 'tweets',
		});
  }

  $afterPageLoad(() => { 
    logPageLoad();
  });

  function reload() {
    logPageLoad();
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
