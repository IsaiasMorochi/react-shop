const path = require('path'); //path del proyecto principal
const HtmlWebpackPlugin = require('html-webpack-plugin'); //traemos el plugin
//de html
const MiniCssExtractPlugin = require('mini-css-extract-plugin'); //traemos el plugin de css


module.exports = {
    entry: './src/index.js', // punto de entrada
    output: { // lugar al que saldrán todos los archivos
        path: path.resolve(__dirname, 'dist'), //en nuestro path, crea la carpeta dist
        filename: 'bundle.js' // nombre del archivo js resultante
    },
    mode: 'development',
    resolve: { // extensión de archivos a tomar en cuenta
        extensions: ['.js', '.jsx']
    },
    module: { // loaders para cada tipo de archivo
        rules: [ // reglas para usar
            {
                test: /\.(js|jsx)$/, // extensiones en las cuales actuará babel
                exclude: /node_modules/, // siempre excluir node modules 
                use: { // indicamos el loader
                    loader: 'babel-loader' // babel 
                }
            },
            {
                test: /\.html$/, // extensiones html
                use: [
                    {
                        loader: 'html-loader' // loader para usar
                    }
                ]
            },
            {   test: /\.s[ac]ss$/i, // extensiones css
                use: [ // usamos los loaders
                    "style-loader", // para usar el css en el html
                    "css-loader", // para usar el css en el js
                    "sass-loader", // para usar el sass en el css
                ],
            },
        ]
    },
    plugins: [ // plugins 
        new HtmlWebpackPlugin({ // instanciamos el plugin para html 
            template: './public/index.html', // archivo raíz a transformar
            filename: './index.html' // el archivo resultante
        }),
        new MiniCssExtractPlugin({ // instanciamos el plugin para css
            filename: '[name].css' // nombre del archivo resultante
        }),
    ],
    devServer: { // configuración del servidor
        static: {
            directory: path.resolve(__dirname, 'dist'), // carpeta donde están los archivos
        },
        compress: true, // comprimir
        port: 3005, // puerto
    }
}