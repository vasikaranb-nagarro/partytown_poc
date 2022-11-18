<script>
  import { metatags, goto } from "@roxi/routify";
  metatags.title = "My Routify app";
  metatags.description = "Description coming soon...";
</script>

<h1>Routify Starter Template</h1>



<button class="glow-on-hover" type="button" on:click={$goto("/tweets")}>tweets</button>
