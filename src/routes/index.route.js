const Router = require('koa-router');
const nfeRoutes = require('./nfe.route');

class RouterController {
    constructor() {
        this.router = new Router();
    }

    load(app) {
        this.router.prefix(`/api/${process.env.BASE_API}`);

        nfeRoutes(this.router);

        app.use(this.router.routes());
    }
}

module.exports = new RouterController();