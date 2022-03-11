const defaultConfig = require('@wordpress/scripts/config/webpack.config');
const path = require('path');
const glob = require('glob');
module.exports = {
	...defaultConfig,
	entry: () => {
		return glob
			.sync('!(build|node_modules|lib)/**/*.js', {
				ignore: ['**/_*'],
			})
			.reduce((entries, currentFile) => {
				const updatedEntries = entries;
				let newFilePath;
				if (path.basename(currentFile, '.js') === 'index') {
					[newFilePath] = path
						.dirname(currentFile)
						.split(path.sep)
						.slice(-1);
				} else {
					newFilePath = path.basename(currentFile, '.js');
				}
				// Throw an error if duplicate files detected.
				if (updatedEntries[newFilePath]) {
					throw new Error(
						`More than one file named ${newFilePath}.js found.`
					);
				}
				updatedEntries[newFilePath] = {
					import: path.resolve(__dirname, currentFile),
				};
				return updatedEntries;
			}, {});
	},
	resolve: {
		...defaultConfig.resolve,
		modules: [path.resolve(__dirname), 'node_modules'],
	},
};
