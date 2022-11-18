(function (g, l, a, z, e, r, s, d) {
  g[r] = function () {
    (g[r].q = g[r].q || []).push(arguments);
  };
  g[r]("setHost", s);
  g[r]("setCdn", z);
  g[r]("setEnv", d);
  g[r]("setAccId", 68);
  var s = l.createElement(a),
    el = l.getElementsByTagName(a)[0];
  s.async = 1;
  //s.type = "text/partytown";
  s.src = z + e;
  el.parentNode.insertBefore(s, el);
})(
  window,
  document,
  "script",
  "https://cdn.glaze.ai",
  "/snippet/snippet-light.min.js",
  "_glaze",
  "https://stat.glaze.ai/",
  "prod"
);
