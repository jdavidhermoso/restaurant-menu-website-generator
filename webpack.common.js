const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const HandlebarsPlugin = require("handlebars-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const buildHash = new Date().getTime();
const restaurantData = require("./restaurant.json");

module.exports = {
    entry: { app: "./src/js/main.js" },
    output: {
        filename: `[name].${buildHash}.bundle.js`,
        path: path.resolve(__dirname, 'dist'),
    },
    module: {
        rules: [
            {
                test: /\.(sa|sc|c)ss$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader
                    },
                    'css-loader',
                    {
                        loader: 'sass-loader',
                        options: {
                            prependData: `@import "themes/${restaurantData.theme || 'default'}";`,
                        },
                    },
                ],
            },
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: `[name].${buildHash}.css`
        }),
        new CopyPlugin([
            { from: 'assets/favicon.ico', to: '' }
        ]),
        // new HtmlWebpackPlugin({
        //     template: './src/index.hbs',
        // }),
        new HandlebarsPlugin({
            // path to hbs entry file(s). Also supports nested directories if write path.join(process.cwd(), "app", "src", "**", "*.hbs"),
            entry: path.join(process.cwd(), "src", "*.hbs"),
            // output path and filename(s). This should lie within the webpacks output-folder
            // if ommited, the input filepath stripped of its extension will be used
            output: path.join(process.cwd(), "dist", "[name].html"),
            // you can als add a [path] variable, which will emit the files with their relative path, like
            // output: path.join(process.cwd(), "build", [path], "[name].html"),

            // data passed to main hbs template: `main - template(data)`
            data: {
                buildHash,
                restaurant: restaurantData,
                menu: require("./menu.json")
            },
        })
    ]
};
