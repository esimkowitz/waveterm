const path = require("path");

module.exports = {
    mode: "development",
    entry: {
        emain: ["./src/emain.ts"],
    },
    target: "electron-main",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "[name]-dev.js"
    },
    externals: {
        "fs": "require('fs')",
        "fs-ext": "require('fs-ext')",
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                // exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: [
                            [
                                "@babel/preset-env",
                                {
                                    targets: "defaults and not ie > 0 and not op_mini all and not op_mob > 0 and not kaios > 0 and not and_qq > 0 and not and_uc > 0 and not baidu > 0",
                                },
                            ],
                            "@babel/preset-react",
                            "@babel/preset-typescript"],
                        plugins: [
                            ["@babel/transform-runtime", {"regenerator": true}],
                            "@babel/plugin-transform-react-jsx",
                            ["@babel/plugin-proposal-decorators", { "legacy": true }],
                            ["@babel/plugin-proposal-class-properties", { "loose": true }],
                            ["@babel/plugin-proposal-private-methods", { "loose": true }],
                            ["@babel/plugin-proposal-private-property-in-object", { "loose": true }],
                            "babel-plugin-jsx-control-statements",
                        ],
                    },
                },
            },
        ]
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js']
    },
}