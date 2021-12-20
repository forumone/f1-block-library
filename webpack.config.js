const defaultConfig = require('@wordpress/scripts/config/webpack.config');
const path = require('path');
const glob = require('glob');
module.exports = {
  ...defaultConfig,
  entry: () => {
    return glob
      .sync('!(build|node_modules)/**/*.js', {
        ignore: ['**/_*'],
      })
      .reduce((entries, currentFile) => {
        const updatedEntries = entries;
        const [newFilePath] = path.dirname(currentFile).split(path.sep).slice(-1);
        // Throw an error if duplicate files detected.
        if (updatedEntries[newFilePath]) {
          throw new Error(`More than one file named ${newFilePath}.js found.`);
        }
        updatedEntries[newFilePath] = {
          import: path.resolve(__dirname, currentFile),
        };
        return updatedEntries;
      }, {});
  }
}
