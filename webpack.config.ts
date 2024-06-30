module.exports = {
    resolve: {
        fallback: {
            stream: require.resolve("stream-browserify"),
        }
    },
    externals: {
        'node-stream': 'commonjs2 node-stream',
    }
}