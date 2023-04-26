var path = require('path');

module.exports = {
    entry: `./resource/js/index.js`,
    target: 'web',
    resolve: {
        modules: ['node_modules'],
      },
    output: {
      path: path.join(__dirname, '/public/js'),
      filename: "index.js"
    }
};