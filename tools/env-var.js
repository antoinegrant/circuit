const path = require('path');
const yaml_config = require('node-yaml-config');

const config = yaml_config.load(path.resolve(__dirname, '../config/app.yml'));

module.exports = config;