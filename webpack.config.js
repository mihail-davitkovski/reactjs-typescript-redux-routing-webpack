
// Add WebPack to use the included CommonsChunkPlugin
var webpack = require('webpack');
var node_dir = __dirname + '/node_modules';
const path = require('path');

var config = {
    entry: 
    {
        app: './index.tsx',
        vendors: ['react', 'react-dom', 'react-router', 'redux', 'react-redux']
    },

    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: "app.bundle.js",
    },

    module: {
        //Loaders are doing transformations
        loaders: [
            {
                //whenever we try to require something that ends with .tsx it should run the contents of that file through the ts-loader
                //tell webpack to use ts-loader for all *.tsx files
                test:  /\.tsx?$/,
                loader: 'awesome-typescript-loader',
                exclude: ['/node_modules/']
            }
        ]
    },

    // We add a plugin called CommonsChunkPlugin that will take the vendors chunk
    // and create a vendors.js file. As you can see the first argument matches the key
    // of the entry, "vendors"
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({name:'vendors', filename:'app.vendors.js'})
    ],

    // The resolve.alias object takes require expressions
    // (require('react')) as keys and filepath to actual
    // module as values
    resolve: {
        alias: {},
        // you can now require('file') instead of require('file.tsx')
        extensions: ['.js', '.ts', '.tsx']
    }

    /*externals: {
        "react": "React",
        "react-dom": "ReactDOM",
        "react-router": "ReactRouter",
        "redux": "Redux",
        "react-redux":"ReactRedux"
    }*/
};

/*config.addVendor('react', node_dir + '/react/dist/react.min.js');
config.addVendor('react-dom', node_dir + '/react-dom/dist/react-dom.min.js');
config.addVendor('react-router', node_dir + '/react-router/umd/ReactRouter.min.js');
config.addVendor('dispatcher', node_dir + '/flux');
config.addVendor('eventemitter', node_dir + '/eventemitter3');*/
module.exports = config;