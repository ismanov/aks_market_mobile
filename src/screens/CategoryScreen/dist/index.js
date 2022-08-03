"use strict";
exports.__esModule = true;
/* eslint-disable react-hooks/exhaustive-deps */
var react_1 = require("react");
var HeaderBar_1 = require("components/HeaderBar");
var Ionicons_1 = require("react-native-vector-icons/Ionicons");
var react_native_1 = require("react-native");
var styles_1 = require("./styles");
var styles_2 = require("styles");
var redux_hooks_1 = require("hooks/redux-hooks");
var category_actions_1 = require("stores/actions/category-actions");
var Card_1 = require("./components/CardComponent/Card");
var category_slice_1 = require("stores/slices/category-slice");
var CategoryScreen = function (_a) {
    var navigation = _a.navigation;
    var dispatch = redux_hooks_1.useAppDispatch();
    var _b = redux_hooks_1.useAppSelector(function (state) { return state.categoryState; }), categories = _b.categories, loader = _b.loader, page = _b.page, totalCategoriesCount = _b.totalCategoriesCount;
    var _c = react_1.useState(''), search = _c[0], setSearch = _c[1];
    var _d = react_1.useState(false), onEndReachedCalledDuringMomentum = _d[0], setOnEndReachedCalledDuringMomentum = _d[1];
    react_1.useEffect(function () {
        dispatch(category_actions_1.getCategories());
    }, []);
    react_1.useEffect(function () {
        var id = setTimeout(function () {
            dispatch(category_slice_1.setPage(0));
            dispatch(category_slice_1.setTotalCategoriesCount(0));
            dispatch(category_actions_1.getCategories(search, true));
        }, 500);
        return function () { return clearTimeout(id); };
    }, [search]);
    var loadMoreData = function () {
        dispatch(category_actions_1.getCategories(search || undefined));
    };
    return (react_1["default"].createElement(react_native_1.View, { style: styles_1["default"].container },
        react_1["default"].createElement(HeaderBar_1["default"], { title: 'Категории' }),
        react_1["default"].createElement(react_native_1.View, { style: styles_1["default"].searchContainer },
            react_1["default"].createElement(react_native_1.View, { style: styles_1["default"].searchContent },
                react_1["default"].createElement(Ionicons_1["default"], { name: "search", size: 20, color: styles_2.Colors.LIGHT_GREY }),
                react_1["default"].createElement(react_native_1.TextInput, { style: styles_1["default"].searchInput, placeholder: "Search", value: search, onChangeText: function (text) { return setSearch(text); } }))),
        react_1["default"].createElement(react_native_1.View, { style: styles_1["default"].listContainer },
            react_1["default"].createElement(react_native_1.FlatList, { showsVerticalScrollIndicator: false, contentContainerStyle: styles_1["default"].flatListContentContainerStyle, onEndReachedThreshold: 0.1, extraData: [totalCategoriesCount], onMomentumScrollBegin: function () {
                    onEndReachedCalledDuringMomentum &&
                        setOnEndReachedCalledDuringMomentum(false);
                }, onEndReached: function () {
                    console.log(page);
                    if (!onEndReachedCalledDuringMomentum) {
                        (page || 1) * 30 < (totalCategoriesCount || 0) && loadMoreData();
                    }
                }, ListFooterComponent: loader
                    ? function () { return (react_1["default"].createElement(react_native_1.View, { style: styles_1["default"].flatListFooterContainer },
                        react_1["default"].createElement(react_native_1.ActivityIndicator, null))); }
                    : undefined, data: categories || [], renderItem: function (_a) {
                    var item = _a.item, index = _a.index;
                    return (react_1["default"].createElement(Card_1["default"], { onPress: function () { return navigation === null || navigation === void 0 ? void 0 : navigation.navigate('ProductsStack', { categoryId: item._id }); }, key: index, name: item.name }));
                } }))));
};
exports["default"] = react_1["default"].memo(CategoryScreen);
