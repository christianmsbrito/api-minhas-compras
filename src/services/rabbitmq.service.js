const Rabbit = require('../_shared/connections/rabbitmq');

class Service {
    constructor() {
        this.channel = Rabbit.channel;
    }

    async send(queue, message) {
        const stringToSend = JSON.stringify(message);

        this.channel.assertQueue(queue, {
            durable: true
        });

        return this.channel.sendToQueue(queue, Buffer.from(stringToSend));
    }
}

module.exports = new Service();