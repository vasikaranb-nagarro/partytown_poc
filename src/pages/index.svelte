<script>
  import { metatags, goto, afterPageLoad } from "@roxi/routify";
  metatags.title = "My Routify app";
  metatags.description = "Description coming soon...";

  function logPageLoad() {
    window.dtrum?.setPage({
			name: 'home',
			group: 'pages',
		});
  }

  $afterPageLoad(() => { 
    logPageLoad();
  });
</script>

<h1>Routify Starter Template</h1>





<button class="glow-on-hover" type="button" on:click={$goto("/tweets")}>tweets</button>

<button class="glow-on-hover" on:click={logPageLoad }>logPageLoad</button>
