import prettierPluginSortImports from '@trivago/prettier-plugin-sort-imports';

/** @type {import('prettier').Config} */
export default {
  printWidth: 100,
  tabWidth: 2,
  useTabs: false,
  semi: true,
  singleQuote: true,
  jsxSingleQuote: false,
  trailingComma: 'all',
  bracketSpacing: true,
  bracketSameLine: false,
  arrowParens: 'always',
  plugins: [prettierPluginSortImports],
  importOrder: ['^react(.*)$', '<THIRD_PARTY_MODULES>', '^@/(.*)$', '^[./]', '.((?:s[ac]|c)ss)$'],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
  importOrderParserPlugins: ['typescript', 'jsx'],
};
