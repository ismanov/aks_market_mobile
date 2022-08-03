"use strict";
exports.__esModule = true;
var react_1 = require("react");
var react_native_1 = require("react-native");
var styles_1 = require("./styles");
var react_native_fast_image_1 = require("react-native-fast-image");
var constants_1 = require("api/constants");
var Card = function (props) {
    var _a, _b;
    console.log(constants_1.base_url + "products/image/" + ((_a = props.images) === null || _a === void 0 ? void 0 : _a.site_uploaded));
    return (react_1["default"].createElement(react_native_1.TouchableOpacity, { style: styles_1["default"].container },
        react_1["default"].createElement(react_native_fast_image_1["default"], { style: styles_1["default"].imageContainer, source: {
                uri: constants_1.base_url + "products/image?path=" + ((_b = props.images) === null || _b === void 0 ? void 0 : _b.site_uploaded),
                priority: react_native_fast_image_1["default"].priority.normal
            }, resizeMode: react_native_fast_image_1["default"].resizeMode.contain }),
        react_1["default"].createElement(react_native_1.Text, { style: styles_1["default"].productNameStyle, numberOfLines: 2 }, props.fullName),
        react_1["default"].createElement(react_native_1.View, null,
            react_1["default"].createElement(react_native_1.Text, null,
                "prices: ",
                ((props === null || props === void 0 ? void 0 : props.prices) || {})['14a86f7d3df811e2aedc001517d28cb0']))));
};
exports["default"] = Card;
