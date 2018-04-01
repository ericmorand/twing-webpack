const webpack = require("webpack");

webpack({
    entry: './index.js',
    output: {
        filename: 'dist/bundle.js'
    },
    target: "node",
    module: {
        loaders: [
            {
                test: /\.json$/,
                loader: 'json-loader'
            }
        ]
    }
}, (err, stats) => {
    if (err || stats.hasErrors()) {
        console.error(err, stats.compilation.errors);
    }
});

webpack({
    entry: './index-ts.ts',
    output: {
        filename: 'dist/bundle-ts.js'
    },
    target: "node",
    module: {
        loaders: [
            {
                test: /\.ts/,
                loader: 'ts-loader'
            },
            {
                test: /\.json$/,
                loader: 'json-loader'
            }
        ]
    }
}, (err, stats) => {
    if (err || stats.hasErrors()) {
        console.error(err, stats.compilation.errors);
    }
});