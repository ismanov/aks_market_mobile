"use strict";
exports.__esModule = true;
var react_1 = require("react");
var bottom_tabs_1 = require("@react-navigation/bottom-tabs");
var MaterialIcons_1 = require("react-native-vector-icons/MaterialIcons");
var MaterialCommunityIcons_1 = require("react-native-vector-icons/MaterialCommunityIcons");
var HomeScreen_1 = require("screens/HomeScreen");
var CategoryScreen_1 = require("screens/CategoryScreen");
var ProductsScreen_1 = require("screens/ProductsScreen");
var Tab = bottom_tabs_1.createBottomTabNavigator();
var BottomTabBar = function () {
    return (react_1["default"].createElement(Tab.Navigator, { screenOptions: {
            headerShown: false
        } },
        react_1["default"].createElement(Tab.Screen, { name: "Home", component: HomeScreen_1["default"], options: {
                tabBarLabel: 'Home',
                tabBarIcon: function (_a) {
                    var color = _a.color, size = _a.size;
                    return (react_1["default"].createElement(MaterialCommunityIcons_1["default"], { name: "home", color: color, size: size }));
                }
            } }),
        react_1["default"].createElement(Tab.Screen, { name: "CategoryStack", component: CategoryScreen_1["default"], options: {
                tabBarLabel: 'Category',
                tabBarIcon: function (_a) {
                    var color = _a.color, size = _a.size;
                    return (react_1["default"].createElement(MaterialIcons_1["default"], { name: "category", color: color, size: size }));
                }
            } }),
        react_1["default"].createElement(Tab.Screen, { name: "ProductsStack", component: ProductsScreen_1["default"], options: {
                tabBarLabel: 'Products',
                tabBarIcon: function (_a) {
                    var color = _a.color, size = _a.size;
                    return (react_1["default"].createElement(MaterialCommunityIcons_1["default"], { name: "usb-flash-drive", color: color, size: size }));
                }
            } })));
};
exports["default"] = BottomTabBar;
