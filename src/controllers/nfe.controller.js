const validator = require('../_shared/helpers/validate-nfe-url');

const { onBadRequest, onSuccess } = require('../_shared/handlers/index');
const rabbitMqService = require('../services/rabbitmq.service');

class Controller {
    async send(ctx) {
        try {
            const { body } = ctx.request;

            if (!body || typeof body !== 'object') {
                return onBadRequest(ctx, 'Invalid request body');
            }

            const requiredFields = ['uf_emmited', 'nfe_url'];

            const missingFieds = requiredFields.filter(param => !body[param]);

            if (missingFieds.length) {
                return onBadRequest(ctx, `missing body fields: ${missingFieds}`);
            }

            const isValidNfe = await validator(body.nfe_url);

            if (!isValidNfe) {
                return onBadRequest(ctx, 'Invalid NFE url sent!');
            }

            await rabbitMqService.send('nfe', body);

            return onSuccess(ctx, body);
        } catch (err) {
            onBadRequest(ctx, err.message);
        }
    }
}

module.exports = new Controller();