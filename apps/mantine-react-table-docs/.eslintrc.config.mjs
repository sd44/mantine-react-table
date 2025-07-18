import pluginJs from "@eslint/js";
import nextPlugin from "@next/eslint-plugin-next";
import globals from "globals";
import tseslint from "typescript-eslint";

export default [
	pluginJs.configs.recommended,
	...tseslint.configs.recommended,

	{
		plugins: {
			"@next/next": nextPlugin, // 将插件添加到配置对象中
		},
		rules: {
			...nextPlugin.configs["core-web-vitals"].rules,
		},
	},

	{
		languageOptions: {
			parser: tseslint.parser,
			parserOptions: {
				sourceType: "module",
				ecmaFeatures: {
					jsx: true,
				},
			},
			globals: {
				...globals.browser,
			},
		},
		rules: {
			"@next/next/no-img-element": "off",

			"@typescript-eslint/ban-ts-comment": "off",
			"@typescript-eslint/ban-types": "off",
			"@typescript-eslint/no-explicit-any": "off",
			"@typescript-eslint/no-unused-vars": "off",
			"@typescript-eslint/no-var-requires": "off",

			// Consistent type imports rule
			"@typescript-eslint/consistent-type-imports": [
				"warn",
				{
					prefer: "type-imports",
					disallowTypeAnnotations: true,
					fixStyle: "inline-type-imports",
				},
			],

			"react/jsx-no-target-blank": [
				"error",
				{
					allowReferrer: true,
				},
			],
		},
	},
];
