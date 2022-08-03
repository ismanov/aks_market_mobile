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
/* eslint-disable react-hooks/exhaustive-deps */
var react_1 = require("react");
var HeaderBar_1 = require("components/HeaderBar");
var Ionicons_1 = require("react-native-vector-icons/Ionicons");
var MaterialIcons_1 = require("react-native-vector-icons/MaterialIcons");
var react_native_1 = require("react-native");
var styles_1 = require("./styles");
var styles_2 = require("styles");
var redux_hooks_1 = require("hooks/redux-hooks");
var Card_1 = require("./components/CardComponent/Card");
var products_actions_1 = require("stores/actions/products-actions");
var products_slice_1 = require("stores/slices/products-slice");
var category_slice_1 = require("stores/slices/category-slice");
var ProductsScreen = function (_a) {
    var _b;
    var route = _a.route, navigation = _a.navigation;
    var categoryId = (_b = route.params) === null || _b === void 0 ? void 0 : _b.categoryId;
    var dispatch = redux_hooks_1.useAppDispatch();
    var _c = redux_hooks_1.useAppSelector(function (state) { return state.productsState; }), products = _c.products, loader = _c.loader, page = _c.page, totalProductsCount = _c.totalProductsCount;
    var _d = react_1.useState(''), search = _d[0], setSearch = _d[1];
    var _e = react_1.useState(false), onEndReachedCalledDuringMomentum = _e[0], setOnEndReachedCalledDuringMomentum = _e[1];
    react_1.useEffect(function () {
        dispatch(products_actions_1.getProducts({ categoryId: categoryId }));
    }, []);
    react_1.useEffect(function () {
        var id = setTimeout(function () {
            dispatch(products_slice_1.setProducts([]));
            dispatch(products_slice_1.setPage(0));
            dispatch(category_slice_1.setTotalCategoriesCount(0));
            dispatch(products_actions_1.getProducts({ search: search, categoryId: categoryId }, true));
        }, 500);
        return function () { return clearTimeout(id); };
    }, [search, categoryId]);
    var loadMoreData = function () {
        dispatch(products_actions_1.getProducts({ search: search, categoryId: categoryId }));
    };
    return (react_1["default"].createElement(react_native_1.View, { style: styles_1["default"].container },
        react_1["default"].createElement(HeaderBar_1["default"], { title: 'Продукты', leftButtonOnPress: function () { return navigation.goBack(); }, leftButtonIcon: react_1["default"].createElement(MaterialIcons_1["default"], { name: "arrow-back-ios", size: 20, color: styles_2.Colors.LIGHT_GREY }) }),
        react_1["default"].createElement(react_native_1.View, { style: styles_1["default"].searchContainer },
            react_1["default"].createElement(react_native_1.View, { style: styles_1["default"].searchContent },
                react_1["default"].createElement(Ionicons_1["default"], { name: "search", size: 20, color: styles_2.Colors.LIGHT_GREY }),
                react_1["default"].createElement(react_native_1.TextInput, { style: styles_1["default"].searchInput, placeholder: "Search", value: search, onChangeText: function (text) { return setSearch(text); } }))),
        react_1["default"].createElement(react_native_1.View, { style: styles_1["default"].listContainer },
            react_1["default"].createElement(react_native_1.FlatList, { showsVerticalScrollIndicator: false, contentContainerStyle: styles_1["default"].flatListContentContainerStyle, onEndReachedThreshold: 0.1, extraData: [totalProductsCount], numColumns: 2, data: products || [], keyExtractor: function (item) { return item._id; }, onMomentumScrollBegin: function () {
                    onEndReachedCalledDuringMomentum &&
                        setOnEndReachedCalledDuringMomentum(false);
                }, onEndReached: function () {
                    console.log(page);
                    if (!onEndReachedCalledDuringMomentum) {
                        (page || 1) * 30 < (totalProductsCount || 0) && loadMoreData();
                    }
                }, ListFooterComponent: loader
                    ? function () { return (react_1["default"].createElement(react_native_1.View, { style: styles_1["default"].flatListFooterContainer },
                        react_1["default"].createElement(react_native_1.ActivityIndicator, null))); }
                    : undefined, renderItem: function (_a) {
                    var item = _a.item;
                    return react_1["default"].createElement(Card_1["default"], __assign({}, item));
                } }))));
};
exports["default"] = react_1["default"].memo(ProductsScreen);
