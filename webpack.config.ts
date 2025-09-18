import * as path from 'path';
import * as webpack from 'webpack';

import { buildWebpackConfig } from './config/buildWebpackConfig';
import { Env } from './config/types/config';

export default (env: Env): webpack.Configuration => {
  const mode = env.mode || 'development';
  const isDev = env.mode === 'development';

  return buildWebpackConfig({
    mode,
    paths: {
      src: path.resolve(__dirname, 'src'),
      entry: path.resolve(__dirname, 'src', 'index.tsx'),
      dist: path.resolve(__dirname, 'dist'),
      html: path.resolve(__dirname, 'public', 'index.html'),
      favicon: path.resolve(__dirname, 'public', 'favicon.ico'),
      root: path.resolve(__dirname),
    },
    isDev,
    port: env.port || 3000,
  });
};
