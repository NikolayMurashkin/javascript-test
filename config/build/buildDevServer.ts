import path from 'node:path';
import { Configuration } from 'webpack-dev-server';
import { BuildOptions } from './types/types';

export function buildDevServer({ port, paths }: BuildOptions): Configuration {
    return {
        port: port ?? 3000,
        open: true,
        historyApiFallback: {
            rewrites: [
                {
                    from: /favicon.ico/,
                    to: path.resolve(paths.public, 'favicon.ico'),
                },
            ],
        },
        hot: true,
    };
}
