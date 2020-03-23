const { onNotFound } = require('../handlers/index');

const request = require('request-promise');

module.exports = async (url) => {
    const config = {
        url,
        method: 'GET',
        headers: {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.132 Safari/537.36'
        },
        json: true
    }

    const response = await request(config);

    return typeof response == 'string' && response.includes('DOCUMENTO AUXILIAR DA NOTA FISCAL DE CONSUMIDOR ELETRÔNICA');
}