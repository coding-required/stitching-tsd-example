const dts = require('dts-bundle');

class DtsBundleWebpackPlugin {
    constructor(options) {
        this.options = options;
    }

    apply(compiler) {
        compiler.plugin('done', () => {
            dts.bundle(this.options);
        });
    }
}


module.exports = DtsBundleWebpackPlugin;