'use strict';

var core = require('@capacitor/core');

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
//# sourceMappingURL=plugin.cjs.js.map
