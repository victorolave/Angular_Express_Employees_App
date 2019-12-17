"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
class EmployeesRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', (req, res) => res.send("Empleados"));
    }
}
const indexRoutes = new EmployeesRoutes();
exports.default = indexRoutes.router;
