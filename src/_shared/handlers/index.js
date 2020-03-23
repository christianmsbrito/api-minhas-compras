const onCreated = require('./onCreated');
const onSuccess = require('./onSuccess');
const onBadRequest = require('./onBadRequest');
const onDeleted = require('./onDeleted');
const onUnathorized = require('./onUnathorized');
const onNotFound = require('./onNotFound');

module.exports = {
    onCreated,
    onSuccess,
    onBadRequest,
    onDeleted,
    onUnathorized,
    onNotFound
}