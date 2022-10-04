import { defineConfig } from "astro/config";
import preact from "@astrojs/preact";
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";

export default defineConfig({
	integrations: [
		preact(),
		react(),
		tailwind()
	],
	site: "https://EccentricVamp.github.io",
});