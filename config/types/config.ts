export interface Env {
  mode: 'development' | 'production';
  port: number;
}
export interface BuildOptions {
  mode: 'development' | 'production';
  paths: {
    src: string;
    entry: string;
    dist: string;
    html: string;
    favicon: string;
    root: string;
  };
  isDev: boolean;
  port: number;
}
