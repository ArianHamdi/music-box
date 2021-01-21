module.exports = function override(config, env) {

    const newConfig = { ...config }

    const loader = {
        test: /\.svg$/,
        use: ['@svgr/webpack'],
    }

    const newLoaders = [loader, ...config.module.rules[1].oneOf];

    newConfig.module.rules[1].oneOf = newLoaders;

    return newConfig;
}


