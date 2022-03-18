"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
var react_1 = require("@ionic/react");
var react_2 = require("react");
require("./Live.css");
var Wrapper_1 = require("../Wrapper");
var logoag_png_1 = require("./logoag.png");
var logoffr_png_1 = require("./logoffr.png");
var react_router_dom_1 = require("react-router-dom");
var Live = function () {
    var _a = react_2.useState(0), homeScore = _a[0], setHomeScore = _a[1];
    var _b = react_2.useState(0), awayScore = _b[0], setAwayScore = _b[1];
    var history = react_router_dom_1.useHistory();
    react_2.useEffect(function () {
        var initScore = function () { return __awaiter(void 0, void 0, void 0, function () {
            var hs, as;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, Wrapper_1.GetHomeScore()];
                    case 1:
                        hs = _a.sent();
                        setHomeScore(hs);
                        return [4 /*yield*/, Wrapper_1.GetAwayScore()];
                    case 2:
                        as = _a.sent();
                        setAwayScore(as);
                        return [2 /*return*/];
                }
            });
        }); };
        initScore();
        var r = setInterval(logique, 2 * 1000);
        return function () {
            clearInterval(r);
        };
    }, []);
    var openGifPage = function (url, text, text2, player) {
        history.push('/DeuxPoints', { url: url, text: text, player: player, text2: text2 });
    };
    var logique = function () { return __awaiter(void 0, void 0, void 0, function () {
        var data, hs, as;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, Wrapper_1.GetData()];
                case 1:
                    data = _a.sent();
                    console.log(data);
                    return [4 /*yield*/, Wrapper_1.GetHomeScore()];
                case 2:
                    hs = _a.sent();
                    setHomeScore(hs);
                    return [4 /*yield*/, Wrapper_1.GetAwayScore()];
                case 3:
                    as = _a.sent();
                    setAwayScore(as);
                    // Logique
                    if (data.type == "Try") {
                        if (data.team == 'home') {
                            // essai France 
                            openGifPage("https://media.giphy.com/media/ZY9PiiDRlKHjnG2q2v/giphy.gif", "te donne 1 shot/ 5 gorgées", "Essai 🇫🇷", data.player);
                        }
                        if (data.team == 'away') {
                            //essai Angleterre
                            openGifPage("https://media.giphy.com/media/8vUEXZA2me7vnuUvrs/giphy.gif", "te donne 1 shot/ 5 gorgées", "Essai 🏴󠁧󠁢󠁥󠁮󠁧󠁿", data.player);
                        }
                    }
                    if (data.type == "Penality") {
                        if (data.team == 'home') {
                            // pénalité France
                            openGifPage("https://media.giphy.com/media/l2QE4TXbK1EuFy1Ms/giphy.gif", "te donne 3 gorgées", "Pénalité France", data.player);
                        }
                        if (data.team == 'away') {
                            // pénalité Angleterre
                            openGifPage("https://media.giphy.com/media/l2QE4TXbK1EuFy1Ms/giphy.gif", "te donne 3 gorgées", " Pénalité Angleterre", data.player);
                        }
                    }
                    if (data.type == "Conversion") {
                        if (data.team == 'home') {
                            // Transformation France
                            openGifPage("https://media.giphy.com/media/u2mV6urByEwplx49he/giphy.gif", "te donne 1 gorgée", "Transformation France", data.player);
                        }
                        if (data.team == 'away') {
                            // Transformation Angleterre
                            openGifPage("https://media.giphy.com/media/26xBwYrIXjIlDjr7G/giphy.gif", "te donne 1 gorgée", "Transformation Angleterre", data.player);
                        }
                    }
                    if (data.type == "Yellow card") {
                        if (data.team == 'home') {
                            // Carton Jaune France
                            openGifPage("https://media.giphy.com/media/HygtmkX83uQ3vSR5pg/giphy.gif", "te donne 2 gorgées", "Carton jaune France", data.player);
                        }
                        if (data.team == 'away') {
                            // Carton Jaune Angleterre  
                            openGifPage("https://media.giphy.com/media/vvbGMpbhZMcHSsD50w/giphy.gif", "te donne 2 gorgées", "Carton jaune Angleterre", data.player);
                        }
                    }
                    if (data.type == "Red card") {
                        if (data.team == 'home') {
                            // Carton Rouge France
                            openGifPage("https://media.giphy.com/media/e6TR9n00dL3JS/giphy.gif", "te donne un bon vieux cul-sec", "Carton rouge France", data.player);
                        }
                        if (data.team == 'away') {
                            // Carton Rouge Angleterre
                            openGifPage("https://media.giphy.com/media/DxOZLQD93v4299fOn4/giphy.gif", "te donne un bon vieux cul-sec", "Carton rouge Angleterre", data.player);
                        }
                    }
                    return [2 /*return*/];
            }
        });
    }); };
    return (React.createElement(react_1.IonPage, { className: 'safe-area' },
        React.createElement(react_1.IonHeader, null,
            React.createElement(react_1.IonTitle, null, "Live"),
            React.createElement("div", { className: 'container5' },
                React.createElement(react_1.IonButton, { color: "light texte", routerLink: '/' }, "Retour"),
                React.createElement(react_1.IonButton, { color: "light texte", routerLink: '/Compositions' }, "\u00C9quipes"))),
        React.createElement(react_1.IonContent, { fullscreen: true },
            React.createElement("div", { className: 'container2' },
                React.createElement("div", { className: 'container-bouton1' },
                    React.createElement(react_1.IonImg, { className: "fit-picture", src: logoffr_png_1["default"] }),
                    React.createElement(react_1.IonImg, { className: "fit-picture", src: logoag_png_1["default"] })),
                React.createElement("div", { className: 'container-bouton1' },
                    React.createElement(react_1.IonButton, { color: "light text bouton" }, homeScore),
                    React.createElement(react_1.IonButton, { color: "light text bouton" }, awayScore)),
                React.createElement("div", { className: 'container-alcool' },
                    React.createElement("span", { color: "light text bouton" }, "Le manque d'alcool c'est comme le niveau des anglais, ca n'existe pas! \uD83D\uDD95 "))),
            React.createElement("div", { className: 'container-alcool2' },
                React.createElement("span", { color: "light text bouton" }, "\uD83C\uDF7B\u203C\uFE0F N'h\u00E9sitez pas \u00E0 remplir vos verres, un ph\u00E9nom\u00E8ne d'\u00E9vaporation excessive est fortement pr\u00E9sent ce soir \uD83D\uDED1\uD83C\uDF7B ")))));
};
exports["default"] = Live;
