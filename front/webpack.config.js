const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');



module.exports = {
    entry: "./scripts/index.js",
    output: {
        path: path.resolve(__dirname, "public"),
        filename: "bundle.js",
        clean: true

    },
    module: {
        rules: []
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './index.html',
            filename: 'index.html'
        }),
        new HtmlWebpackPlugin({
            template: './pages/combos.html',
            filename: 'combos.html'
        }),
        new HtmlWebpackPlugin({
            template: './pages/Favoritas.html',
            filename: 'Favoritas.html'
        }),
        new HtmlWebpackPlugin({
            template: './pages/formulario.html',
            filename: 'formulario.html'
        }),
        new CopyPlugin({
            patterns: [
                {
                    from: "styles",
                    to: "styles"
                },
                {
                    from: "images",
                    to: "images"
                }
            ]
        })

    ]
};