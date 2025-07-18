import perfectionist from "eslint-plugin-perfectionist";
import tseslint from "typescript-eslint";

export default tseslint.config(
	// 全局忽略的目录
	{
		ignores: ["dist/", "locales/", "node_modules/"],
	},

	// 继承推荐的配置
	...tseslint.configs.recommended,

	// perfectionist.configs["recommended-natural"],
	{
		plugins: {
			perfectionist,
		},
		rules: {
			"no-duplicate-imports": "warn",
			"@typescript-eslint/ban-ts-comment": "off",
			"@typescript-eslint/ban-types": "off",
			"@typescript-eslint/no-explicit-any": "off",
			"@typescript-eslint/no-unused-vars": "off",
			"@typescript-eslint/consistent-type-imports": [
				"warn",
				{
					prefer: "type-imports",
					disallowTypeAnnotations: true,
					fixStyle: "inline-type-imports",
				},
			],
			"perfectionist/sort-imports": [
				"warn",
				{
					type: "natural",
					order: "asc",
					groups: [
						"clsx",
						"style",
						"react",
						"tanstack",
						"mantine",
						"mrt",
						["sibling", "sibling-type", "parent", "parent-type"],
					],
					customGroups: {
						// FIX:  maybe need to be fixed these regex
						value: {
							clsx: "clsx",
							style: [".*\\.module\\.css$"],
							react: ["react", "react-*"],
							storybook: ["@storybook\/.*"],
							tanstack: "@tanstack\/.*",
							mantine: "@mantine\/.*", //
							mrt: ["^\.\/MRT_.*", "^\.\.\/.*MRT_.*", "^\.\.\/\.\.\/src\/.*"],
							faker: "@faker\/.*",
						},
						type: {
							react: "react",
						},
					},
				},
			],
		},
	},
);
