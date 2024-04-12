const path = require('path');

module.exports = {
    mode: 'development',
    output: {
        filename: 'webpack.bundle.js',
        clean: true,
    },
    modules: {
        rules: [
            {
                test: /\.(?:js|mjs|cjs)$/,
                exclude: /node_modules/,
                use: {
                  loader: 'babel-loader',
                  options: {
                    presets: [
                      ['@babel/preset-env', { targets: "defaults" }]
                    ]
                  }
                }
            },
        ],
    },
    plugins: [

    ],
}