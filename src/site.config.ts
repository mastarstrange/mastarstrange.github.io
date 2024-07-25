import type { SiteConfig } from "@/types";
import type { AstroExpressiveCodeOptions } from "astro-expressive-code";

export const siteConfig: SiteConfig = {
	author: "thuvasooriya",
	title: "humbled",
	description: "hot mess of a site that also serves as a brain dump of a fucking cool person",
	lang: "en-US",
	ogLocale: "en_US",
	// Date.prototype.toLocaleDateString() parameters, found in src/utils/date.ts.
	date: {
		locale: "en-US",
		options: {
			day: "numeric",
			month: "short",
			year: "numeric",
		},
	},
	// webmentions: {
	// 	// Webmention.io API endpoint. Get your own here: https://webmention.io/, and follow this blog post: https://astro-cactus.chriswilliams.dev/posts/webmentions/
	// 	// link: "https://webmention.io/astro-cactus.chriswilliams.dev/webmention",
	// },
};

// Used to generate links in both the Header & Footer.
export const menuLinks: Array<{ title: string; path: string }> = [
	{
		title: "home",
		path: "/",
	},
	{
		title: "about",
		path: "/about/",
	},
	{
		title: "resume",
		path: "https://docs.thuvasooriya.me/cv.pdf",
	},
	{
		title: "blog",
		path: "/posts/",
	},
];

// https://expressive-code.com/reference/configuration/
export const expressiveCodeOptions: AstroExpressiveCodeOptions = {
	// One dark, one light theme => https://expressive-code.com/guides/themes/#available-themes
	// themes: ["one-dark-pro", "github-light"],
	themes: ["material-theme-ocean", "github-light"],
	themeCssSelector(theme, { styleVariants }) {
		// If one dark and one light theme are available
		// generate theme CSS selectors compatible with cactus-theme dark mode switch
		if (styleVariants.length >= 2) {
			const baseTheme = styleVariants[0]?.theme;
			const altTheme = styleVariants.find((v) => v.theme.type !== baseTheme?.type)?.theme;
			if (theme === baseTheme || theme === altTheme) return `[data-theme='${theme.type}']`;
		}
		// return default selector
		return `[data-theme="${theme.name}"]`;
	},
	useThemedScrollbars: true,
	styleOverrides: {
		frames: {
			frameBoxShadowCssValue: "none",
		},
		uiLineHeight: "inherit",
		codeFontSize: "0.8rem",
		codeLineHeight: "1.3rem",
		borderRadius: "5px",
		codePaddingInline: "1rem",
		codePaddingBlock: "0.8rem",
		codeFontFamily:
			'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;',
	},
};
