import { Router } from 'express'

class EmployeesRoutes {

    router: Router = Router();

    constructor() {
        this.config();
    }

    config() : void {

        this.router.get('/', (req, res) => res.send("Empleados"));

    }

}

const indexRoutes = new EmployeesRoutes();
export default indexRoutes.router;