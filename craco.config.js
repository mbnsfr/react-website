const CracoAntDesignPlugin = require("craco-antd");
const path = require("path");

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
                customizeThemeLessPath: path.join(
                    __dirname,
                    "src/style/antd/antd.customize.less"
                ),
            },
        },
    ],
};