"use strict";
exports.__esModule = true;
var react_1 = require("react");
var react_native_1 = require("react-native");
var styles_1 = require("styles");
var MaterialIcons_1 = require("react-native-vector-icons/MaterialIcons");
var styles_2 = require("./styles");
var Card = function (props) {
    return (react_1["default"].createElement(react_native_1.TouchableOpacity, { style: styles_2["default"].container, onPress: props.onPress },
        react_1["default"].createElement(react_native_1.Text, { style: styles_2["default"].categoryNameStyle, numberOfLines: 2 }, props.name),
        react_1["default"].createElement(MaterialIcons_1["default"], { name: "navigate-next", size: 24, color: styles_1.Colors.LIGHT_GREY })));
};
exports["default"] = Card;
