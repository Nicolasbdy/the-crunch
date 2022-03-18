"use strict";
exports.__esModule = true;
var react_1 = require("@ionic/react");
require("./deuxpoints.css");
var react_2 = require("react");
var react_router_dom_1 = require("react-router-dom");
var DeuxPoints = function (props) {
    var location = react_router_dom_1.useLocation();
    var _a = react_2.useState(""), url = _a[0], setUrl = _a[1];
    var _b = react_2.useState(""), text = _b[0], setText = _b[1];
    var _c = react_2.useState(""), text2 = _c[0], setText2 = _c[1];
    var _d = react_2.useState(""), player = _d[0], setPlayer = _d[1];
    react_2.useEffect(function () {
        console.log(props);
        var params = props.history.location.state;
        setUrl(params.url);
        setText(params.text);
        setPlayer(params.player);
        setText2(params.text2);
    }, [location]);
    return (React.createElement(react_1.IonPage, { className: 'safe-area' },
        React.createElement(react_1.IonHeader, null),
        React.createElement(react_1.IonContent, { fullscreen: true },
            React.createElement("div", { className: 'containergif' },
                React.createElement("span", { className: "text5" },
                    " ",
                    player,
                    " ",
                    text),
                React.createElement(react_1.IonImg, { className: 'gif1', src: url }),
                React.createElement("span", { className: 'text6' }, text2),
                React.createElement(react_1.IonButton, { color: "light texte textemarge", routerLink: '/Live' }, "J'ai bu.")))));
};
exports["default"] = DeuxPoints;
