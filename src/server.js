if (!process.env.PRODUCTION) {
    require('dotenv').config();
}

const Rabbit = require('./_shared/connections/rabbitmq');

(async () => {
    await Rabbit.connect();

    const App = require('./app')(process.env.ENVIRONMENT);

    const listenPort = process.env.PORT || 3777;
    
    App.listen(listenPort);
    
    console.log('Server is running on port ' + listenPort);
})()
