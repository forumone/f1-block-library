const path = require('path');
module.exports = (config) => {
	return {
		...config,
		devServer: {
			...config.devServer,
			static: path.resolve(process.cwd(), '../../..'),
		},
	};
};
