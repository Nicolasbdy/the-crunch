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
var react_router_dom_1 = require("react-router-dom");
var react_1 = require("@ionic/react");
var react_router_1 = require("@ionic/react-router");
var icons_1 = require("ionicons/icons");
var Accueil_1 = require("./pages/Accueil");
var Compositions_1 = require("./pages/Compositions");
var Live_1 = require("./pages/Live");
var deuxpoints_1 = require("./pages/deuxpoints");
/* Core CSS required for Ionic components to work properly */
require("@ionic/react/css/core.css");
/* Basic CSS for apps built with Ionic */
require("@ionic/react/css/normalize.css");
require("@ionic/react/css/structure.css");
require("@ionic/react/css/typography.css");
/* Optional CSS utils that can be commented out */
require("@ionic/react/css/padding.css");
require("@ionic/react/css/float-elements.css");
require("@ionic/react/css/text-alignment.css");
require("@ionic/react/css/text-transformation.css");
require("@ionic/react/css/flex-utils.css");
require("@ionic/react/css/display.css");
/* Theme variables */
require("./theme/variables.css");
react_1.setupIonicReact();
var App = function () { return (React.createElement(react_1.IonApp, null,
    React.createElement(react_router_1.IonReactRouter, { basename: '/the-crunch' },
        React.createElement(react_1.IonTabs, null,
            React.createElement(react_1.IonRouterOutlet, null,
                React.createElement(react_router_dom_1.Route, { exact: true, path: "/" },
                    React.createElement(Accueil_1["default"], null)),
                React.createElement(react_router_dom_1.Route, { exact: true, path: "/Compositions" },
                    React.createElement(Compositions_1["default"], null)),
                React.createElement(react_router_dom_1.Route, { path: "/Live" },
                    React.createElement(Live_1["default"], null)),
                React.createElement(react_router_dom_1.Route, { path: "/DeuxPoints", render: function (props) { return (React.createElement(deuxpoints_1["default"], __assign({}, props))); } })),
            React.createElement(react_1.IonTabBar, { slot: "bottom", style: { 'display': 'none' } },
                React.createElement(react_1.IonTabButton, { tab: "Accueil", href: "/" },
                    React.createElement(react_1.IonIcon, { icon: icons_1.triangle }),
                    React.createElement(react_1.IonLabel, null, "Accueil"))))))); };
exports["default"] = App;
