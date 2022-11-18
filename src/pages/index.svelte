<script>
  import { metatags, goto, afterPageLoad } from "@roxi/routify";
  metatags.title = "My Routify app";
  metatags.description = "Description coming soon...";

  function dyna() {
    window.dtrum?.setPage({
			name: 'pathname',
			group: 'title',
		});
  }

  $afterPageLoad(() => { 
    //dyna();
  });
</script>

<h1>Routify Starter Template</h1>





<button class="glow-on-hover" type="button" on:click={$goto("/tweets")}>tweets</button>

<button on:click={dyna()}>Dyna</button>
