const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");

module.exports = (env, argv) => ({
	entry: {
		main: "./src/App/web/index.tsx",
	},
	module: {
		rules: [
			{
				test: /\.tsx?$/,
				use: "babel-loader",
				exclude: /node_modules/,
			},
			{
				test: /\.css$/,
				sideEffects: true,
				use: [
					MiniCssExtractPlugin.loader,
					"css-loader",
					"postcss-loader",
				],
			},
			{
				test: /\.(png|woff|woff2|eot|ttf|svg|jpe?g)$/,
				type: "asset/resource",
			},
		],
	},
	resolve: {
		modules: [path.resolve(__dirname, "src"), "node_modules"],
		extensions: [".tsx", ".ts", ".js"],
	},
	output: {
		filename: "[name].js",
		path: path.resolve(__dirname, "dist"),
		clean: true,
		assetModuleFilename: "assets/[name][ext]",
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: "src/App/web/index.html",
			inject: "body",
		}),
		new MiniCssExtractPlugin(),
		new webpack.DefinePlugin({
			"process.env.MODE": argv
				? JSON.stringify(argv.mode)
				: "development",
		}),
	],
	devServer: {
		static: "./dist",
		historyApiFallback: true,
	},
	optimization: {
		runtimeChunk: "single",
		splitChunks: {
			cacheGroups: {
				vendor: {
					test: /[\\/]node_modules[\\/]/,
					name: "vendors",
					chunks: "all",
				},
			},
		},
		minimizer: ["...", new CssMinimizerPlugin()],
	},
	devtool: "inline-source-map",
});
