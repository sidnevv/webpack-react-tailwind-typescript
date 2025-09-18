import type { Configuration as DevServerConfiguration } from 'webpack-dev-server';

import { BuildOptions } from './types/config';

export function buildDevServer({ paths, port }: BuildOptions): DevServerConfiguration {
  return {
    port,
    static: {
      directory: paths.dist,
    },
    compress: true,
    open: true,
    hot: true,
    historyApiFallback: true,
  };
}
