<script>
  import { Router } from "@roxi/routify";
  import { routes } from "../.routify/routes";

  const config = {
		queryHandler: {
			parse: (search) => Object.fromEntries(new URLSearchParams(search)),
			stringify: (params) => '?' + new URLSearchParams(params).toString(),
		},
		urlTransform: {
			apply: url => `/test${url}`, //external URL
      remove: url => url.replace('/test', ''), //internal URL
		},
		useHash: false,
	};
</script>

<Router {routes} {config}  />