import { buildWebpack } from './config/build/buildWebpack';
import { BuildMode } from './config/build/types/types';
import path from 'node:path';
import { Configuration } from 'webpack';

interface EnvVariables {
    mode?: BuildMode;
    port?: number;
}

export default (env: EnvVariables) => {
    const paths = {
        entry: path.resolve(__dirname, 'src', 'index.tsx'),
        output: path.resolve(__dirname, 'build'),
        html: path.resolve(__dirname, 'public', 'index.html'),
        src: path.resolve(__dirname, 'src'),
        public: path.resolve(__dirname, 'public'),
    };

    const config: Configuration = buildWebpack({
        mode: env.mode ?? 'development',
        port: env.port ?? 4000,
        paths,
    });

    return config;
};