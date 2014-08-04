var path = require('path');

var createPattern = function(file) {
    return {pattern: file, included: true, served: true, watched: false};
};

var initSinon = function(files) {
    var sinonPath = path.dirname(require.resolve('sinon')) + '/../pkg';
    files.unshift(createPattern(sinonPath + '/sinon.js'));
    files.unshift(createPattern(sinonPath + '/sinon-ie.js'));
};

initSinon.$inject = ['config.files'];

module.exports = {
    'framework:sinon': ['factory', initSinon]
};
