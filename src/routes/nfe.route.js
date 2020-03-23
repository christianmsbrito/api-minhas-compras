const controller = require('../controllers/nfe.controller');

module.exports = (router) => {
    router.post('/nfe', controller.send);
    // router.get('/nfe/:id');
    // router.post('/nfe');
}