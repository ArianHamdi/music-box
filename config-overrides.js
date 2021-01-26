module.exports = function override(config, env) {

    const newLoaders = [{
        test: /\.svg$/,
        use: ['@svgr/webpack'],
    },
    {
        test: /\.scss$/,
        use: [
            {
                loader: "style-loader",
            }, {
                loader: "css-loader",
            }, {
                loader: "sass-loader",
            }, {
                loader: "sass-resources-loader",
                options: {
                    resources: ['./src/Constant/_break-point.scss', './node_modules/include-media/dist/_include-media.scss'],
                }
            }
        ],
    }
    ]



    const loaders = [...newLoaders, ...config.module.rules[1].oneOf];

    config.module.rules[1].oneOf = loaders;

    return config;
}


