module.exports = {
	content: ["./src/**/*.{html,tsx}"],
	theme: {
		fontFamily: {
			sans: ["Roboto", "sans-serif"],
		},
		extend: {
			colors: {
				primary: "#004482",
				onPrimary: "#FFFFFF",
				primaryContainer: "#bce4fa",
				onPrimaryContainer: "#e30613",
				secondary: "#83d0f5",
				onSecondary: "#004482",
				secondaryContainer: "#bce4fa",
				onSecondaryContainer: "#004482",
				onSecondaryContainerHovered: "rgba(49,19,15,0.08)",
				tertiary: "#e30613",
				onTertiary: "#FFFFFF",
				tertiaryContainer: "#FFDF9D",
				onTertiaryContainer: "#251A00",
				error: "#BA1A1A",
				onError: "#FFFFFF",
				errorContainer: "#FFDAD6",
				onErrorContainer: "#410002",
				background: "#FFFBFF",
				onBackground: "#201A19",
				surface: "#FFF",
				onSurface: "#201A19",
				surfaceVariant: "#F5DDDA",
				onSurfaceVariant: "#534341",
				outline: "#857370",
				shadow: "#000000",
				inverseSurface: "#362F2E",
				inverseOnSurface: "#FBEEEC",
				inversePrimary: "#FFB4A9",
				surfaceTint: "#AA352A",
				surfaceTintColor: "#AA352A",
			},
			gridTemplateColumns: {
				listDetailViewClosed: "max-content auto ",
				listDetailViewOpen: "max-content auto 30%",
			},
			keyframes: {
				ripple: {
					"75%, 100%": {
						transform: "scale(500)",
						opacity: 0,
					},
				},
				progress: {
					"100%": {
						transform: "translateX(0%)",
						opacity: 0,
					},
				},
			},
			transitionProperty: {
				gridTemplateColumns: "grid-template-columns",
			},
			animation: {
				ripple: "ripple 1s cubic-bezier(0, 0, 0.2, 1) infinite",
				progress: "progress 3s ease-out infinite",
			},
		},
	},
	plugins: [],
};
