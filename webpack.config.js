module.exports = {
    entry: './src/app.js',
    output: {
        filename: 'index.js'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/
            }
        ]
    }
};