"use strict";
exports.__esModule = true;
var react_1 = require("@ionic/react");
require("./Compositions.css");
var compofrance_jpeg_1 = require("./compofrance.jpeg");
var Compositions = function () {
    return (React.createElement(react_1.IonPage, { className: 'safe-area' },
        React.createElement(react_1.IonToolbar, null),
        React.createElement(react_1.IonContent, { fullscreen: true },
            React.createElement("div", { className: 'container4' },
                React.createElement(react_1.IonButton, { color: "light texte", routerLink: '/' }, "Retour"),
                React.createElement(react_1.IonButton, { color: "light texte", routerLink: '/Live' }, "Match")),
            React.createElement(react_1.IonImg, { className: "", src: compofrance_jpeg_1["default"] }),
            React.createElement("div", { className: 'roulade' },
                React.createElement("span", { color: "light text bouton" }, " Avec une \u00E9quipe comme \u00E7a le Rosbeef \u00E7a se mange cru ! \uD83E\uDD0C\uD83D\uDC4A ")))));
};
exports["default"] = Compositions;
