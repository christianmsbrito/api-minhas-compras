const validator = require('./src/_shared/helpers/validate-nfe-url');

(async ()=> {
    try {
        const nfe = await validator('https://www.nasclsfce.fazenda.sp.gov.br/qrcode?p=35200347508411102072651190000224041052326743|2|1|1|3769974985338A8DFB40793DD004FB00F2A5E7DE');
    
        return console.log(nfe);
    } catch(err) {
        console.log(err.message.includes('ENOTFOUND'));
    }
})()