import { defineConfig } from "vite";
import { svelte } from "@sveltejs/vite-plugin-svelte";
import preprocess from "svelte-preprocess";

import path from 'path';
import { partytownVite } from '@builder.io/partytown/utils';
export default defineConfig({
  server: {
    port: 5000,
  },
  plugins: [
    svelte({
      preprocess: [preprocess()],
    }),
	partytownVite({
        dest: path.join(__dirname, 'dist', '~partytown'),
      }),
  ],
});
