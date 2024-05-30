"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const body_parser_1 = __importDefault(require("body-parser"));
const productRoutes_1 = __importDefault(require("./app/Modules/Routers/productRoutes"));
const orderRoutes_1 = __importDefault(require("./app/Modules/Routers/orderRoutes"));
const Connection_1 = __importDefault(require("./app/Modules/Ecommers/Connection"));
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
/* const port = 3000 */
app.use(body_parser_1.default.json());
app.use('/api', productRoutes_1.default);
app.use('/api', orderRoutes_1.default);
//persers
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.get('/', (req, res) => {
    res.send('welcome Ecommerce website');
});
(0, Connection_1.default)();
exports.default = app;
