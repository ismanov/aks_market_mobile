"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
var react_native_1 = require("react-native");
var styles_1 = require("styles");
var typography_1 = require("styles/typography");
exports["default"] = react_native_1.StyleSheet.create({
    container: __assign({ width: 43 * styles_1.sizeH, height: 60 * styles_1.sizeH, marginTop: 2 * styles_1.sizeV, paddingHorizontal: 3 * styles_1.sizeH, alignItems: 'center', borderRadius: 10, backgroundColor: styles_1.Colors.WHITE, padding: 2 * styles_1.sizeH, marginRight: 4 * styles_1.sizeH }, styles_1.OtherStyles.shadow),
    imageContainer: {
        width: 37 * styles_1.sizeH,
        height: 37 * styles_1.sizeH,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 4 * styles_1.sizeH
    },
    productNameStyle: __assign(__assign({}, typography_1.H4), { maxWidth: '90%', marginRight: 2 * styles_1.sizeH })
});
