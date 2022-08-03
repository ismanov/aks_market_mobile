"use strict";
exports.__esModule = true;
var react_1 = require("react");
var stack_1 = require("@react-navigation/stack");
var AuthScreen_1 = require("screens/AuthScreen");
var routes_1 = require("navigation/routes");
var TabNavigation_1 = require("./TabNavigation");
var Stack = stack_1.createStackNavigator();
var MainNavigation = function () {
    return (react_1["default"].createElement(Stack.Navigator, { screenOptions: {
            headerShown: false
        } },
        react_1["default"].createElement(Stack.Screen, { name: routes_1.BASE_ROUTES.AUTH, component: AuthScreen_1["default"] }),
        react_1["default"].createElement(Stack.Screen, { name: routes_1.BASE_ROUTES.MAIN, component: TabNavigation_1["default"] })));
};
exports["default"] = react_1["default"].memo(MainNavigation);
