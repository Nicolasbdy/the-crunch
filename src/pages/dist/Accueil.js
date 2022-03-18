"use strict";
exports.__esModule = true;
var react_1 = require("@ionic/react");
require("./Accueil.css");
var Accueil = function () {
    return (React.createElement(react_1.IonPage, { className: 'safe-area' },
        React.createElement(react_1.IonHeader, null),
        React.createElement(react_1.IonContent, { fullscreen: true },
            React.createElement("div", { className: 'background-image container' },
                React.createElement("div", { className: 'container-bouton' },
                    React.createElement(react_1.IonButton, { color: "light text bouton", routerLink: '/Compositions' }, "\u00C9quipes"),
                    React.createElement(react_1.IonButton, { color: "light text bouton", routerLink: '/Live' }, "Match")),
                React.createElement("span", { className: "Red title" }, "\uD83C\uDDEB\uD83C\uDDF7 The Crunch \uD83C\uDFF4\uDB40\uDC67\uDB40\uDC62\uDB40\uDC65\uDB40\uDC6E\uDB40\uDC67\uDB40\uDC7F")))));
};
exports["default"] = Accueil;
