const CracoAntDesignPlugin = require("craco-antd");

module.exports = {
    eslint: {
        enable: true /* (default value) */,
        mode: 'extends' /* (default value) */ || 'file',
        configure: { /* ... */ },
        configure: (eslintConfig, { env, paths }) => {
            /* ... */
            return eslintConfig;
        },
        pluginOptions: { /* ... */ },
        pluginOptions: (eslintPluginOptions, { env, paths }) => {
            /* ... */
            return eslintPluginOptions;
        },
    },
};

module.exports = {
    plugins: [
        {
            plugin: CracoAntDesignPlugin,
            options: {
                customizeTheme: {
                    "@primary-color": "#1DA57A",
                    "@link-color": "#1DA57A",
                },
            },
        },
    ],
};