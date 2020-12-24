const fs = require('fs');
const yaml = require('js-yaml');

exports.getConfig = function() {
    let config = {};
    try {
        let fileContents = fs.readFileSync('./config.yml', 'utf8');
        config = yaml.safeLoad(fileContents);
        return config; 
    }
    catch (e) {
        console.log(e);
    }
}
