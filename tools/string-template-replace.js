const path = require('path');
const glob = require('glob');
const fs = require('fs');
const replace = require('replace');

const config = require('./env-var');

const templates = path.resolve(__dirname, '../index.html');
glob(templates, (err, files) => {
  if (err) throw err;
  if (files.length <= 0) throw new Error("No files were found");

  files.forEach((item, index, array) => {
    Object.keys(config).forEach(key => {
      replace({
        regex: `{{${key}}}`,
        replacement: config[key],
        paths: [item],
        recursive: true,
        silent: true
      });
    });
  });

  process.exit();
});