// Does not return anything
module.exports = undefined;
_implements = require('./index.js');
Object.prototype.implements = function(what){return _implements(this, what)};
