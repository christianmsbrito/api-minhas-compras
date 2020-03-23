const amqp = require('amqplib/callback_api');

class RabbitMQ {
    static async connect() {
        RabbitMQ._channel = await new Promise((resolve, reject) => {
            amqp.connect(process.env.AMQP_URL, (err, connection) => {
                if (err) {
                    return reject(err);
                }
    
                connection.createChannel((err, channel) => {
                    if(!err) resolve(channel);
                });
            })
        });
    }
    
    static get channel() {
        return RabbitMQ._channel;
    }
}

module.exports = RabbitMQ;