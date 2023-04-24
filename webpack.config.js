import { resolve } from 'path'; // <-get absolute location for saving
import { name } from './package.json';
import nodeExternals from 'webpack-node-externals';
export const entry = "./src/index.js";
export const output = {
    path: resolve(__dirname, 'dist'),
    filename: "index.js",
    library: name,
    libraryTarget: "commonjs2" //<- to which version are we compiling js 
};
export const module = {
    rules: [
        {
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            use: {
                loader: "babel-loader"
            }
        },
        {
            test: /\.css$/i,
            use: ["style-loader", "css-loader"]
        }
    ]
};
export const target = 'node';
export const Externals = [nodeExternals()];