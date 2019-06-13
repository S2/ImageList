var webpack = require('webpack');
var path = require('path')
var process = require("process");
let time = new Date().getTime()

let entry = {
    "image_list" : [
        "./src/ImageList.tsx" , 
    ] , 
}

let plugins = [
    new webpack.DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify('production')
    }),
    new webpack.LoaderOptionsPlugin({
        options: {
            postcss: [
                process
            ]
        }
    })
];

module.exports = {
    cache:true , 
    entry: entry ,
    output: {
        filename: "[name].js?[hash:6]",
        path: __dirname + "/dist"
    },

    resolve: {
        extensions: [".ts", ".tsx", ".js", ".json"]
    },

    module: {
        rules: [
            {
                test: /\.css$/,
                use: [{
                    loader: "style-loader" // creates style nodes from JS strings
                }, {
                    loader: "css-loader" // translates CSS into CommonJS
                }]
            },
            {
                test: /\.sass$/,
                use: [{
                    loader: "style-loader" // creates style nodes from JS strings
                }, {
                    loader: "css-loader" // translates CSS into CommonJS
                }, {
                    loader: "sass-loader" 
                }, {
                    loader: "import-glob-loader" 
                }]
            },
            {
                test: /\.tsx?$/,
                loader: "ts-loader" ,
                options: {
                },
            },
            {
                test: /\.(jpg|png|woff|woff2|eot|otf|ttf|svg)$/,
                loader: 'url-loader?limit=100000&name=/[hash].[ext]'
            }
        ]
    },
    plugins: plugins , 
};
