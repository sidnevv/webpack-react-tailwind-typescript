import webpack from 'webpack';

import { buildDevServer } from './buildDevServer';
import { buildLoaders } from './buildLoaders';
import { buildPlugins } from './buildPlugins';
import { buildResolvers } from './buildResolvers';
import { BuildOptions } from './types/config';

export function buildWebpackConfig(options: BuildOptions): webpack.Configuration {
  const { mode, paths, isDev } = options;
  return {
    mode,
    entry: paths.entry,
    output: {
      path: paths.dist,
      filename: '[name].[contenthash].js',
      publicPath: '/',
      clean: true,
    },
    plugins: buildPlugins(options),
    module: {
      rules: buildLoaders(options),
    },
    resolve: buildResolvers(options),
    devtool: isDev ? 'source-map' : 'eval-source-map',
    devServer: isDev ? buildDevServer(options) : undefined,
    cache: {
      type: 'filesystem',
    },
    optimization: {
      minimize: true,
    },
  };
}
