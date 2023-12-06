import { defineConfig } from "@pandacss/dev";

export default defineConfig({
	// Whether to use css reset
	preflight: true,

	// Where to look for your css declarations
	include: ["./src/app/*.{ts,tsx}", "./src/components/*.{ts,tsx}"],

	// Files to exclude
	exclude: [],

	// Useful for theme customization
	theme: {
		extend: {
			keyframes: {
				"rainbow-bg": {
					"0%": { backgroundPositionX: "0%" },
					"100%": { backgroundPositionX: "100%" },
				},
			},
		},
	},

	// The output directory for your css system
	outdir: "styled-system",
});
