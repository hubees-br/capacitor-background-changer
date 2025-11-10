var capacitorBackgroundChanger = (function (exports, core) {
    'use strict';

    const BackgroundChanger = core.registerPlugin('BackgroundChanger', {
        web: () => Promise.resolve().then(function () { return web; }).then((m) => new m.BackgroundChangerWeb()),
    });

    class BackgroundChangerWeb extends core.WebPlugin {
        changeBackgroundToTransparent() {
            throw new Error('Method not implemented on web.');
        }
        changeBackgroundToWhite() {
            throw new Error('Method not implemented on web.');
        }
    }

    var web = /*#__PURE__*/Object.freeze({
        __proto__: null,
        BackgroundChangerWeb: BackgroundChangerWeb
    });

    exports.BackgroundChanger = BackgroundChanger;

    return exports;

})({}, capacitorExports);
//# sourceMappingURL=plugin.js.map
