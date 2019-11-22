const path = require("path");

const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = () => {
    const BUILD_FOLDER = "dist";
    const BUNDLE_NAME = "bundle";

    return {
        context: path.join(__dirname, "src"),
        entry: ["./index.js"],
        output: {
            path: path.join(__dirname, BUILD_FOLDER),
            filename: `${BUNDLE_NAME}.js`,
        },
        module: {
            rules: [
                {
                    test: /\.js$/,
                    exclude: /node_modules/,
                    use: ["babel-loader"],
                },
                {
                    test: /\.css$/,
                    use: [{ loader: "style-loader" }, { loader: "css-loader" }],
                },
            ],
        },
        resolve: {
            extensions: [".js", ".jsx"],
            modules: [path.join(__dirname, "node_modules")],
        },
        plugins: [
            new HtmlWebpackPlugin({
                template: "index.html",
            }),
        ],
        devtool: "source-map",
        devServer: {
            historyApiFallback: true,
            contentBase: "./",
            compress: true,
            open: true,
            stats: "minimal",
            overlay: true,
        },
    };
};
