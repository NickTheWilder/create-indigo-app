/* eslint-disable */
/** BEGONE DEMON ESLINT */

const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    mode: "development",
    entry: "./src/index.tsx",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "[name].[contenthash].js"
    },
    module: {
        rules: [
            {
                // handles typescript files
                test: /\.(ts|tsx)$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: "ts-loader"
                    }
                ]
            },
            {
                // handles image assets
                test: /\.(png|jpe?g|gif|svg|ico)$/i,
                type: "asset/resource",
                generator: {
                    filename: "static/[hash][ext][query]"
                }
            },
            {
                // handles css styles
                test: /\.css$/,
                use: [
                    "style-loader",
                    {
                        loader: "css-loader",
                        options: {
                            modules: {
                                localIdentName: "[local]_[hash:base64:7]"
                            }
                        }
                    }
                ]
            }
        ]
    },

    resolve: {
        extensions: [".tsx", ".ts", ".js"]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./public/index.html"
        })
    ],
    devServer: {
        static: path.join(__dirname, "dist"),
        compress: true,
        port: 8080,
        open: true,
        historyApiFallback: true
    }
};
